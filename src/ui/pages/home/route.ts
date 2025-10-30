import { defineRoute, createGroup } from "type-route";

const SEGMENTS = [""];

export const routeDefs = {
    home: defineRoute(SEGMENTS.map(s => `/${s}`)),
};

export const routeGroup = createGroup(routeDefs);
