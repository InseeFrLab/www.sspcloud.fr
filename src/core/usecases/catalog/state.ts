/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUsecaseActions } from "clean-architecture";
import { id } from "tsafe/id";
import { assert } from "tsafe/assert";
import type { CatalogData } from "core/ports/CatalogData";
import { same } from "evt/tools/inDepth/same";
import type { Language, EducationalResource } from "core/ports/CatalogData";
import { typeGuard } from "tsafe/typeGuard";
import type { ParamsOfUpdate } from "./thunks";


export type State = State.NotReady | State.Ready;

export namespace State {
    export type NotReady = {
        isReady: false;
        catalogData: CatalogData | undefined;
    };

    export type Ready = {
        isReady: true;
        catalogData: CatalogData;
        searchResults: number[] | undefined;
        viewParams: {
            path: string[];
            search: string;
            selectedTags: EducationalResource.Tag[];
            language: Language;
        };
    };
}

export const name = "catalog";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: id<State>(
        id<State.NotReady>({
            isReady: false,
            catalogData: undefined,
        }),
    ),
    reducers: {
        catalogDataSet: (
            state,
            { payload }: { payload: { catalogData: CatalogData } },
        ) => {
            const { catalogData } = payload;
            assert(!state.isReady);
            state.catalogData = catalogData;
        },
        paramsUpdated: (
            state,
            { payload }: { payload: { paramsOfUpdate: ParamsOfUpdate } },
        ) => {

            const { paramsOfUpdate } = payload;

            const catalogData = state.isReady
                ? state.catalogData
                : (assert(state.catalogData !== undefined), state.catalogData);

            const viewParams: State.Ready["viewParams"] = {
                path: paramsOfUpdate.routeParams.path ?? [],
                search: paramsOfUpdate.routeParams.search ?? "",
                selectedTags: (paramsOfUpdate.routeParams.selectedTags ?? []).filter(str =>
                    typeGuard<EducationalResource.Tag>(
                        str,
                        str in catalogData.tagLabelByTagId,
                    ),
                ),
                language: paramsOfUpdate.language,
            };

            return id<State.Ready>({
                isReady: true,
                catalogData,
                searchResults: (() => {
                    if (!state.isReady) {
                        return undefined;
                    }

                    // NOTE: Do not reset the search when things that do not affect
                    // the search changes.
                    if (
                        same(
                            (() => {
                                const { selectedTags, language, ...rest } =
                                    state.viewParams;

                                return rest;
                            })(),
                            (() => {
                                const { selectedTags, language, ...rest } =
                                    viewParams;

                                return rest;
                            })(),
                        )
                    ) {
                        return state.searchResults;
                    }

                    return undefined;
                })(),
                viewParams,
            });
        },
        searchResultSet: (
            state,
            {
                payload,
            }: {
                payload: {
                    searchResults: NonNullable<State.Ready["searchResults"]>;
                };
            },
        ) => {
            const { searchResults } = payload;

            assert(state.isReady);

            state.searchResults = searchResults;
        },
    },
});
