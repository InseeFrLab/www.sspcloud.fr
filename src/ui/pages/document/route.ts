import {
    param,
    defineRoute,
    noMatch,
    createGroup,
    type ValueSerializer,
} from "type-route";
import { id } from "tsafe/id";

const SEGMENT = "document";

export const routeDefs = {
    document: defineRoute(
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
            url: param.query.optional.string,
        },
        () => `/${SEGMENT}`,
    ),
};

export const routeGroup = createGroup(routeDefs);
