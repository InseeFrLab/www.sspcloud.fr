import { createGroup, defineRoute, createRouter, type Route } from "type-route";

const SEGMENT = "404";

export const routeDefs = {
    page404: defineRoute(`/${SEGMENT}`),
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
