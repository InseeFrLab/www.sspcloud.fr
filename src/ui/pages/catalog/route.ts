import {
    createRouter,
    param,
    defineRoute,
    noMatch,
    createGroup,
    type Route,
    type ValueSerializer,
} from "type-route";
import { id } from "tsafe/id";

export const routeDefs = {
    catalog: defineRoute(
        {
            path: param.query.optional
                .ofType(
                    id<ValueSerializer<string[]>>({
                        parse: raw => {
                            try {
                                return JSON.parse(raw) as string[];
                            } catch {
                                return noMatch;
                            }
                        },
                        stringify: value => JSON.stringify(value),
                    }),
                )
                .default([]),
            search: param.query.optional.string.default(""),
            selectedTabs: param.query.optional
                .ofType(
                    id<ValueSerializer<string[]>>({
                        parse: raw => {
                            try {
                                return JSON.parse(raw) as string[];
                            } catch {
                                return noMatch;
                            }
                        },
                        stringify: value => JSON.stringify(value),
                    }),
                )
                .default([]),
        },
        () => "/catalog",
    ),
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
