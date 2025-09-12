import {
    createUsecaseActions,
    createObjectThatThrowsIfAccessed,
    isObjectThatThrowIfAccessed,
} from "clean-architecture";
import { id } from "tsafe/id";
import type { EducationalResource } from "core/ports/CatalogData";
import type { Language } from "core/ports/CatalogData";
import type { RouteParams } from "./thunks";
import { assert } from "tsafe/assert";

export type State = {
    searchResultsWrap:
        | {
              search: string;
              searchRunOnParts: unknown[];
              searchResults: number[];
          }
        | undefined;
    routeParams: RouteParams;
    language: Language;
    search_urgent: string;
    markdown:
        | {
              url: string;
              text: string;
          }
        | undefined;
};

export const name = "catalog";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: createObjectThatThrowsIfAccessed<State>({
        debugMessage: "Loader hasn't been called or hasn't resolved yet",
    }),
    reducers: {
        loaded: (
            state,
            {
                payload,
            }: {
                payload: {
                    routeParams: RouteParams;
                    language: Language;
                };
            },
        ) => {
            const { routeParams, language } = payload;

            return id<State>({
                searchResultsWrap: isObjectThatThrowIfAccessed(state)
                    ? undefined
                    : state.searchResultsWrap,
                routeParams,
                language,
                search_urgent: routeParams.search ?? "",
                markdown: undefined,
            });
        },
        backForwardNavigationNotified: (
            state,
            {
                payload,
            }: {
                payload: {
                    routeParams: RouteParams;
                };
            },
        ) => {
            const { routeParams } = payload;

            state.routeParams = routeParams;
            state.search_urgent = routeParams.search ?? "";
        },
        languageUpdated: (
            state,
            {
                payload,
            }: {
                payload: {
                    language: Language;
                };
            },
        ) => {
            const { language } = payload;

            state.language = language;
        },
        searchResultSet: (
            state,
            {
                payload,
            }: {
                payload: {
                    searchResultsWrap: State["searchResultsWrap"];
                };
            },
        ) => {
            const { searchResultsWrap } = payload;

            state.searchResultsWrap = searchResultsWrap;
        },

        markdownSet: (
            state,
            {
                payload,
            }: {
                payload: {
                    markdown: NonNullable<State["markdown"]>;
                };
            },
        ) => {
            const { markdown } = payload;

            state.markdown = markdown;
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
            (state.routeParams.path ??= []).push(pathSegment);

            state.routeParams.selectedTags = [];
            state.routeParams.search = "";
            state.search_urgent = "";
            state.searchResultsWrap = undefined;
        },

        navigatedBack: (state, { payload }: { payload: { upCount: number } }) => {
            const { upCount } = payload;

            const path = (state.routeParams.path ??= []);

            assert(path.length !== 0);
            assert(upCount >= 1 && Math.round(upCount) === upCount);

            new Array(upCount).fill("").forEach(() => path.pop());

            state.routeParams.selectedTags = [];
            state.routeParams.search = "";
            state.search_urgent = "";
            state.searchResultsWrap = undefined;
        },
        fileOpened: (
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
            (state.routeParams.path ??= []).push(pathSegment);
        },
        searchUrgentUpdated: (
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

            state.search_urgent = search;
        },
        searchUrgentCommitted: state => {
            state.routeParams.search = state.search_urgent;
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

            const selectedTags = (state.routeParams.selectedTags ??= []);

            const index = selectedTags.indexOf(tagId);

            if (index === -1) {
                selectedTags.push(tagId);
            } else {
                selectedTags.splice(index, 1);
            }
        },
    },
});
