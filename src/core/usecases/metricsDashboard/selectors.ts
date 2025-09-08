import { type State as RootState } from "core/bootstrap";
import { name } from "./state";
import { createSelector } from "clean-architecture";
import { assert } from "tsafe/assert";

const state = (rootState: RootState) => rootState[name];
const isReady = createSelector(state, state => state.stateDescription === "ready");
const readyState = createSelector(isReady, state, (isReady, state) => {
    if (!isReady) {
        return null;
    }
    assert(state.stateDescription === "ready");
    return state;
});

const main = createSelector(
    isReady,
    createSelector(isReady, readyState, (isReady, state) => {
        if (!isReady) {
            return null;
        }
        assert(state !== null);
        return state.metrics;
    }),
    (isReady, metrics) => {
        if (!isReady) {
            return {
                isReady: false as const,
            };
        }

        assert(metrics !== null);

        return {
            isReady: true as const,
            metrics,
        };
    },
);

export const selectors = { main };
