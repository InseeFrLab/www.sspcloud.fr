import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { assert } from "tsafe/assert";
import { createUsecaseContextApi } from "clean-architecture";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import { getCatalogData } from "core/adapters/catalogData";
import type { Language, CatalogData, EducationalResource } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import { getFlexSearch } from "./decoupledLogic/flexSearch";

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
        (params: { pathSegment: string }) =>
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
    toggleTagSelection:
        (params: {
            tagId: EducationalResource.Tag;
        }) => 
        (...args)=> {

            const { tagId } = params;

            const [dispatch]= args;

            dispatch(actions.tagSelectionToggled({ tagId }));

        }
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

                        await waitForDebounce();

                        const tagLabelByTagId= privateSelectors.tagLabelByTagId(getState());

                        assert(tagLabelByTagId !== null);

                        const { flexSearch } = getFlexSearch(parts, tagLabelByTagId);

                        const searchResults = await flexSearch({ search });

                        if (
                            searchMaterial !== privateSelectors.searchMaterial(getState())
                        ) {
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
