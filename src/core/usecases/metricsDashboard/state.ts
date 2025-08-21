import { createUsecaseActions } from "clean-architecture";
import { id } from "tsafe/id";
import type { Metrics } from "core/ports/Metrics";

export type State = State.NotFetched | State.Ready;

export namespace State {
    export type NotFetched = {
        stateDescription: "not fetched";
    };

    export type Ready = {
        stateDescription: "ready";
        metrics: Metrics;
    };
}

export const name = "metricsDashboard";

export const { actions, reducer } = createUsecaseActions({
    name,
    initialState: id<State>(
        id<State.NotFetched>({
            stateDescription: "not fetched",
        }),
    ),
    reducers: {
        initialized: (
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

            return id<State.Ready>({
                stateDescription: "ready",
                metrics,
            });
        },
    },
});
