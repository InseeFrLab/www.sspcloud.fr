

import { render } from "react-dom";
import { ThemeProvider, useTheme } from "./theme";
import { overwriteTheme } from "gitlanding";
import { GlRoot } from "gitlanding";
import type { GlRootProps } from "gitlanding";
import headerImgUrl from "./assets/header/header.png";
import twitterSvgUrl from "./assets/svg/twitter.svg";
import contributionImgUrl from "./assets/illustrations/contribution.png";
import { I18nProvider } from "i18n/I18nProvider";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
import { breakpointsValues } from "onyxia-ui/lib";

overwriteTheme({ ThemeProvider, useTheme });

/* spell-checker: disable */
export const props: GlRootProps = {
	"header": {

		"title": {
			"type": "markdown",
			"markdown": `Communauté SSP Cloud`
		},
		"menuItems": [
			{
				"name": "Documentation",
				"link": { "href": "#" },
			},
			{
				"name": "Le datalab",
				"link": { "href": "#" },
			},
			{
				"name": "Actualités et projets",
				"link": { "href": "#" },
			},
			{
				"name": "Collaboration",
				"link": { "href": "#" },

			},
			{
				"name": "Contribuer",
				"link": { "href": "#" },
			},

		]
	},
	"hero": {

		"image": {
			"url": headerImgUrl,
		},
		"titleMd": "Espace communautaire pour la statistique publique.",
		"subTitleMd": `
Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communauté du SSP Cloud.
`,
		"linkToMainSection": {
			"title": "Ce dont vous avez besoin :"
		},
	},

	"mainSection": {
		"sections": [
			{

				"article": {
					"title": "Quelques mots à propos d’Onyxia",
					"paragraphMd": `
Nulla convallis ligula erat, eget suscipit erat luctus quis. Quisque nec augue sagittis, dignissim enim sit amet, gravida felis. Nulla et eleifend velit integer pulvinar nibh. 

Proin sed tellus eu turpis porttitor feugiat ac quis est. Nullam metus tellus, gravida ut velit quis, accumsan commodo risus. Etiam nec metus id elit hendrerit suscipit molestie leo tempus porta nulla suscipit ante sit.
                    
                    `,
					"button": {
						"title": "En savoir plus",
						"href": ""
					}
				},
				"illustration": {

					"type": "image",
					"url": contributionImgUrl


				},
				"cardSection": {
					"cards": [
						{
							"type": "normal",
							"heading": {
								"title": "18",
								"iconUrls": [twitterSvgUrl]
							},
							"subHeading": "services mis à disposition",
							"button": {
								"link": { "href": "#" },
								"title": "Découvrir le catalogue"
							}
						},
						{
							"type": "normal",
							"heading": {
								"title": "18",
								"iconUrls": [twitterSvgUrl]
							},
							"subHeading": "services mis à disposition",
							"button": {
								"link": { "href": "#" },
								"title": "Découvrir le catalogue"
							}
						},
						{
							"type": "normal",
							"heading": {
								"title": "18",
								"iconUrls": [twitterSvgUrl]
							},
							"subHeading": "services mis à disposition",
							"button": {
								"link": { "href": "#" },
								"title": "Découvrir le catalogue"
							}
						},
					]
				}
			},
			{
				"title": "La collaboration au sein de la communauté",
				"cardSection": {
					"cards": [
						{
							"type": "normal",
							"href": "",
							"heading": {
								"iconUrls": [twitterSvgUrl, twitterSvgUrl, twitterSvgUrl, twitterSvgUrl],
							},

							"description": {
								"title": "Gitlab et Github",
								"paragraph": "Travail collaboratif via l’utilisation d’un système de contrôle de version et orchestration des processus de traitement de données."
							}
						}
					],
				},

				"article": {
					"title": "Comment contribuer à la communauté ?",
					"paragraphMd": `
Nulla convallis ligula erat, eget suscipit erat luctus quis. Quisque nec augue sagittis, dignissim enim sit amet, gravida felis. Nulla et eleifend velit integer pulvinar nibh. 

Proin sed tellus eu turpis porttitor feugiat ac quis est. Nullam metus tellus, gravida ut velit quis, accumsan commodo risus. Etiam nec metus id elit hendrerit suscipit molestie quis mauris. Aliquam quis nunc ac purus placerat rhoncus. Vestibulum semper quis leo tempus porta nulla suscipit ante sit.
`,
					"button": {
						"title": "Contribuer",
						"href": ""
					},

				},
				"illustration": {
					"type": "image",
					"url": contributionImgUrl
				}
			}
		]
	},

	"cardSection": {
		"title": "Les dernières actualités et projets",
		"cards": [
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "black"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}
			},
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "blue"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}

			},
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "yellow"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}
			},
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "blue"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}
			},
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "purpule"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}

			},
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "black"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}

			},
			{
				"type": "variant",
				"footer": {
					"title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
					"subTitle": "Suarez Castillo Milena",
					"date": "01/02/2021"
				},
				"background": {
					"type": "color",
					"color": "#D5F2E1"

				},
				"button": {
					"link": { "href": "#" },
					"title": "Projet",
					"backgroundColor": "#D5F2E1",
					"color": "black"
				}

			},

		]
	}
}
/* spell-checker: enable */

function Root() {

	const { windowInnerWidth } = useWindowInnerSize();

	return (
		<I18nProvider>
			<ThemeProvider
				zoomProviderReferenceWidth={
					windowInnerWidth > breakpointsValues["lg"] ?
						breakpointsValues["xl"] : undefined
				}
			>
				<GlRoot {...props} />
			</ThemeProvider>
		</I18nProvider>
	);

}

render(
	<Root />,
	document.getElementById("root")
);

