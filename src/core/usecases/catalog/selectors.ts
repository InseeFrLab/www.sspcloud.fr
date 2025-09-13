import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector, isObjectThatThrowIfAccessed } from "clean-architecture";
import { objectKeys } from "tsafe/objectKeys";
import { filterMatchingSelectedTags } from "./decoupledLogic/tagFilter";
import type { EducationalResources_selected, TagState } from "./decoupledLogic/types";
import { educationalResourcesToView } from "./decoupledLogic/educationalResourcesToView";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { id } from "tsafe/id";
import { getLocalizedStringId } from "core/usecases/_shared/decoupledLogic/getLocalizedStringId";
import { sortByLastUpdatedMostRecentFirst } from "./decoupledLogic/sortByModifiedDate";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import type { EducationalResource } from "core/ports/CatalogData";
import type { RouteParams } from "./thunks";
import * as _shared from "core/usecases/_shared";
import { exclude, isAmong, assert } from "tsafe";

const state = (rootState: RootState) => rootState[name];

const catalogData = _shared.selectors.catalogData;

const routeParams_asIsInState = createSelector(state, state => state.routeParams);

const EMPTY_STRING_ARRAY: string[] = [];

const path = createSelector(
    routeParams_asIsInState,
    ({ path }) => path ?? EMPTY_STRING_ARRAY,
);
const search = createSelector(routeParams_asIsInState, ({ search }) => search ?? "");
const selectedTags = createSelector(
    createSelector(routeParams_asIsInState, ({ selectedTags }) => selectedTags),
    createSelector(catalogData, ({ tagLabelByTagId }) => objectKeys(tagLabelByTagId)),
    (selectedTags_asInState, tagIds) =>
        (selectedTags_asInState ?? EMPTY_STRING_ARRAY)
            .filter(tagId => isAmong(tagIds, tagId))
            .reduce(...removeDuplicates<EducationalResource.Tag>()),
);

const educationalResources_atPath = createSelector(
    createSelector(catalogData, catalogData => catalogData.educationalResources),
    path,
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
    catalogData,
    catalogData => catalogData.languageAssumedIfNoTranslation,
);

const tagStates = createSelector(
    selectedTags,
    createSelector(catalogData, catalogData => catalogData.tagLabelByTagId),
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
    catalogData,
    catalogData => catalogData.tagLabelByTagId,
);

const view = createSelector(
    educationalResources_atPath_searchFiltered_tagFiltered,
    createSelector(
        searchResultsWrap,
        searchResultsWrap => searchResultsWrap?.search ?? "",
    ),
    language,
    languageAssumedIfNoTranslation,
    tagLabelByTagId,
    selectedTags,
    _shared.selectors.pathByArticleUrl,
    (
        selected,
        search,
        language,
        languageAssumedIfNoTranslation,
        tagLabelByTagId,
        selectedTags,
        pathByArticleUrl,
    ) =>
        educationalResourcesToView({
            selected,
            language,
            languageAssumedIfNoTranslation,
            search,
            tagLabelByTagId,
            selectedTags,
            pathByArticleUrl,
        }),
);

export const privateSelectors = {
    catalogData,
    searchMaterial,
    tagLabelByTagId,
    routeParams_defaultsAsUndefined: createSelector(
        path,
        search,
        selectedTags,
        (path, search, selectedTags): RouteParams =>
            ({
                path: path.length === 0 ? undefined : path,
                search: search || undefined,
                selectedTags: selectedTags.length === 0 ? undefined : selectedTags,
            }) satisfies Record<keyof RouteParams, unknown>,
    ),
    hasLoadedAtLeastOnce: createSelector(
        state,
        state => !isObjectThatThrowIfAccessed(state),
    ),
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
