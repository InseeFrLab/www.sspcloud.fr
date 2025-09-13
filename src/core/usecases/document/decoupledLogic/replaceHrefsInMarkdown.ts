import { transformHrefsInMarkdown as transformHrefsInMarkdown_generic } from "core/tools/replaceHrefsInMarkdown";

export function replaceHrefsInMarkdown(params: {
    markdownUrl: string | undefined;
    markdownText: string;
    getDocumentPageUrl: (params: { path: string[] }) => string;
    pathByArticleUrl: Record<string, string[]>;
}): string {
    const { markdownUrl, markdownText, getDocumentPageUrl, pathByArticleUrl } = params;

    console.log(markdownUrl, pathByArticleUrl, getDocumentPageUrl);

    return transformHrefsInMarkdown_generic({
        markdownText,
        transformHref: href => {
            console.log(href);
            //TODO
            return null as any;
        },
    });
}
