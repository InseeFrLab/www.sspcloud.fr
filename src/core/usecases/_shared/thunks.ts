import type { Thunks } from "core/bootstrap";
import { getCatalogData } from "core/adapters/catalogData";
import { actions } from "./state";
import memoize from "memoizee";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load: memoize(() =>
        memoize(
            async (...args): Promise<void> => {
                const [dispatch] = args;
                dispatch(
                    actions.loaded({
                        catalogData: await getCatalogData(),
                    }),
                );
            },
            { promise: true },
        ),
    ),
} satisfies Thunks;
