import {
    createUsecaseActions,
    createObjectThatThrowsIfAccessed,
} from "clean-architecture";
import { id } from "tsafe/id";
import type { CatalogData } from "core/ports/CatalogData";

export type State = {
    catalogData: CatalogData;
};

export const name = "_shared";

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
                    catalogData: CatalogData;
                };
            },
        ) => {
            const { catalogData } = payload;

            return id<State>({ catalogData });
        },
    },
});
