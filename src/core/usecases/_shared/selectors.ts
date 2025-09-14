import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import type { EducationalResource, Language } from "core/ports/CatalogData";
import { getLocalizedStringId } from "./decoupledLogic/getLocalizedStringId";
import { objectEntries, objectFromEntries } from "tsafe";

const state = (rootState: RootState) => rootState[name];

const catalogData = createSelector(state, state => state.catalogData);

const pathAndLanguageByArticleUrl = createSelector(
    catalogData,
    (catalogData): Record<string, { path: string[]; language: Language }> => {
        const pathByArticleUrl = new Map<
            string,
            { path: string[]; language: Language }
        >();

        (function callee(params: { parts: EducationalResource[]; path: string[] }) {
            const { parts, path } = params;

            for (const part of parts) {
                const path_next = [...path, getLocalizedStringId(part.name)];

                if ("parts" in part) {
                    callee({ parts: part.parts, path: path_next });
                    continue;
                }

                const { articleUrl } = part;

                if (articleUrl === undefined) {
                    continue;
                }

                if (typeof articleUrl === "string") {
                    pathByArticleUrl.set(articleUrl, {
                        path: path_next,
                        language: catalogData.languageAssumedIfNoTranslation,
                    });
                    continue;
                }

                objectEntries(articleUrl).forEach(([language, url]) => {
                    if (url === undefined) {
                        return;
                    }
                    pathByArticleUrl.set(url, { path: path_next, language });
                });
            }
        })({
            parts: catalogData.educationalResources,
            path: [],
        });

        return Object.fromEntries(pathByArticleUrl);
    },
);

const pathByArticleUrl = createSelector(
    pathAndLanguageByArticleUrl,
    pathAndLanguageByArticleUrl =>
        objectFromEntries(
            objectEntries(pathAndLanguageByArticleUrl).map(([url, { path }]) => [
                url,
                path,
            ]),
        ),
);

export const selectors = {
    pathAndLanguageByArticleUrl,
    pathByArticleUrl,
    catalogData,
};
