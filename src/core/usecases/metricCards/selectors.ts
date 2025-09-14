import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";

const state = (rootState: RootState) => rootState[name];

export const selectors = {
    metrics: createSelector(state, state => state.metrics),
};
