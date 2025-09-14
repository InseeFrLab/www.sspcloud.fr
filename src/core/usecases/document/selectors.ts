import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import { assert } from "tsafe/assert";
import * as _shared from "core/usecases/_shared";
import type { View } from "./decoupledLogic/types";
import { same } from "evt/tools/inDepth/same";
import { objectKeys } from "tsafe";
import type {
    EducationalResource,
    Language,
    LocalizedString,
} from "core/ports/CatalogData";
import { getLocalizedStringId } from "core/usecases/_shared/decoupledLogic/getLocalizedStringId";
import { getResolveLocalizedStringDetailed } from "core/usecases/catalog/decoupledLogic/educationalResourcesToView";

const state = (rootState: RootState) => rootState[name];

const routeParams = createSelector(state, state => state.routeParams);

const markdownUrlAndLanguage = createSelector(
    routeParams,
    _shared.selectors.pathAndLanguageByArticleUrl,
    createSelector(state, state => state.language),
    createSelector(
        _shared.selectors.catalogData,
        catalogData => catalogData.languageAssumedIfNoTranslation,
    ),
    (
        routeParams,
        pathAndLanguageByArticleUrl,
        language,
        languageAssumedIfNoTranslation,
    ): { url: string; language: Language } => {
        if (routeParams.url !== undefined) {
            return {
                url: routeParams.url,
                language: languageAssumedIfNoTranslation,
            };
        }

        const { path } = routeParams;

        assert(path !== undefined);

        const candidates = objectKeys(pathAndLanguageByArticleUrl)
            .filter(url => same(pathAndLanguageByArticleUrl[url].path, path))
            .map(url => ({ language: pathAndLanguageByArticleUrl[url].language, url }));

        assert(candidates.length !== 0);

        const candidate_inAmbientLanguage = candidates.find(
            candidate => candidate.language === language,
        );

        return candidate_inAmbientLanguage ?? candidates[0];
    },
);

const markdownUrl = createSelector(
    markdownUrlAndLanguage,
    markdownUrlAndLanguage => markdownUrlAndLanguage.url,
);

const editOnGitHubUrl = createSelector(
    markdownUrl,
    createSelector(state, state => state.gitHubUrl),
    (markdownUrl, gitHubUrl) =>
        `${gitHubUrl.replace(/\/$/, "")}/tree/main/public${markdownUrl}`,
);

const view = createSelector(
    state,
    _shared.selectors.catalogData,
    markdownUrlAndLanguage,
    editOnGitHubUrl,
    (state, catalogData, markdownUrlAndLanguage, editOnGitHubUrl): View => {
        const markdownText =
            state.markdown !== undefined &&
            state.markdown.url === markdownUrlAndLanguage.url
                ? state.markdown.text
                : undefined;

        const { resolveLocalizedStringDetailed } = getResolveLocalizedStringDetailed(
            state.language,
            catalogData.languageAssumedIfNoTranslation,
        );

        let partAndPaths:
            | {
                  part: EducationalResource.Resource;
                  path_localized: LocalizedString[];
                  relativeNavigation: NonNullable<View["relativeNavigation"]>;
              }
            | undefined = undefined;

        search_part: {
            const path_searched = state.routeParams.path;

            if (path_searched === undefined) {
                break search_part;
            }

            (function callee(params: {
                parts: EducationalResource[];
                path: string[];
                path_localized: LocalizedString[];
            }) {
                const { parts, path, path_localized } = params;

                for (const part of parts) {
                    const segment = getLocalizedStringId(part.name);

                    if (path_searched[path.length] !== segment) {
                        continue;
                    }

                    const path_next = [...path, segment];
                    const path_localized_next = [...path_localized, part.name];

                    if ("parts" in part) {
                        callee({
                            parts: part.parts,
                            path: path_next,
                            path_localized: path_localized_next,
                        });
                        continue;
                    }

                    if (path_next.length !== path_searched.length) {
                        continue;
                    }

                    partAndPaths = {
                        part: part,
                        path_localized: path_localized_next,
                        relativeNavigation: {
                            previous: (() => {
                                const i = parts.indexOf(part);

                                if (i === 0) {
                                    return undefined;
                                }

                                const part_target = parts[i - 1];

                                return {
                                    path: [
                                        ...path,
                                        getLocalizedStringId(part_target.name),
                                    ],
                                    name: resolveLocalizedStringDetailed(
                                        part_target.name,
                                    ),
                                };
                            })(),
                            next: (() => {
                                const i = parts.indexOf(part);

                                if (i === parts.length - 1) {
                                    return undefined;
                                }

                                const part_target = parts[i + 1];

                                return {
                                    path: [
                                        ...path,
                                        getLocalizedStringId(part_target.name),
                                    ],
                                    name: resolveLocalizedStringDetailed(
                                        part_target.name,
                                    ),
                                };
                            })(),
                        },
                    };

                    return;
                }
            })({
                parts: catalogData.educationalResources,
                path: [],
                path_localized: [],
            });

            assert(partAndPaths !== undefined);
        }

        return {
            header:
                partAndPaths === undefined
                    ? undefined
                    : {
                          path: partAndPaths.path_localized.map(
                              resolveLocalizedStringDetailed,
                          ),
                          name: resolveLocalizedStringDetailed(partAndPaths.part.name),
                          imageUrl: partAndPaths.part.imageUrl,
                          authors: partAndPaths.part.authors.map(
                              resolveLocalizedStringDetailed,
                          ),
                      },
            markdownText:
                markdownText === undefined
                    ? undefined
                    : {
                          langAttrValue:
                              markdownUrlAndLanguage.language === state.language
                                  ? undefined
                                  : markdownUrlAndLanguage.language,
                          text: markdownText,
                      },
            editOnGitHubUrl,
            relativeNavigation: partAndPaths?.relativeNavigation,
        };
    },
);

export const privateSelectors = {
    markdownUrl,
    path: createSelector(routeParams, routeParams => routeParams.path),
};

export const selectors = {
    view,
};
