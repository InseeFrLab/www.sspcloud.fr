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
import { assert } from "tsafe";
import { join as pathJoin, normalize as pathNormalize } from "pathe";
import { exclude } from "tsafe/exclude";

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

            const [dispatch, getState] = args;

            const hasLoadedAtLeastOnce =
                privateSelectors.hasLoadedAtLeastOnce(getState());

            if (!hasLoadedAtLeastOnce) {
                dispatch(privateThunks.subscribeToEventAction());
            }

            dispatch(
                actions.loaded({
                    routeParams,
                    language,
                    catalogData: !hasLoadedAtLeastOnce
                        ? await getCatalogData()
                        : undefined,
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
    getResolvedMarkdownHref:
        (params: { urlDirPath: string | undefined; href: string }) =>
        (
            ...args
        ):
            | {
                  type: "local indexed";
                  routeParams: RouteParams;
              }
            | {
                  type: "local non indexed";
                  absoluteLocalUrl: string;
              }
            | {
                  type: "external";
              } => {
            const { href, urlDirPath: urlDirPath_params } = params;

            const [, getState] = args;

            const absoluteUrl = (() => {
                if (href.startsWith(".")) {
                    const urlDirPath = (() => {
                        if (urlDirPath_params !== undefined) {
                            return urlDirPath_params;
                        }

                        const urlDirPath = privateSelectors.urlDirPath(getState());

                        assert(urlDirPath !== undefined);

                        return urlDirPath;
                    })();

                    return pathNormalize(pathJoin(urlDirPath, href));
                }

                if (href.startsWith("/")) {
                    return pathNormalize(href);
                }

                return undefined;
            })();

            if (absoluteUrl === undefined) {
                return {
                    type: "external",
                };
            }

            TODO;

            return null as any;
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

            const evtAction_usecase = evtAction.pipe(action =>
                action.usecaseName === name ? [action] : null,
            );

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

                    const tagLabelByTagId = privateSelectors.tagLabelByTagId(getState());

                    const searchResults = await findRelevant({
                        parts,
                        tagLabelByTagId,
                        searchedText: search,
                    });

                    if (searchMaterial !== privateSelectors.searchMaterial(getState())) {
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

            evtAction_usecase
                .pipe(() => [privateSelectors.localArticleUrl(getState())])
                .pipe(exclude(undefined))
                .pipe(onlyIfChanged())
                .attach(async url => {
                    const text = await (await fetch(url)).text();

                    dispatch(
                        actions.markdownSet({
                            markdown: {
                                url,
                                text,
                            },
                        }),
                    );
                });
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    waitForDebounce_commitSearch: waitForDebounceFactory({ delay: 500 }).waitForDebounce,
}));
