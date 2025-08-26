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

const SEGMENT = "catalog";

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
            selectedTags: param.query.optional
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
        () => `/${SEGMENT}`,
    ),
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
