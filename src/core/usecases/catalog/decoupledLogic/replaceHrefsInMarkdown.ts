import { transformHrefsInMarkdown as transformHrefsInMarkdown_generic } from "core/tools/replaceHrefsInMarkdown";

export type Routes = {
    getCatalogUrl: (params: { path: string[] }) => string;
    getDocumentUrl: (params: { source: string }) => string;
};

export function replaceHrefsInMarkdown(params: {
    markdownUrl: string;
    markdownText: string;
    routes: Routes;
    catalogArticleUrlByPath: Record<string, string[]>;
}): string {
    const { markdownUrl, markdownText, routes, catalogArticleUrlByPath } = params;

    return transformHrefsInMarkdown_generic({
        markdownText,
        transformHref: href => {
            //TODO
            return null as any;
        },
    });
}
