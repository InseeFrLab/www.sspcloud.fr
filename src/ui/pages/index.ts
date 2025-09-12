import * as catalog from "./catalog";
import * as home from "./home";
import * as page404 from "./page404";

import { objectKeys } from "tsafe/objectKeys";
import type { UnionToIntersection } from "tsafe";
import type { RouterOpts } from "type-route";

export const pages = {
    catalog,
    home,
    page404,
};

export const routeDefs = {} as UnionToIntersection<
    (typeof pages)[keyof typeof pages]["routeDefs"]
>;

objectKeys(pages).forEach(pageName =>
    Object.assign(routeDefs, pages[pageName].routeDefs),
);

export const routerOpts = {} satisfies RouterOpts;
