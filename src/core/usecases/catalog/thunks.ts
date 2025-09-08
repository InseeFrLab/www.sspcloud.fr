import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import { getCatalogData } from "core/adapters/catalogData";
import type { Language, EducationalResource } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import { createFindRelevant } from "./decoupledLogic/findRelevant";

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
    updateRouteParams:
        (params: { routeParams: RouteParams }) =>
        (...args) => {
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
    subscribeToEventAction:
        () =>
        (...args) => {
            const [dispatch, getState, rootContext] = args;

            const { waitForDebounce } = waitForDebounceFactory({ delay: 200 });

            const { evtAction } = rootContext;

            const { findRelevant } = createFindRelevant();

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

                    await waitForDebounce();

                    const tagLabelByTagId = privateSelectors.tagLabelByTagId(getState());

                    const searchResults = await findRelevant({
                        parts,
                        tagLabelByTagId,
                        searchedText: search,
                    });

                    if (searchMaterial !== privateSelectors.searchMaterial(getState())) {
                        return;
                    }

                    dispatch(
                        actions.searchResultSet({
                            searchResultsWrap: {
                                searchRunOnParts: parts,
                                searchResults,
                            },
                        }),
                    );
                });
        },
} satisfies Thunks;
