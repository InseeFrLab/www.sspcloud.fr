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
import { id } from "tsafe/id";
import { Deferred } from "evt/tools/Deferred";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load:
        (params: { routeParams: RouteParams; language: Language }) =>
        async (...args): Promise<{ routeParams_previous: RouteParams | undefined; }> => {
            const { routeParams, language } = params;

            const [dispatch, getState] = args;

            const { catalogData, isFirstInit } = await dispatch(privateThunks.lazyInitialization());

            const routeParams_previous = isFirstInit ? undefined : privateSelectors.routeParams_defaultsAsUndefined(getState());

            dispatch(
                actions.loaded({
                    routeParams,
                    language,
                    catalogData,
                }),
            );

            return { routeParams_previous };
        },
    updateRouteParams: (params: { routeParams: RouteParams; })=>  (...args)=> {
        const { routeParams } = params;

        const [dispatch] = args;

        dispatch(actions.routeParamsUpdated({ routeParams }));

    },
    updateLanguage:
        (params: { language: Language }) =>
         (...args) => {
            const { language } = params;

            const [dispatch] = args;

            dispatch(actions.languageUpdated({ language }));
        },

    navigateInDirectory:
        (params: { pathSegment: string }) =>
        (...args) => {
            const { pathSegment } = params;

            const [dispatch] = args;

            dispatch(actions.navigatedInDirectory({ pathSegment }));
        },
    navigateUp:
        (params: { upCount: number }) =>
        (...args) => {
            const { upCount } = params;

            const [dispatch] = args;

            dispatch(actions.navigatedBack({ upCount }));
        },
    updateSearch:
        (params: { search: string }) =>
        (...args) => {
            const { search } = params;
            const [dispatch] = args;

            dispatch(actions.searchUpdated({ search }));
        },
    toggleTagSelection:
        (params: { tagId: EducationalResource.Tag }) =>
        (...args) => {
            const { tagId } = params;

            const [dispatch] = args;

            dispatch(actions.tagSelectionToggled({ tagId }));
        },
} satisfies Thunks;

const privateThunks = {
    lazyInitialization:
        () =>
        (...args) => {
            const [dispatch, getState, rootContext] = args;

            const context = getContext(rootContext);

            if (context.prLazyInitialization !== undefined) {
                return context.prLazyInitialization.then(({ catalogData }) => ({
                    catalogData,
                    isFirstInit: false,
                }));
            }

            const dLazyInitialization = new Deferred<{ catalogData: CatalogData }>();

            getCatalogData().then(catalogData =>
                dLazyInitialization.resolve({ catalogData }),
            );

            context.prLazyInitialization = dLazyInitialization.pr;

            {
                const { waitForDebounce } = waitForDebounceFactory({ delay: 200 });

                const { evtAction } = rootContext;

                evtAction
                    .pipe(action => action.usecaseName === name)
                    .pipe(() => [privateSelectors.searchMaterial(getState())])
                    .pipe(
                        onlyIfChanged({
                            areEqual: (a, b) => a === b,
                        }),
                    )
                    .attach(async searchMaterial => {
                        const { search, parts } = searchMaterial;

                        if (search === "") {
                            return;
                        }

                        await waitForDebounce();

                        const tagLabelByTagId =
                            privateSelectors.tagLabelByTagId(getState());

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
                                searchResultsWrap: {
                                    searchMaterial,
                                    searchResults,
                                },
                            }),
                        );
                    });
            }

            return dLazyInitialization.pr.then(({ catalogData }) => ({
                catalogData,
                isFirstInit: true,
            }));
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    prLazyInitialization: id<Promise<{ catalogData: CatalogData }> | undefined>(
        undefined,
    ),
}));
