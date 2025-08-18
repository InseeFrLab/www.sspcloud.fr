import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import { assert } from "tsafe/assert";
import { objectKeys } from "tsafe/objectKeys";
import { filterMatchingSelectedTags } from "./decoupledLogic/tagFilter";
import type { EducationalResources_selected, TagState } from "./decoupledLogic/types";
import { educationalResourcesToView } from "./decoupledLogic/educationalResourcesToView";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { id } from "tsafe/id";
import { getResourceCountInParts } from "./decoupledLogic/getResourcesCountInParts";
import { getLocalizedStringId } from "./decoupledLogic/getLocalizedStringId";

const state = (rootState: RootState) => rootState[name];

const isReady = createSelector(state, state => state.stateDescription === "ready");
const readyState = createSelector(isReady, state, (isReady, state) => {
    if (!isReady) {
        return null;
    }
    assert(state.stateDescription === "ready");
    return state;
});

const catalogData = createSelector(isReady, readyState, (isReady, state) => {
    if (!isReady) {
        return null;
    }

    assert(state !== null);

    return state.catalogData;
});

const educationalResources_atPath = createSelector(
    isReady,
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }
        assert(state !== null);
        return state.catalogData.educationalResources;
    }),
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }

        assert(state !== null);

        return state.path;
    }),
    (isReady, educationalResources, path): EducationalResources_selected | null => {
        if (!isReady) {
            return null;
        }

        assert(educationalResources !== null);
        assert(path !== null);

        return (function callee(params: {
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
    },
);

const educationalResources_atPath_searchFiltered = createSelector(
    isReady,
    educationalResources_atPath,
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }

        assert(state !== null);

        return state.searchResults;
    }),
    (
        isReady,
        educationalResources_atPath,
        searchResults,
    ): EducationalResources_selected | null => {
        if (!isReady) {
            return null;
        }

        assert(educationalResources_atPath !== null);
        assert(searchResults !== null);

        if (searchResults === undefined) {
            return educationalResources_atPath;
        }

        return {
            ...educationalResources_atPath,
            parts: educationalResources_atPath.parts.filter(
                (...[, i]) => searchResults[i],
            ),
        };
    },
);

const educationalResources_atPath_searchFiltered_tagFiltered = createSelector(
    isReady,
    educationalResources_atPath_searchFiltered,
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }
        assert(state !== null);

        return state.selectedTags;
    }),
    (
        isReady,
        educationalResources_atPath_searchFiltered,
        selectedTags,
    ): EducationalResources_selected | null => {
        if (!isReady) {
            return null;
        }

        assert(educationalResources_atPath_searchFiltered !== null);
        assert(selectedTags !== null);

        return {
            ...educationalResources_atPath_searchFiltered,
            parts: filterMatchingSelectedTags({
                parts: educationalResources_atPath_searchFiltered.parts,
                selectedTags
            }),
        };
    },
);

const language = createSelector(isReady, readyState, (isReady, state)=> {
        if( !isReady){
            return null;
        }

        assert(state !== null);

        return state.language;
    });


const languageAssumedIfNoTranslation= createSelector(isReady, catalogData, (isReady, catalogData) => {
        if (!isReady) {
            return null;
        }
        assert(catalogData !== null);
        return catalogData.languageAssumedIfNoTranslation;
    });

const tagStates = createSelector(
    isReady,
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }
        assert(state !== null);
        return state.selectedTags;
    }),
    createSelector(isReady, catalogData, (isReady, catalogData) => {
        if (!isReady) {
            return null;
        }
        assert(catalogData !== null);
        return catalogData.tags;
    }),
    languageAssumedIfNoTranslation,
    language,
    educationalResources_atPath_searchFiltered_tagFiltered,
    (
        isReady,
        selectedTags,
        tags,
        languageAssumedIfNoTranslation,
        language,
        educationalResources_atPath_searchFiltered_tagFiltered,
    ): TagState[] | null => {
        if (!isReady) {
            return null;
        }

        assert(selectedTags !== null);
        assert(tags !== null);
        assert(language !== null);
        assert(educationalResources_atPath_searchFiltered_tagFiltered !== null);
        assert(languageAssumedIfNoTranslation !== null);

        const { resolveLocalizedStringDetailed } = createResolveLocalizedString({
            currentLanguage: language,
            fallbackLanguage: "en",
            labelWhenMismatchingLanguage: {
                ifStringAssumeLanguage: languageAssumedIfNoTranslation,
            },
        });

        return objectKeys(tags)
            .map(tagId => ({ tagId, label: resolveLocalizedStringDetailed(tags[tagId]) }))
            .map(({ tagId, label }) => {
                const common = id<TagState.Common>({
                    id: tagId,
                    label,
                });

                return selectedTags.includes(tagId)
                    ? id<TagState.Selected>({
                          ...common,
                          isSelected: true,
                      })
                    : id<TagState.NotSelected>({
                          ...common,
                          isSelected: false,
                          viewItemCountIfSelected: getResourceCountInParts(
                              filterMatchingSelectedTags({
                                  parts: educationalResources_atPath_searchFiltered_tagFiltered.parts,
                                  selectedTags: [...selectedTags, tagId],
                              }),
                          ),
                      });
            });
    },
);

const search = createSelector(isReady, readyState, (isReady, state) => {
    if (!isReady) {
        return null;
    }
    assert(state !== null);
    return state.search;
});

const view = createSelector(
    isReady,
    educationalResources_atPath_searchFiltered_tagFiltered,
    search,
    language,
    languageAssumedIfNoTranslation,
    (isReady, selected, search, language, languageAssumedIfNoTranslation) => {
        if (!isReady) {
            return null;
        }

        assert(selected !== null);
        assert(search !== null);
        assert(language !== null);
        assert(languageAssumedIfNoTranslation !== null);

        return educationalResourcesToView({
            selected,
            language,
            languageAssumedIfNoTranslation,
            search,
            "labelByTag": {}
        });
    },
);

export const privateSelectors = {
    isReady,
    isFetching: createSelector(isReady, state, (isReady, state) => {
        if (isReady) {
            return null;
        }

        assert(state.stateDescription === "not fetched");

        return state.isFetching;
    }),
    catalogData,
    searchMaterial: createSelector(
        isReady,
        search,
        createSelector(
            isReady,
            educationalResources_atPath,
            (isReady, educationalResources_atPath) => {
                if (!isReady) {
                    return null;
                }

                assert(educationalResources_atPath !== null);

                return educationalResources_atPath.parts;
            },
        ),
        (isReady, search, parts) => {
            if (!isReady) {
                return null;
            }

            assert(search !== null);
            assert(parts !== null);

            return {
                search,
                parts,
            };
        },
    ),
};

const main = createSelector(
    isReady,
    view,
    search,
    tagStates,
    (isReady, view, search, tagStates) => {
        if (!isReady) {
            return {
                isReady: false as const,
            };
        }

        assert(view !== null);
        assert(search !== null);
        assert(tagStates !== null);

        return {
            isReady: true as const,
            view,
            search,
            tagStates,
        };
    },
);

export const selectors = { main };
