import { createGroup, defineRoute } from "type-route";

const SEGMENTS = ["404"];

export const routeDefs = {
    page404: defineRoute(SEGMENTS.map(s => `/${s}`)),
};

export const routeGroup = createGroup(routeDefs);
