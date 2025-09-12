import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import { assert } from "tsafe/assert";
import { objectKeys } from "tsafe/objectKeys";
import { filterMatchingSelectedTags } from "./decoupledLogic/tagFilter";
import type { EducationalResources_selected, TagState } from "./decoupledLogic/types";
import {
    educationalResourcesToDirectoryView,
    educationalResourcesToFileView,
} from "./decoupledLogic/educationalResourcesToView";
import type { View } from "./decoupledLogic/types";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { id } from "tsafe/id";
import { getLocalizedStringId } from "./decoupledLogic/getLocalizedStringId";
import { sortByLastUpdatedMostRecentFirst } from "./decoupledLogic/sortByModifiedDate";
import { isAmong } from "tsafe/isAmong";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import type { EducationalResource } from "core/ports/CatalogData";
import type { RouteParams } from "./thunks";
import { exclude } from "tsafe/exclude";
import * as _shared from "core/usecases/_shared";

const state = (rootState: RootState) => rootState[name];

const routeParams_asIsInState = createSelector(state, state => state.routeParams);

const EMPTY_STRING_ARRAY: string[] = [];

const path_directoryOrFile = createSelector(
    routeParams_asIsInState,
    ({ path }) => path ?? EMPTY_STRING_ARRAY,
);
const search = createSelector(routeParams_asIsInState, ({ search }) => search ?? "");
const selectedTags = createSelector(
    createSelector(routeParams_asIsInState, ({ selectedTags }) => selectedTags),
    createSelector(_shared.selectors.catalogData, ({ tagLabelByTagId }) =>
        objectKeys(tagLabelByTagId),
    ),
    (selectedTags_asInState, tagIds) =>
        (selectedTags_asInState ?? EMPTY_STRING_ARRAY)
            .filter(tagId => isAmong(tagIds, tagId))
            .reduce(...removeDuplicates<EducationalResource.Tag>()),
);

const path_qualified = createSelector(
    state,
    (state): { isFile: boolean; path: string[] } => {
        TODO;
        return null as any;
    },
);

const path_directory = createSelector(path_qualified, ({ isFile, path }): string[] => {
    if (!isFile) {
        return path;
    }

    return [...path].slice(0, -1);
});

const educationalResources_atPath = createSelector(
    createSelector(
        _shared.selectors.catalogData,
        catalogData => catalogData.educationalResources,
    ),
    path_directory,
    (educationalResources, path): EducationalResources_selected => {
        const selected_unsorted = (function callee(params: {
            path: string[];
            selected: EducationalResources_selected;
        }): EducationalResources_selected {
            const { path, selected } = params;

            if (path.length === 0) {
                return selected;
            }

            const [firstSegment, ...path_rest] = path;

            const collections = selected.parts
                .map(educationalResource => {
                    if (!("parts" in educationalResource)) {
                        return undefined;
                    }
                    return getLocalizedStringId(educationalResource.name) === firstSegment
                        ? educationalResource
                        : undefined;
                })
                .filter(e => e !== undefined);

            assert(collections.length === 1);

            const [collection] = collections;

            return callee({
                path: path_rest,
                selected: {
                    path_names: [...selected.path_names, collection.name],
                    collection,
                    parts: collection.parts,
                },
            });
        })({
            path,
            selected: {
                collection: undefined,
                parts: educationalResources,
                path_names: [],
            },
        });

        if (path.length !== 0) {
            return selected_unsorted;
        }

        const selected: EducationalResources_selected = {
            ...selected_unsorted,
            parts: sortByLastUpdatedMostRecentFirst(selected_unsorted.parts),
        };

        return selected;
    },
);

const searchMaterial = createSelector(
    search,
    createSelector(
        educationalResources_atPath,
        educationalResources_atPath => educationalResources_atPath.parts,
    ),
    (search, parts) => ({
        search,
        parts,
    }),
);

const searchResultsWrap = createSelector(state, state => state.searchResultsWrap);

const educationalResources_atPath_searchFiltered = createSelector(
    educationalResources_atPath,
    createSelector(
        searchResultsWrap,
        searchMaterial,
        (searchResultsWrap, searchMaterial) => {
            if (searchResultsWrap === undefined) {
                return undefined;
            }

            if (searchResultsWrap.searchRunOnParts !== searchMaterial.parts) {
                return undefined;
            }

            return searchResultsWrap.searchResults;
        },
    ),
    (educationalResources_atPath, searchResults): EducationalResources_selected => {
        if (searchResults === undefined) {
            return educationalResources_atPath;
        }

        return {
            ...educationalResources_atPath,
            parts: searchResults.map(index => educationalResources_atPath.parts[index]),
        };
    },
);

const educationalResources_atPath_searchFiltered_tagFiltered = createSelector(
    educationalResources_atPath_searchFiltered,
    selectedTags,
    (
        educationalResources_atPath_searchFiltered,
        selectedTags,
    ): EducationalResources_selected => ({
        ...educationalResources_atPath_searchFiltered,
        parts: filterMatchingSelectedTags({
            parts: educationalResources_atPath_searchFiltered.parts,
            selectedTags,
        }),
    }),
);

const language = createSelector(state, state => state.language);

const languageAssumedIfNoTranslation = createSelector(
    _shared.selectors.catalogData,
    catalogData => catalogData.languageAssumedIfNoTranslation,
);

const tagStates = createSelector(
    selectedTags,
    createSelector(
        _shared.selectors.catalogData,
        catalogData => catalogData.tagLabelByTagId,
    ),
    languageAssumedIfNoTranslation,
    language,
    educationalResources_atPath_searchFiltered,
    educationalResources_atPath_searchFiltered_tagFiltered,
    (
        selectedTags,
        tagLabelByTagId,
        languageAssumedIfNoTranslation,
        language,
        educationalResources_atPath_searchFiltered,
        educationalResources_atPath_searchFiltered_tagFiltered,
    ): TagState[] => {
        const { resolveLocalizedStringDetailed } = createResolveLocalizedString({
            currentLanguage: language,
            fallbackLanguage: "en",
            labelWhenMismatchingLanguage: {
                ifStringAssumeLanguage: languageAssumedIfNoTranslation,
            },
        });

        const tagIds_relevantWhenNoSelection = objectKeys(tagLabelByTagId).filter(
            tagId => {
                const { parts } = educationalResources_atPath_searchFiltered;

                const viewItemCountIfSelected = filterMatchingSelectedTags({
                    parts,
                    selectedTags: [tagId],
                }).length;

                if (viewItemCountIfSelected === 0) {
                    return false;
                }

                if (viewItemCountIfSelected === parts.length) {
                    return false;
                }

                return true;
            },
        );

        return tagIds_relevantWhenNoSelection
            .map(tagId => ({
                tagId,
                tagLabel: resolveLocalizedStringDetailed(tagLabelByTagId[tagId]),
            }))
            .map(({ tagId, tagLabel }) => {
                const common = id<TagState.Common>({
                    id: tagId,
                    label: {
                        text: tagLabel.str,
                        langAttrValue: tagLabel.langAttrValue,
                    },
                });

                if (selectedTags.includes(tagId)) {
                    return id<TagState.Selected>({
                        ...common,
                        isSelected: true,
                    });
                }

                const { parts } = educationalResources_atPath_searchFiltered_tagFiltered;

                const viewItemCountIfSelected = filterMatchingSelectedTags({
                    parts,
                    selectedTags: [...selectedTags, tagId],
                }).length;

                return id<TagState.NotSelected>({
                    ...common,
                    isSelected: false,
                    viewItemCountIfSelected,
                });
            })
            .filter(exclude(undefined));
    },
);

const tagLabelByTagId = createSelector(
    _shared.selectors.catalogData,
    catalogData => catalogData.tagLabelByTagId,
);

const view_directory = createSelector(
    educationalResources_atPath_searchFiltered_tagFiltered,
    createSelector(
        searchResultsWrap,
        searchResultsWrap => searchResultsWrap?.search ?? "",
    ),
    language,
    languageAssumedIfNoTranslation,
    tagLabelByTagId,
    selectedTags,
    (
        selected,
        search,
        language,
        languageAssumedIfNoTranslation,
        tagLabelByTagId,
        selectedTags,
    ): View.Directory =>
        educationalResourcesToDirectoryView({
            selected,
            language,
            languageAssumedIfNoTranslation,
            search,
            tagLabelByTagId,
            selectedTags,
        }),
);

const fileBasename = createSelector(path_qualified, ({ isFile, path }) => {
    if (!isFile) {
        return null;
    }
    return path[path.length - 1];
});

const part_file = createSelector(
    educationalResources_atPath_searchFiltered_tagFiltered,
    fileBasename,
    (selected, fileBasename) => {
        if (fileBasename === undefined) {
            return null;
        }

        const parts = selected.parts
            .map(part => {
                if ("parts" in part) {
                    return undefined;
                }

                if (getLocalizedStringId(part.name) !== fileBasename) {
                    return undefined;
                }

                return part;
            })
            .filter(x => x !== undefined);

        assert(parts.length === 1);

        const [part] = parts;

        return part;
    },
);

const markdownUrl = createSelector(
    part_file,
    language,
    languageAssumedIfNoTranslation,
    (part_file, language, languageAssumedIfNoTranslation) => {
        if (part_file === null) {
            return null;
        }

        assert(part_file.articleUrl !== undefined);

        const { resolveLocalizedStringDetailed } = createResolveLocalizedString({
            currentLanguage: language,
            fallbackLanguage: "en",
            labelWhenMismatchingLanguage: {
                ifStringAssumeLanguage: languageAssumedIfNoTranslation,
            },
        });

        return resolveLocalizedStringDetailed(part_file.articleUrl);
    },
);

const path_file = createSelector(path_qualified, ({ isFile, path }) => {
    if (!isFile) {
        return null;
    }
    return path;
});

const view_file = createSelector(
    educationalResources_atPath_searchFiltered_tagFiltered,
    path_file,
    fileBasename,
    part_file,
    language,
    languageAssumedIfNoTranslation,
    createSelector(state, state => state.markdown),
    markdownUrl,
    (
        selected,
        path,
        fileBasename,
        part,
        language,
        languageAssumedIfNoTranslation,
        markdown,
        markdownUrl,
    ): View.File | null => {
        if (path === undefined) {
            return null;
        }

        assert(fileBasename !== null);
        assert(part !== null);
        assert(markdownUrl !== null);

        const markdownText =
            markdown?.url === markdownUrl.str ? markdown.text : undefined;

        return educationalResourcesToFileView({
            path_names: [...selected.path_names, part.name],
            part,
            language,
            languageAssumedIfNoTranslation,
            markdownText,
            markdownLangAttributeValue: markdownUrl.langAttrValue,
        });
    },
);

const view = createSelector(
    view_directory,
    view_file,
    (view_directory, view_file) => view_file ?? view_directory,
);

export const privateSelectors = {
    searchMaterial,
    tagLabelByTagId,
    routeParams_defaultsAsUndefined: createSelector(
        path_directoryOrFile,
        search,
        selectedTags,
        (path, search, selectedTags): RouteParams =>
            ({
                path: path.length === 0 ? undefined : path,
                search: search || undefined,
                selectedTags: selectedTags.length === 0 ? undefined : selectedTags,
            }) satisfies Record<keyof RouteParams, unknown>,
    ),
    markdownUrl: createSelector(markdownUrl, markdownUrl => {
        if (markdownUrl === null) {
            return null;
        }

        return markdownUrl.str;
    }),
};

const main = createSelector(
    view,
    tagStates,
    createSelector(state, state => state.search_urgent),
    search,
    (view, tagStates, search_urgent, search) => ({
        view,
        tagStates,
        search_urgent,
        search,
    }),
);

export const selectors = { main };
