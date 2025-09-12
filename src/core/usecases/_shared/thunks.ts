import type { Thunks } from "core/bootstrap";
import { privateSelectors } from "./selectors";
import { getCatalogData } from "core/adapters/catalogData";
import { actions } from "./state";
import { replaceHrefsInMarkdown } from "./decoupledLogic/replaceHrefsInMarkdown";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load:
        () =>
        async (...args): Promise<void> => {
            const [dispatch, getState] = args;

            if (privateSelectors.hasLoadedAtLeastOnce(getState())) {
                return;
            }

            dispatch(
                actions.loaded({
                    catalogData: await getCatalogData(),
                }),
            );
        },
    replaceHrefsInMarkdown:
        (params: { markdownUrl: string; markdownText: string }) =>
        (...args): string => {
            const { markdownUrl, markdownText } = params;

            const [
                ,
                getState,
                {
                    paramsOfBootstrapCore: { routes },
                },
            ] = args;

            return replaceHrefsInMarkdown({
                catalogArticleUrlByPath: privateSelectors.articleUrlByPath(getState()),
                markdownUrl,
                markdownText,
                routes,
            });
        },
} satisfies Thunks;
