import type { Thunks } from "core/bootstrap";
import { actions } from "./state";
import * as _shared from "core/usecases/_shared";

export type RouteParams = {
    path?: string[] | undefined;
    search?: string | undefined;
    selectedTags?: string[] | undefined;
};

export const thunks = {
    load:
        (params: { markdownUrl: string }) =>
        async (...args): Promise<void> => {
            const [dispatch] = args;

            const { markdownUrl } = params;

            let markdownText = await (await fetch(markdownUrl)).text();

            markdownText = dispatch(
                _shared.thunks.replaceHrefsInMarkdown({
                    markdownUrl: markdownUrl,
                    markdownText,
                }),
            );

            dispatch(
                actions.loaded({
                    markdownText,
                }),
            );
        },
} satisfies Thunks;
