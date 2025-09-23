import { createGroup, defineRoute } from "type-route";

const SEGMENT = "404";

export const routeDefs = {
    page404: defineRoute(`/${SEGMENT}`),
};

export const routeGroup = createGroup(routeDefs);
