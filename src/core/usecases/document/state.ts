import {
    createUsecaseActions,
    createObjectThatThrowsIfAccessed,
} from "clean-architecture";

export type State = {
    markdownText: string;
};

export const name = "document";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: createObjectThatThrowsIfAccessed<State>({
        debugMessage: "Loader hasn't been called or hasn't resolved yet",
    }),
    reducers: {
        loaded: (
            _state,
            {
                payload,
            }: {
                payload: {
                    markdownText: string;
                };
            },
        ) => {
            const { markdownText } = payload;

            return { markdownText };
        },
    },
});
