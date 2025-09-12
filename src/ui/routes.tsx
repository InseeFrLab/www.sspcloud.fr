import { useContext, createContext, type ReactNode } from "react";
import { createRouter, type Link } from "type-route";
import { routeDefs, routerOpts } from "ui/pages";
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

export function hrefToLink(href: string): Link & { target?: "_blank" } {
    const isInternalUrl = (() => {
        try {
            ensureUrlIsSafe(href);
        } catch {
            return false;
        }

        return true;
    })();

    if (!isInternalUrl) {
        if (href.endsWith(".md")) {
            return routes.document({
                source: href,
            }).link;
        } else {
            return {
                href,
                onClick: e => {
                    e.preventDefault();
                    session.push(href);
                },
            };
        }
    }

    return {
        href,
        target: "_blank",
        onClick: () => {
            /* nothing */
        },
    };
}
