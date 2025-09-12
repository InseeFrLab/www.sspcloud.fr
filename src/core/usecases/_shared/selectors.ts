import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";

const state = (rootState: RootState) => rootState[name];

const catalogData = createSelector(state, state => state.catalogData);

/*
const articleUrlByPath = createSelector(
    catalogData,
    (catalogData): Record<string, string[]> => {
        // TODO
        return {};
    },
);
*/

export const privateSelectors = {
    //articleUrlByPath,
};

export const selectors = {
    catalogData,
};
