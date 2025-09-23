import { mergeRouteDefs } from "type-route";

import * as catalog from "./catalog";
import * as document from "./document";
import * as home from "./home";
import * as page404 from "./page404";

export const pages = {
    catalog,
    document,
    home,
    page404,
};

export const { routeDefs } = mergeRouteDefs({ pages });
