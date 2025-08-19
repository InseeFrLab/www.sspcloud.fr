import { createRouter, type Link } from "type-route";
import { routeDefs, routerOpts } from "ui/pages";
import { type LocalizedString, resolveLocalizedString, useLang } from "ui/i18n";
import { useMemo } from "react";

export const { RouteProvider, useRoute, routes, session } = createRouter(
    routerOpts,
    routeDefs,
);

export function useUrlToLink() {
    const lang = useLang();

    const urlToLink_dynamic = useMemo(
        () => (url: LocalizedString) => urlToLink(url),
        [lang],
    );

    return { urlToLink: urlToLink_dynamic };
}

export function urlToLink(url: LocalizedString): Link & { target?: "_blank" } {
    const url_str = resolveLocalizedString(url);

    const isInternalUrl = url_str.startsWith("/");

    if (!isInternalUrl) {
        return {
            href: url_str,
            target: "_blank",
            onClick: () => {
                /* nothing */
            },
        };
    }

    if (url_str.endsWith(".md")) {
        return routes.document({
            source: url,
        }).link;
    }

    return {
        href: url_str,
        onClick: e => {
            e.preventDefault();
            session.push(url_str);
        },
    };
}
