import { createRouter, defineRoute, param, createGroup, type Route } from "type-route";

const SEGMENT = "document";

export const routeDefs = {
    document: defineRoute(
        {
            source: param.query.string,
        },
        () => `/${SEGMENT}`,
    ),
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
