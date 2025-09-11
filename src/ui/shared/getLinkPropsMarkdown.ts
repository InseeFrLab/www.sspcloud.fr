import { routes } from "ui/routes";
import { getCoreSync } from "core";

export function createGeLinkPropsMarkdown(params: { urlDirPath: string | undefined }) {
    const { urlDirPath } = params;

    function getLinkPropsMarkdown(params: { href: string }) {
        const { href } = params;

        const { catalog } = getCoreSync().functions;

        const result = catalog.getResolvedMarkdownHref({
            urlDirPath,
            href,
        });

        switch (result.type) {
            case "external":
                return {
                    href,
                    target: "_blank",
                };
            case "local indexed":
                return routes.catalog(result.routeParams).link;
            case "local non indexed":
                return routes.document({
                    source: result.absoluteLocalUrl,
                }).link;
        }
    }

    return getLinkPropsMarkdown;
}
