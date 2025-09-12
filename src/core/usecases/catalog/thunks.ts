import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import type { Language, EducationalResource } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import { createFindRelevant } from "./decoupledLogic/findRelevant";
import { getContext_evt } from "./evt";
import { createUsecaseContextApi } from "clean-architecture";
import { exclude } from "tsafe/exclude";
import * as _shared from "core/usecases/_shared";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load:
        (params: { routeParams: RouteParams; language: Language }) =>
        async (...args): Promise<void> => {
            const { routeParams, language } = params;

            const [dispatch] = args;

            dispatch(privateThunks.subscribeToEventAction());

            await dispatch(_shared.thunks.load());

            dispatch(
                actions.loaded({
                    routeParams,
                    language,
                }),
            );
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

            {
                const context = getContext(rootContext);

                if (context.hasSubscribedToEvtAction) {
                    return;
                }
                context.hasSubscribedToEvtAction = true;
            }

            const { startViewTransition } = getContext_evt(rootContext);

            const { evtAction } = rootContext;

            const { findRelevant } = createFindRelevant();

            const evtAction_usecase = evtAction.pipe(action =>
                action.usecaseName === name ? [action] : null,
            );

            {
                const update = (params: {
                    searchResultsWrap:
                        | {
                              search: string;
                              searchRunOnParts: unknown[];
                              searchResults: number[];
                          }
                        | undefined;
                    doUseTransition: boolean;
                }) => {
                    const { searchResultsWrap, doUseTransition } = params;

                    const fn = () => {
                        dispatch(
                            actions.searchResultSet({
                                searchResultsWrap,
                            }),
                        );
                    };

                    if (doUseTransition) {
                        startViewTransition(fn);
                    } else {
                        fn();
                    }
                };

                evtAction_usecase
                    .pipe(action => [
                        {
                            doUseTransition: (() => {
                                switch (action.actionName) {
                                    case "loaded":
                                    case "backForwardNavigationNotified":
                                        return false;
                                    default:
                                        return true;
                                }
                            })(),
                            searchMaterial: privateSelectors.searchMaterial(getState()),
                        },
                    ])
                    .pipe(
                        onlyIfChanged({
                            areEqual: (a, b) => a.searchMaterial === b.searchMaterial,
                        }),
                    )
                    .attach(async ({ doUseTransition, searchMaterial }) => {
                        const { search, parts } = searchMaterial;

                        if (search.trim() === "") {
                            update({
                                searchResultsWrap: undefined,
                                doUseTransition,
                            });

                            return;
                        }

                        const tagLabelByTagId =
                            privateSelectors.tagLabelByTagId(getState());

                        const searchResults = await findRelevant({
                            parts,
                            tagLabelByTagId,
                            searchedText: search,
                        });

                        if (
                            searchMaterial !== privateSelectors.searchMaterial(getState())
                        ) {
                            return;
                        }

                        update({
                            doUseTransition,
                            searchResultsWrap: {
                                search,
                                searchRunOnParts: parts,
                                searchResults,
                            },
                        });
                    });
            }

            evtAction_usecase
                .pipe(() => [privateSelectors.markdownUrl(getState())])
                .pipe(exclude(null))
                .pipe(onlyIfChanged())
                .attach(async url => {
                    let markdownText = await (await fetch(url)).text();

                    markdownText = dispatch(
                        _shared.thunks.replaceHrefsInMarkdown({
                            markdownUrl: url,
                            markdownText,
                        }),
                    );

                    dispatch(
                        actions.markdownSet({
                            markdown: {
                                url,
                                text: markdownText,
                            },
                        }),
                    );
                });
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    hasSubscribedToEvtAction: false,
    waitForDebounce_commitSearch: waitForDebounceFactory({ delay: 500 }).waitForDebounce,
}));
