import { transformHrefsInMarkdown as transformHrefsInMarkdown_generic } from "core/tools/replaceHrefsInMarkdown";
import {
    join as pathJoin,
    dirname as pathDirname,
    normalize as pathNormalize,
} from "pathe";

export function replaceHrefsInMarkdown(params: {
    markdownUrl: string;
    markdownText: string;
    getDocumentPageUrl: (params: { path?: string[]; url?: string }) => string;
    pathByArticleUrl: Record<string, string[]>;
}): string {
    const { markdownUrl, markdownText, getDocumentPageUrl, pathByArticleUrl } = params;

    const dirPath = pathDirname(markdownUrl);

    return transformHrefsInMarkdown_generic({
        markdownText,
        transformHref: function callee(href) {
            if (href.includes("//")) {
                return href;
            }

            if (href.startsWith("/")) {
                const path = pathByArticleUrl[href];

                return getDocumentPageUrl(path === undefined ? { url: href } : { path });
            }

            const url = pathNormalize(pathJoin(dirPath, href));

            return callee(url);
        },
    });
}
