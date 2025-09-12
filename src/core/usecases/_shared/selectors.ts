import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector, isObjectThatThrowIfAccessed } from "clean-architecture";

const state = (rootState: RootState) => rootState[name];

const catalogData = createSelector(state, state => state.catalogData);

const articleUrlByPath = createSelector(
    catalogData,
    (catalogData): Record<string, string[]> => {
        TODO;
        return null as any;
    },
);

export const privateSelectors = {
    hasLoadedAtLeastOnce: createSelector(
        state,
        state => !isObjectThatThrowIfAccessed(state),
    ),
    articleUrlByPath,
};

export const selectors = {
    catalogData,
};
