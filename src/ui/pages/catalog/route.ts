import {
    param,
    defineRoute,
    noMatch,
    createGroup,
    type ValueSerializer,
} from "type-route";
import { id } from "tsafe/id";

const SEGMENTS = ["catalog", "formation"];

export const routeDefs = {
    catalog: defineRoute(
        {
            path: param.query.optional.ofType(
                id<ValueSerializer<string[]>>({
                    parse: raw => {
                        try {
                            return raw
                                .split("›")
                                .map(segment => segment.replace(/␣/g, " ")) as string[];
                        } catch {
                            return noMatch;
                        }
                    },
                    stringify: value =>
                        value.map(segment => segment.replace(/ /g, "␣")).join("›"),
                }),
            ),
            search: param.query.optional.string,
            selectedTags: param.query.optional.ofType(
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
            ),
        },
        () => SEGMENTS.map(s => `/${s}`),
    ),
};

export const routeGroup = createGroup(routeDefs);
