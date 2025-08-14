import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { assert } from "tsafe/assert";
import memoize from "memoizee";
import FlexSearch from "flexsearch";
import { getMatchPositions } from "core/tools/highlightMatches";
import { createUsecaseContextApi } from "clean-architecture";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import { getCatalogData } from "core/adapters/catalogData";
import type { Language, CatalogData, EducationalResource } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";

export const thunks = {
    initialize:
        (params: {
            path: string[];
            search: string;
            selectedTags: EducationalResource.Tag[];
            language: Language;
        }) =>
        async (...args) => {
            const [dispatch, getState, { evtAction }] = args;

            dispatch(privateThunks.lazyInitialization());

            {
                const isReady = privateSelectors.isReady(getState());

                if (!isReady) {
                    const isFetching = privateSelectors.isFetching(getState());
                    assert(isFetching !== null);
                    if (isFetching) {
                        await evtAction.waitFor(
                            action =>
                                action.usecaseName === name &&
                                action.actionName === "initialized",
                        );
                    } else {
                        dispatch(actions.fetchingStarted());
                    }
                }
            }

            const catalogData: CatalogData =
                privateSelectors.catalogData(getState()) ?? (await getCatalogData());

            dispatch(
                actions.initialized({
                    ...params,
                    catalogData,
                }),
            );
        },
    navigateInDirectory:
        (params: { pathSegment: number }) =>
        (...args) => {
            const { pathSegment } = params;

            const [dispatch] = args;

            dispatch(actions.navigatedInDirectory({ pathSegment }));
        },
    navigateBack:
        () =>
        (...args) => {
            const [dispatch] = args;

            dispatch(actions.navigatedBack());
        },
    updateSearch:
        (params: { search: string }) =>
        (...args) => {
            const { search } = params;
            const [dispatch] = args;

            dispatch(actions.searchUpdated({ search }));
        },
} satisfies Thunks;

const privateThunks = {
    lazyInitialization:
        () =>
        async (...args) => {
            const [dispatch, getState, rootContext] = args;

            const context = getContext(rootContext);

            if (context.isInitialized) {
                return;
            }

            context.isInitialized = true;

            const getFlexSearch = memoize(
                (parts: EducationalResource[]) => {
                    const index = new FlexSearch.Document<{
                        id: number;
                        field: string;
                    }>({
                        document: {
                            id: "id",
                            field: ["field"],
                        },
                        cache: 100,
                        tokenize: "full",
                        context: {
                            resolution: 9,
                            depth: 2,
                            bidirectional: true,
                        },
                    });

                    for (let i = 0; i < parts.length; i++) {
                        const part = parts[i];
                        index.add({
                            id: i,
                            field: JSON.stringify(part),
                        });
                    }

                    async function flexSearch(params: {
                        search: string;
                    }): Promise<boolean[]> {
                        const { search } = params;

                        const flexSearchResults = await index.searchAsync(search, {
                            bool: "or",
                            suggest: true,
                            enrich: true,
                        });

                        if (flexSearchResults.length === 0) {
                            return [];
                        }

                        const [{ result: catalogIdChartNames }] = flexSearchResults;

                        assert(is<`${string}/${string}`[]>(catalogIdChartNames));

                        return catalogIdChartNames.map(
                            (catalogIdChartName): State.SearchResult => {
                                const [catalogId, chartName] =
                                    catalogIdChartName.split("/");

                                return {
                                    catalogId,
                                    chartName,
                                    chartNameHighlightedIndexes: getMatchPositions({
                                        search,
                                        text: chartName,
                                    }),
                                    chartDescriptionHighlightedIndexes: getMatchPositions(
                                        {
                                            search,
                                            text: chartsByCatalogId[catalogId].find(
                                                chart => chart.name === chartName,
                                            )!.description,
                                        },
                                    ),
                                };
                            },
                        );
                    }

                    return { flexSearch };
                },
                { max: 1 },
            );

            const { waitForDebounce } = waitForDebounceFactory({ delay: 200 });

            const { evtAction } = rootContext;

            evtAction
                .pipe(action => action.usecaseName === name)
                .toStateful()
                .pipe(() => [privateSelectors.searchMaterial(getState())])
                .pipe(
                    onlyIfChanged({
                        areEqual: (a, b) => a === b,
                    }),
                )
                .$attach(
                    searchMaterial => (searchMaterial === null ? null : [searchMaterial]),
                    async searchMaterial => {

                        const { search, parts } = searchMaterial;

                        if (search === "") {
                            return;
                        }

                        // TODO: Actually implement the search
                        await waitForDebounce();

                        const { flexSearch } = getFlexSearch(parts);

                        const searchResults = await flexSearch({ search });

                        if( searchMaterial !== privateSelectors.searchMaterial(getState()) ){
                            return;
                        }

                        dispatch(
                            actions.searchResultSet({
                                searchResults,
                            }),
                        );
                    },
                );
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    isInitialized: false,
}));
