import { defineRoute, createGroup } from "type-route";

const SEGMENT = "";

export const routeDefs = {
    home: defineRoute(`/${SEGMENT}`),
};

export const routeGroup = createGroup(routeDefs);
