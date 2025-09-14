import type { Thunks } from "core/bootstrap";
import { actions } from "./state";
import { createUsecaseContextApi } from "clean-architecture";
import { getMetrics } from "core/adapters/metrics";

export const thunks = {
    load:
        () =>
        async (...args) => {
            const [dispatch, , rootContext] = args;

            const context = getContext(rootContext);

            if (context.isInitialized) {
                return;
            }

            context.isInitialized = true;

            const metrics = await getMetrics();
            dispatch(
                actions.loaded({
                    metrics,
                }),
            );
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    isInitialized: false,
}));
