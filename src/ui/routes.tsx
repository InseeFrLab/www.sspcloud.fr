import { createRouter, type Link } from "type-route";
import { routeDefs } from "ui/pages";
export type { Link };

export const { useRoute, getRoute, routes, session } = createRouter(
    {
        baseUrl: import.meta.env.BASE_URL,
    },
    routeDefs,
);
