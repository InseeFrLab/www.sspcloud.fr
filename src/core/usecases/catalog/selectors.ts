import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import { assert } from "tsafe/assert";
import type { EducationalResource, LocalizedString } from "core/ports/CatalogData";
import { objectKeys } from "tsafe/objectKeys";

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

export type View = {
    header:
        | {
              path: string[];
              abstract: string;
              imageUrl: string | undefined;
          }
        | undefined;
    items: View.Item[];
};

export namespace View {
    export type HighlightableString = {
        value: string;
        highlightedIndexes: number[] | undefined;
    };

    export type Item = Item.Resource | Item.Collection;

    export namespace Item {
        type Common = {
            name: HighlightableString;
            abstract: HighlightableString;
            imageUrl: string | undefined;
            authors: string[];
            lastUpdatedTime: number | undefined;
            tags: string[];
            timeRequiredInMinutes: number | undefined;
        };

        export type Resource = Common & {
            isCollection: false;
            target: Resource.Target;
        };

        export namespace Resource {
            export type Target = Target.Article | Target.Deployment;

            export namespace Target {
                export type Article = {
                    type: "article";
                    url: string;
                };
                export type Deployment = {
                    type: "deployment";
                    url: string | Record<string /* ide name */, string>;
                };
            }
        }

        export type Collection = Common & {
            isDirectory: true;
            pathSegment: number;
        };
    }
}

type EducationalResources_selected = {
    path_names: LocalizedString[];
    collection: EducationalResource.Collection | undefined;
    parts: EducationalResource[];
};

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

                    const name_path = (() => {
                        const { name } = educationalResource;

                        if (typeof name === "string") {
                            return name;
                        }

                        {
                            const candidate = name.en;
                            if (candidate !== undefined) {
                                return candidate;
                            }
                        }

                        {
                            const key = objectKeys(name)[0];
                            assert(key !== undefined);
                            const candidate = name[key];
                            assert(candidate !== undefined);
                            return candidate;
                        }
                    })();

                    return name_path === firstSegment ? educationalResource : undefined;
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
    createSelector(isReady, readyState, (isReady, state)=>{
        if( !isReady ){
            return null;
        }

        assert(state!==null);

        return state.searchResults;

    }),
    (isReady, educationalResources_atPath, searchResults): EducationalResources_selected | null =>{

        if( !isReady ){
            return null;
        }

        assert(educationalResources_atPath !== null);
        assert(searchResults !== null);

        if( searchResults === undefined ){
            return educationalResources_atPath;
        }

        return {
            ...educationalResources_atPath,
            parts: educationalResources_atPath.parts.filter(
                (...[, i]) => searchResults[i],
            ),
        };

    }
);


const educationalResources_atPath_tagsFiltered = createSelector(
    isReady,
    educationalResources_atPath,
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }
        assert(state !== null);

        return state.selectedTags;
    }),
    (
        isReady,
        educationalResources_atPath,
        selectedTags,
    ): EducationalResources_selected | null => {
        if (!isReady) {
            return null;
        }

        assert(educationalResources_atPath !== null);
        assert(selectedTags !== null);

        function getDoResourceMatchAllSelectedTags(params: {
            resource: {
                tags: string[];
            };
            selectedTags: string[];
        }): boolean {
            const { resource, selectedTags } = params;

            for (const selectedTag of selectedTags) {
                if (!resource.tags.includes(selectedTag)) {
                    return false;
                }
            }

            return true;
        }

        function getContainsAnyResourceThatMatchAllTags(params: {
            parts: EducationalResource[];
            selectedTags: string[];
        }): boolean {
            const { parts, selectedTags } = params;

            return parts.some(educationalResource => {});
        }

        const parts = educationalResources_atPath.parts.filter(educationalResource => {
            if ("parts" in educationalResource) {
                return getContainsAnyResourceThatMatchAllTags({
                    parts: educationalResource.parts,
                    selectedTags,
                });
            } else {
                return getDoResourceMatchAllSelectedTags({
                    resource: educationalResource,
                    selectedTags,
                });
            }
        });

        return {
            path_names: educationalResources_atPath.path_names,
            collection: educationalResources_atPath.collection,
            parts,
        };
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
        createSelector(isReady, readyState, (isReady, state) => {
            if (!isReady) {
                return null;
            }
            assert(state !== null);
            return state.search;
        }),
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

/*
const main = createSelector(
    isReady,
    state,
    (isReady, isLoading, sortedScores, playerCount) => {

        if (!isReady) {

            return {
                "isReady": false as const,
                isLoading
            };

        }

        assert(sortedScores !== undefined);
        assert(playerCount !== undefined);

        return {
            "isReady": true as const,
            isLoading,
            sortedScores,
            playerCount
        };

    }
);

export const selectors = { main };
*/
