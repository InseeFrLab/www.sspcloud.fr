import {
    createUsecaseActions,
    createObjectThatThrowsIfAccessed,
    isObjectThatThrowIfAccessed,
} from "clean-architecture";
import type { Language } from "core/ports/CatalogData";
import type { RouteParams } from "./thunks";

export type State = {
    routeParams: RouteParams;
    language: Language;
    markdown:
        | {
              url: string;
              text: string;
          }
        | undefined;
};

export const name = "document";

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

            return {
                routeParams,
                language,
                markdown: isObjectThatThrowIfAccessed(state) ? undefined : state.markdown,
            };
        },
        routeParamsUpdateNotified: (
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
        markdownSet: (
            state,
            { payload }: { payload: { markdown: NonNullable<State["markdown"]> } },
        ) => {
            const { markdown } = payload;

            state.markdown = markdown;
        },
    },
});
