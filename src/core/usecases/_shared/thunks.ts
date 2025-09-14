import type { Thunks } from "core/bootstrap";
import { getCatalogData } from "core/adapters/catalogData";
import { actions } from "./state";
import { createUsecaseContextApi } from "clean-architecture";
import { id } from "tsafe";
import { Deferred } from "evt/tools/Deferred";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load:
        () =>
        async (...args): Promise<void> => {
            const [dispatch, , rootContext] = args;

            const context = getContext(rootContext);

            if (context.prLoaded !== undefined) {
                return context.prLoaded;
            }

            const dLoaded = new Deferred<void>();

            context.prLoaded = dLoaded.pr;

            dispatch(
                actions.loaded({
                    catalogData: await getCatalogData(),
                }),
            );

            dLoaded.resolve();
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    prLoaded: id<Promise<void> | undefined>(undefined),
}));
