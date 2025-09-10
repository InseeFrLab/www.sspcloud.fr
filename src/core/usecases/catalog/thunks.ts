import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import { getCatalogData } from "core/adapters/catalogData";
import type { Language, EducationalResource } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import { createFindRelevant } from "./decoupledLogic/findRelevant";
import { getContext_evt } from "./evt";
import { createUsecaseContextApi } from "clean-architecture";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load:
        (params: { routeParams: RouteParams; language: Language }) =>
        async (...args): Promise<{ routeParams_previous: RouteParams | undefined }> => {
            const { routeParams, language } = params;

            const [dispatch, getState] = args;

            const hasLoadedAtLeastOnce =
                privateSelectors.hasLoadedAtLeastOnce(getState());

            if (!hasLoadedAtLeastOnce) {
                dispatch(privateThunks.subscribeToEventAction());
            }

            const routeParams_previous = !hasLoadedAtLeastOnce
                ? undefined
                : privateSelectors.routeParams_defaultsAsUndefined(getState());

            dispatch(
                actions.loaded({
                    routeParams,
                    language,
                    catalogData: !hasLoadedAtLeastOnce
                        ? await getCatalogData()
                        : undefined,
                }),
            );

            return { routeParams_previous };
        },
    notifyBackForwardNavigation:
        (params: { routeParams: RouteParams }) =>
        (...args) => {
            const { routeParams } = params;

            const [dispatch] = args;

            dispatch(actions.backForwardNavigationNotified({ routeParams }));
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
        async (...args) => {
            const { search } = params;
            const [dispatch, , rootContext] = args;

            const { waitForDebounce_commitSearch } = getContext(rootContext);

            dispatch(actions.searchUrgentUpdated({ search }));

            if (search.trim() !== "") {
                await waitForDebounce_commitSearch();
            } else {
                await new Promise<void>(resolve => setTimeout(resolve, 150));
            }

            dispatch(actions.searchUrgentCommitted());
        },
    toggleTagSelection:
        (params: { tagId: EducationalResource.Tag }) =>
        (...args) => {
            const { tagId } = params;

            const [dispatch, , rootContext] = args;

            const { startViewTransition } = getContext_evt(rootContext);

            startViewTransition(() => {
                dispatch(actions.tagSelectionToggled({ tagId }));
            });
        },
} satisfies Thunks;

const privateThunks = {
    subscribeToEventAction:
        () =>
        (...args) => {
            const [dispatch, getState, rootContext] = args;

            const { evtAction } = rootContext;

            const { findRelevant } = createFindRelevant();

            const { startViewTransition } = getContext_evt(rootContext);

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

                    if (search.trim() === "") {
                        dispatch(
                            actions.searchResultSet({
                                searchResultsWrap: undefined,
                            }),
                        );
                        return;
                    }

                    const tagLabelByTagId = privateSelectors.tagLabelByTagId(getState());

                    const searchResults = await findRelevant({
                        parts,
                        tagLabelByTagId,
                        searchedText: search,
                    });

                    if (searchMaterial !== privateSelectors.searchMaterial(getState())) {
                        return;
                    }

                    startViewTransition(() => {
                        dispatch(
                            actions.searchResultSet({
                                searchResultsWrap: {
                                    search,
                                    searchRunOnParts: parts,
                                    searchResults,
                                },
                            }),
                        );
                    });
                });
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    waitForDebounce_commitSearch: waitForDebounceFactory({ delay: 500 }).waitForDebounce,
}));
