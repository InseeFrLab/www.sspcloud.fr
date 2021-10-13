import { createRouter, param, defineRoute, noMatch } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";
import type { ValueSerializer } from "type-route";
import { id } from "tsafe/id";
import type { EducationalResourceCategory } from "../lib/educationalResources";
import { Equals, assert } from "tsafe";
import { getEnumValueSerializer } from "./tools/getEnumValueSerializer";

export const routeDefs = {
    "home": defineRoute("/"),
    "documentation": defineRoute(
        {
            "search": param.query.optional.string.default(""),
            "category": param.query.optional.ofType(
                getEnumValueSerializer(
                    (() => {
                        const educationalResourceCategories = [
                            "step by step with the datalab",
                            "statistics with R",
                            "datascience with R and Python",
                        ] as const;

                        assert<
                            Equals<
                                EducationalResourceCategory, 
                                typeof educationalResourceCategories[number]
                            >
                        >();

                        return educationalResourceCategories;
                    })(),
                ),
            ),
            "path": param.query.optional
                .ofType(
                    id<ValueSerializer<string[]>>({
                        "parse": raw => {
                            try {
                                return JSON.parse(raw) as string[];
                            } catch {
                                return noMatch;
                            }
                        },
                        "stringify": value => JSON.stringify(value),
                    }),
                )
                .default([]),
        },
        () => "/documentation",
    ),

    "datalab": defineRoute("/datalab"),
    "news": defineRoute("/actualites"),
    "collaboration": defineRoute("/collaboration"),
    "contribute": defineRoute("/contribuer"),
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, useRoute, routes } = createRouter(
    { "scrollToTop": false },
    routeDefs,
);
