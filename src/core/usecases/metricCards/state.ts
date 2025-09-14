import {
    createUsecaseActions,
    createObjectThatThrowsIfAccessed,
} from "clean-architecture";
import { id } from "tsafe/id";
import type { Metrics } from "core/ports/Metrics";

export type State = {
    metrics: Metrics;
};

export const name = "metricCards";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: createObjectThatThrowsIfAccessed<State>(),
    reducers: {
        loaded: (
            _state,
            {
                payload,
            }: {
                payload: {
                    metrics: Metrics;
                };
            },
        ) => {
            const { metrics } = payload;

            return id<State>({
                metrics,
            });
        },
    },
});
