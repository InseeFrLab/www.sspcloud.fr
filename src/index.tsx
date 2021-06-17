import headerImg from "./assets/header/header.png";
import {GlRootProps} from "gitlanding";
import section1 from "./assets/main-section/section1.png";
import section2 from "./assets/main-section/section2.png";
import card1 from "./assets/thumbnail-section/card1.png";
import card2 from "./assets/thumbnail-section/card2.png";
import card3 from "./assets/thumbnail-section/card3.png";
import card4 from "./assets/thumbnail-section/card4.png";
import twitterPngUrl from "./assets/footer/twitter.svg";
import sparkPngUrl from "./assets/cards/Spark.png";
import githubPngUrl from "./assets/cards/Postgre.png";
import bubblePngUrl from "./assets/cards/bubble.png";
import ZeppelinPngUrl from "./assets/cards/Zeppelin.png";
import balloonPngUrl from "./assets/cards/balloon.png";
import plusPngUrl from "./assets/cards/+.png";
import rapidsPngUrl from "./assets/cards/Rapids.png";
import "gitlanding/defaultFont";
import {GlRoot} from "gitlanding";
import ReactDOM from 'react-dom';
import { getThemeApi, overwriteTheme } from "gitlanding/theme";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize"
import { breakpointsValues } from "onyxia-ui/lib";

const { createUseClassNames, ThemeProviderOrId: ThemeProvider, useTheme } = getThemeApi();

overwriteTheme({ ThemeProvider, useTheme });

const { HeaderTitle } = (() => {

    const { useClassNames } = createUseClassNames()(
        theme => ({
            "root": {
                ...theme.typography.h3,
                "margin": 0,
            },
            "span": {
                "color": theme.colors.useCases.typography.textFocus
            }
        })

    )

    const HeaderTitle = () => {

        const { classNames } = useClassNames({});

        return (
            //cspell: disable
            <h3 className={classNames.root}>Communauté <span className={classNames.span}>SSP Cloud</span></h3>
        );

    };

    return { HeaderTitle };


})();

export const props: GlRootProps = {
    "header": {
        "title": HeaderTitle,
        "menuItems": [
            {
                "name": "Documentation",
                "link": {
                    "href": ""
                }
            },
            {
                "name": "Le datalab",
                "link": {
                    "href": ""
                }
            },
            {
                "name": "Actualités et projets",
                "link": {
                    "href": ""
                }
            },
            {
                "name": "Collaboration",
                "link": {
                    "href": ""
                }

            },
            {
                "name": "Contribuer",
                "link": {
                    "href": ""
                }
            },

        ]
    },
    "hero": {

        "image": {
            "url": headerImg,
        },
        "titleMd": "Espace communautaire pour la statistique publique.",
        "subTitleMd": `
Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communauté du SSP Cloud.
`,
        "scrollDownButton": {
            "title": "Ce dont vous avez besoin :"
        },
    },

    "mainSection": {
        "sections": [
            {

                "article": {
                    "title": "Quelques mots à propos d’Onyxia",
                    "paragraphMd": "Onyxia est une plateforme libre service et mutualisée pour le traitement de données statistiques et de datascience. Le datalab met à disposition des statisticiens et des data scientists de l’État un catalogue de services et un environnement de travail simple, rapide et collaboratif, permettant de lancer facilement ces outils et d’y connecter ses données et son code. Au-delà des ressources techniques, le projet représente une opportunité pour les statisticiens publics de découvrir et d’adopter de nouvelles méthodes de travail. Il est aussi utilisé à des fins de formations et d’auto-formations.",
                    "button": {
                        "title": "En savoir plus",
                        "href": ""
                    }
                },
                "illustration": {

                    "type": "image",
                    "url": section1


                },
                "cardSection": {
                    "cards": [
                        {
                            "type": "normal",
                            "heading": {
                                "title": "18",
                                "iconUrls": [twitterPngUrl]
                            },
                            "subHeading": "services mis à disposition",
                            "button": {
                                "link": {
                                    "href": ""
                                },
                                "title": "Découvrir le catalogue"
                            }
                        },
                        {
                            "type": "normal",
                            "heading": {
                                "title": "10",
                                "iconUrls": [twitterPngUrl]
                            },
                            "subHeading": "projets / ateliers du datalab",
                            "button": {
                                "link": {
                                    "href": ""
                                },
                                "title": "Voir les actualités"
                            }
                        },
                        {
                            "type": "normal",
                            "heading": {
                                "title": "23",
                                "iconUrls": [twitterPngUrl]
                            },
                            "subHeading": "formations / tutoriels en ligne ",
                            "button": {
                                "link": {
                                    "href": ""
                                },
                                "title": "Consulter le catalogue"
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
                                "iconUrls": [sparkPngUrl, githubPngUrl]
                            },
                            "description": {
                                "title": "Gitlab et Github",
                                "paragraph": `Travail collaboratif via l’utilisation de forge avec un système de contrôle de
                                version et orchestration des processus de traitement de données.`
                            }

                        },
                        {

                            "type": "normal",
                            "href": "",
                            "heading": {
                                "iconUrls": [rapidsPngUrl]
                            },
                            "description": {
                                "title": "Rejoindre le canal Tchap",
                                "paragraph": "Une communauté active et enthousiaste à votre écoute. N’attendez plus, rejoignez nous pour échanger et posez vos questions !"
                            }
                        },
                        {
                            "type": "normal",

                            "href": "",
                            "heading": {
                                "iconUrls": [bubblePngUrl, ZeppelinPngUrl, balloonPngUrl, plusPngUrl],
                            },

                            "description": {
                                "title": "Outils collaboratifs Mim-Libre",
                                "paragraph": "Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de mutualisation inter-ministérielle."
                            }
                        },

                    ],
                },
                "isRowReverse": true,

                "article": {
                    "title": "Comment contribuer à la communauté ?",
                    "paragraphMd": "Dans le cadre d'une collaboration publique, la plateforme et l’entièreté de son contenu sont disponibles en open-source.  L’ensemble du projet a vocation à être améliorée en fonction de votre expérience et de vos usages, nous comptons sur vos retours et vos contributions en participant au catalogue de service, à la documentation et aux formations mais aussi en présentant vos projets réalisés avec le datalab.",
                    "button": {
                        "title": "Contribuer",
                        "href": ""
                    },


                },

                "illustration": {
                    "type": "image",
                    "url": section2
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
                    "type": "image",
                    "url": card1

                },
                "button": {
                    "link": {
                        "href": ""
                    },
                    "title": "Projet",
                    "backgroundColor": "#D5F2E1",
                    "color": "black"
                }

            },
            {
                "type": "variant",
                "footer": {
                    "title": "Atelier: Initiation à Kubernetes, CI et création d’images",
                    "subTitle": "Olivier Lewitt",
                    "date": "01/02/2021"
                },
                "background": {
                    "type": "image",
                    "url": card2

                },
                "button": {
                    "link": {
                        "href": ""

                    },
                    "title": "Actualité",
                    "backgroundColor": "#E8DAF2",
                    "color": "black"
                }

            },
            {
                "type": "variant",
                "footer": {
                    "title": "ML Flow: Prédire quelles sont les caractéristiques des Pokémons légendaires",
                    "subTitle": "Pengfei Liu",
                    "date": "01/02/2021"
                },
                "background": {
                    "type": "image",
                    "url": card3

                },
                "button": {
                    "link": {
                        "href": ""
                    },
                    "title": "Projet",
                    "backgroundColor": "#D5F2E1",
                    "color": "black"
                }

            },
            {
                "type": "variant",
                "footer": {
                    "title": "L'infrastructure Kubernetes : wébinaire d'introduction",
                    "subTitle": "Olivier Lewitt - Frédéric Comte",
                    "date": "01/02/2021"
                },
                "background": {
                    "type": "image",
                    "url": card4

                },
                "button": {
                    "link": {
                        "href": ""
                    },
                    "title": "Projet",
                    "backgroundColor": "#E8DAF2",
                    "color": "black"
                }

            },

        ]
    }
};

function Root() {

    const { windowInnerWidth } = useWindowInnerSize();

    return (
        <ThemeProvider
            zoomProviderReferenceWidth={
                windowInnerWidth > breakpointsValues["lg"] ?
                    breakpointsValues["xl"] : undefined
            }
        >
            <GlRoot {...props} />
        </ThemeProvider>
    );

}

ReactDOM.render(
    <Root />,
    document.getElementById('root')

);
