import { createUsecaseActions } from "clean-architecture";
import { id } from "tsafe/id";
import { assert } from "tsafe/assert";
import type { CatalogData } from "core/ports/CatalogData";
import { same } from "evt/tools/inDepth/same";
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
        params: ParamsOfUpdate;
    };
}

export const name = "catalog";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: id<State>(
        id<State.NotReady>({
            isReady: false,
            catalogData: undefined
        }),
    ),
    reducers: {
        catalogDataSet: (state, { payload }: { payload: { catalogData: CatalogData; }})=>{
            const { catalogData } = payload;
            assert(!state.isReady);
            state.catalogData = catalogData;
        },
        paramsUpdated: (state, { payload }: { payload: { params: ParamsOfUpdate; } })=> {

            const { params } = payload;

            const catalogData = state.isReady
                ? state.catalogData
                : (assert(state.catalogData !== undefined), state.catalogData);

            return id<State.Ready>({
                isReady: true,
                catalogData,
                searchResults: (()=> {

                    if( !state.isReady ){
                        return undefined;
                    }

                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { selectedTags: _1, ...rest1 } = state.params;
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const {selectedTags: _2, ...rest2 } = params;

                    if( same(rest1, rest2) ){
                        return state.searchResults;
                    }

                    return undefined;

                })(),
                params
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
