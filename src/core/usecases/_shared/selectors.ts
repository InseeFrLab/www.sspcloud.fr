import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import type { EducationalResource } from "core/ports/CatalogData";
import { getLocalizedStringId } from "./decoupledLogic/getLocalizedStringId";

const state = (rootState: RootState) => rootState[name];

const catalogData = createSelector(state, state => state.catalogData);

const pathByArticleUrl = createSelector(
    catalogData,
    (catalogData): Record<string, string[]> => {
        const pathByArticleUrl = new Map<string, string[]>();

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
                    pathByArticleUrl.set(articleUrl, path_next);
                    continue;
                }

                Object.keys(articleUrl).forEach(url => {
                    pathByArticleUrl.set(url, path_next);
                });
            }
        })({
            parts: catalogData.educationalResources,
            path: [],
        });

        return Object.fromEntries(pathByArticleUrl);
    },
);

export const selectors = {
    pathByArticleUrl,
    catalogData,
};
