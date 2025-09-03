import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector, isObjectThatThrowIfAccessed } from "clean-architecture";
import { assert } from "tsafe/assert";
import { objectKeys } from "tsafe/objectKeys";
import { filterMatchingSelectedTags } from "./decoupledLogic/tagFilter";
import type { EducationalResources_selected, TagState } from "./decoupledLogic/types";
import { educationalResourcesToView } from "./decoupledLogic/educationalResourcesToView";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { id } from "tsafe/id";
import { getLocalizedStringId } from "./decoupledLogic/getLocalizedStringId";
import { sortByLastUpdatedMostRecentFirst } from "./decoupledLogic/sortByModifiedDate";
import { isAmong } from "tsafe/isAmong";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import type { EducationalResource } from "core/ports/CatalogData";
import type { RouteParams } from "./thunks";
import { exclude } from "tsafe/exclude";

const state = (rootState: RootState) => rootState[name];

const catalogData = createSelector(state, state => state.catalogData);

const routeParams_asIsInState = createSelector(state, state => state.routeParams);

const routeParams = createSelector(
    createSelector(routeParams_asIsInState, ({ path }) => path),
    createSelector(routeParams_asIsInState, ({ search }) => search),
    createSelector(routeParams_asIsInState, ({ selectedTags }) => selectedTags),
    createSelector(catalogData, catalogData => objectKeys(catalogData.tagLabelByTagId)),
    (path, search, selectedTags, tagIds) => ({
        path: path ?? [],
        search: search ?? "",
        selectedTags: (selectedTags ?? [])
            .filter(tagId => isAmong(tagIds, tagId))
            .reduce(...removeDuplicates<EducationalResource.Tag>()),
    }),
);

const path = createSelector(routeParams, routeParams => routeParams.path);

const educationalResources_atPath = createSelector(
    createSelector(state, state => state.catalogData.educationalResources),
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

            const collections = educationalResources
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

        const selected: EducationalResources_selected = {
            ...selected_unsorted,
            parts: sortByLastUpdatedMostRecentFirst(selected_unsorted.parts),
        };

        return selected;
    },
);

const search = createSelector(routeParams, routeParams => routeParams.search);

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

const educationalResources_atPath_searchFiltered = createSelector(
    educationalResources_atPath,
    createSelector(
        createSelector(state, state => state.searchResultsWrap),
        searchMaterial,
        (searchResultsWrap, searchMaterial) => {
            if (searchResultsWrap === undefined) {
                return undefined;
            }

            if (searchResultsWrap.searchMaterial !== searchMaterial) {
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

const selectedTags = createSelector(routeParams, routeParams => routeParams.selectedTags);

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
    educationalResources_atPath_searchFiltered_tagFiltered,
    (
        selectedTags,
        tagLabelByTagId,
        languageAssumedIfNoTranslation,
        language,
        educationalResources_atPath_searchFiltered_tagFiltered,
    ): TagState[] => {
        const { resolveLocalizedStringDetailed } = createResolveLocalizedString({
            currentLanguage: language,
            fallbackLanguage: "en",
            labelWhenMismatchingLanguage: {
                ifStringAssumeLanguage: languageAssumedIfNoTranslation,
            },
        });

        return objectKeys(tagLabelByTagId)
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

                const parts = educationalResources_atPath_searchFiltered_tagFiltered.parts;

                const viewItemCountIfSelected = 
                    filterMatchingSelectedTags({
                        parts,
                        selectedTags: [...selectedTags, tagId],
                    }).length;

                if( viewItemCountIfSelected === 0 ){
                    return undefined;
                }

                if( viewItemCountIfSelected === parts.length ){
                    return undefined;
                }

                return id<TagState.NotSelected>({
                    ...common,
                    isSelected: false,
                    viewItemCountIfSelected
                });

            })
            .filter(exclude(undefined));

        
    },
);

const tagLabelByTagId = createSelector(state, state => state.catalogData.tagLabelByTagId);

const view = createSelector(
    educationalResources_atPath_searchFiltered_tagFiltered,
    search,
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
    ) =>
        educationalResourcesToView({
            selected,
            language,
            languageAssumedIfNoTranslation,
            search,
            tagLabelByTagId,
            selectedTags,
        }),
);

export const privateSelectors = {
    catalogData,
    searchMaterial,
    tagLabelByTagId,
    routeParams_defaultsAsUndefined: createSelector(
        routeParams,
        (routeParams): RouteParams =>
            ({
                path: routeParams.path.length === 0 ? undefined : routeParams.path,
                search: routeParams.search || undefined,
                selectedTags:
                    routeParams.selectedTags.length === 0
                        ? undefined
                        : routeParams.selectedTags,
            }) satisfies Record<keyof RouteParams, unknown>,
    ),
    hasLoadedAtLeastOnce: createSelector(
        state,
        state => !isObjectThatThrowIfAccessed(state),
    ),
};

const main = createSelector(view, search, tagStates, (view, search, tagStates) => ({
    view,
    search,
    tagStates,
}));

export const selectors = { main };
