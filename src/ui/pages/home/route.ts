import { createRouter, defineRoute, createGroup, type Route } from "type-route";

export const routeDefs = {
    home: defineRoute(["/", "/home"]),
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
