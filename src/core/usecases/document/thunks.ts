import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import type { Language } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import { getContext_evt } from "./evt";
import { createUsecaseContextApi } from "clean-architecture";
import * as _shared from "core/usecases/_shared";
import { assert } from "tsafe";
import { replaceHrefsInMarkdown } from "./decoupledLogic/replaceHrefsInMarkdown";

export type RouteParams = {
    path?: string[];
    url?: string;
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
    notifyRouteParamUpdated:
        (params: { routeParams: RouteParams }) =>
        (...args) => {
            const { routeParams } = params;

            const [dispatch] = args;

            dispatch(actions.routeParamsUpdateNotified({ routeParams }));
        },
    updateLanguage:
        (params: { language: Language }) =>
        (...args) => {
            const { language } = params;

            const [dispatch] = args;

            dispatch(actions.languageUpdated({ language }));
        },
    navigateUp:
        (params: { upCount: number }) =>
        (...args) => {
            const { upCount } = params;

            const [, getState, rootContext] = args;

            const path = privateSelectors.path(getState());

            assert(path !== undefined);

            const { navigateToCatalogPage } = getContext_evt(rootContext);

            const path_next = [...path];

            new Array(upCount).fill("").forEach(() => {
                path_next.pop();
            });

            navigateToCatalogPage({ path: path_next });
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

            const { getDocumentPageUrl } = rootContext.paramsOfBootstrapCore;
            const { evtAction } = rootContext;

            evtAction
                .pipe(action => (action.usecaseName === name ? [action] : null))
                .pipe(() => [privateSelectors.markdownUrl(getState())])
                .pipe(onlyIfChanged())
                .attach(async markdownUrl => {
                    let markdownText = await (await fetch(markdownUrl)).text();

                    markdownText = replaceHrefsInMarkdown({
                        markdownUrl,
                        markdownText,
                        pathByArticleUrl: _shared.selectors.pathByArticleUrl(getState()),
                        getDocumentPageUrl,
                    });

                    dispatch(
                        actions.markdownSet({
                            markdown: {
                                url: markdownUrl,
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
