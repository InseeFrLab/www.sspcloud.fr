import { useContext, createContext, type ReactNode } from "react";
import { createRouter, type Link } from "type-route";
import { routeDefs, routerOpts } from "ui/pages";
import { type LocalizedString, resolveLocalizedString, useLang } from "ui/i18n";
import { useMemo } from "react";
import { ensureUrlIsSafe } from "ui/tools/ensureUrlIsSafe";

export const {
    RouteProvider: RouteProvider_base,
    useRoute: useRoute_base,
    routes,
    session,
} = createRouter(routerOpts, routeDefs);

export const { RouteProvider, useRoute } = (() => {
    const contextIsProvided = createContext(false);

    function RouteProvider(props: { children: ReactNode }) {
        const { children } = props;

        return (
            <contextIsProvided.Provider value={true}>
                <RouteProvider_base>{children}</RouteProvider_base>
            </contextIsProvided.Provider>
        );
    }

    const useRoute: typeof useRoute_base = () => {
        const isProvided = useContext(contextIsProvided);
        if (!isProvided) {
            console.log("HMR, reload");
            window.location.reload();
            throw new Promise<never>(() => {});
        }
        return useRoute_base();
    };

    return { RouteProvider, useRoute };
})();

let route_current = session.getInitialRoute();

session.listen(route => (route_current = route));

export function getRoute() {
    return route_current;
}

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

    const isInternalUrl = (() => {
        try {
            ensureUrlIsSafe(url_str);
        } catch {
            return false;
        }

        return true;
    })();

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
