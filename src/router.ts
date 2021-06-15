


import { createRouter, defineRoute } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";

export const routeDefs = {
	"home": defineRoute("/"),
	"documentation": defineRoute("/documentation"),
	"datalab": defineRoute("/datalab"),
	"news": defineRoute("/actualités"),
	"collaboration": defineRoute("/collaboration"),
	"contribute": defineRoute("/contribuer")
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, useRoute, routes } = createRouter(
	{ "scrollToTop": false },
	routeDefs
);
