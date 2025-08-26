import { createRouter, defineRoute, createGroup, type Route } from "type-route";

const SEGMENT= "";

export const routeDefs = {
    home: defineRoute(`/${SEGMENT}`),
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
