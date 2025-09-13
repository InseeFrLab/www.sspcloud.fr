import type { Thunks } from "core/bootstrap";
import { getCatalogData } from "core/adapters/catalogData";
import { actions } from "./state";
import { createUsecaseContextApi } from "clean-architecture";

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

            {
                const context = getContext(rootContext);

                if (context.hasLoaded) {
                    return;
                }

                context.hasLoaded = true;
            }

            dispatch(
                actions.loaded({
                    catalogData: await getCatalogData(),
                }),
            );
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    hasLoaded: false,
}));
