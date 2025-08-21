import { createUsecaseActions } from "clean-architecture";
import { id } from "tsafe/id";
import { assert } from "tsafe/assert";
import type { CatalogData, EducationalResource, Language } from "core/ports/CatalogData";

export type State = State.NotFetched | State.Ready;

export namespace State {
    export type NotFetched = {
        stateDescription: "not fetched";
        isFetching: boolean;
    };

    export type Ready = {
        stateDescription: "ready";
        catalogData: CatalogData;
        path: string[];
        search: string;
        selectedTags: EducationalResource.Tag[];
        language: Language;
        searchResults: number[] | undefined;
    };
}

export const name = "catalog";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: id<State>(
        id<State.NotFetched>({
            stateDescription: "not fetched",
            isFetching: false,
        }),
    ),
    reducers: {
        fetchingStarted: state => {
            assert(state.stateDescription === "not fetched");
            state.isFetching = true;
        },
        initialized: (
            _state,
            {
                payload,
            }: {
                payload: Pick<
                    State.Ready,
                    "catalogData" | "path" | "search" | "selectedTags" | "language"
                >;
            },
        ) => {
            return id<State.Ready>({
                stateDescription: "ready",
                ...payload,
                searchResults: undefined,
            });
        },
        navigatedInDirectory: (
            state,
            {
                payload,
            }: {
                payload: {
                    pathSegment: string;
                };
            },
        ) => {
            const { pathSegment } = payload;

            assert(state.stateDescription === "ready");

            state.path.push(pathSegment);
            state.searchResults = undefined;
        },
        navigatedBack: (state, { payload }: { payload: { upCount: number } }) => {
            const { upCount } = payload;
            assert(state.stateDescription === "ready");
            assert(state.path.length !== 0);
            assert(upCount >= 1 && Math.round(upCount) === upCount);

            new Array(upCount).fill("").forEach(() => {
                state.path.pop();
            });

            state.searchResults = undefined;
        },
        searchUpdated: (
            state,
            {
                payload,
            }: {
                payload: {
                    search: string;
                };
            },
        ) => {
            const { search } = payload;

            assert(state.stateDescription === "ready");

            state.search = search;
            state.searchResults = undefined;
        },
        tagSelectionToggled: (
            state,
            {
                payload,
            }: {
                payload: {
                    tagId: EducationalResource.Tag;
                };
            },
        ) => {
            const { tagId } = payload;

            assert(state.stateDescription === "ready");

            const { selectedTags } = state;

            const index = selectedTags.indexOf(tagId);

            if (index === -1) {
                selectedTags.push(tagId);
            } else {
                selectedTags.splice(index, 1);
            }
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

            assert(state.stateDescription === "ready");

            state.searchResults = searchResults;
        },
    },
});
