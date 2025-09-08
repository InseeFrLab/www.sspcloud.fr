import type { EducationalResource } from "./__index";
import r_svg_url from "./__assets/r.svg";

export const introduction_a_r_pour_les_sciences_sociales: EducationalResource.Collection =
    {
        name: "Introduction à R pour les sciences sociales",
        abstract:
            "Cours d'introduction à R pour des étudiants en sciences sociales quantitatives (économie, géographie, sociologie, etc.) de niveau L3 ou Master.",
        imageUrl: r_svg_url,
        parts: [
            {
                name: "Introduction aux objets de base de R",
                abstract:
                    "Une introduction à la logique du langage R, à ses principes et aux objets de base",
                authors: ["Lino Galiana"],
                tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
                timeRequiredInMinutes: 90,
                imageUrl: r_svg_url,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/r-base.html",
            },
            {
                name: "Manipuler des données avec le tidyverse",
                abstract:
                    "Une introduction à dplyr pour découvrir comment travailler sur un _dataframe_ avec `R`. Les exemples utilisent les données d'inventaire carbone de l'Ademe et les données Filosofi, une base sur les revenus au niveau communal.",
                authors: ["Lino Galiana"],
                tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
                timeRequiredInMinutes: 180,
                imageUrl: r_svg_url,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/r-wrangling.html",
            },
            {
                name: "Manipuler des données spatiales avec sf",
                abstract:
                    "Un chapitre consacré à la présentation de l'écosystème pour travailler sur des données spatiales avec `R` et aux concepts nécessaires pour cela. Les illustrations s'appuient sur les données d'implantation du Vélib dans l'agglomération parisienne.",
                authors: ["Lino Galiana"],
                tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
                timeRequiredInMinutes: 180,
                imageUrl: r_svg_url,
                articleUrl:
                    "https://rgeo.linogaliana.fr/exercises/geospatial-wrangling.html",
            },
            {
                name: "Produire des représentations graphiques avec R",
                abstract:
                    "Un chapitre consacré à la présentation de ggplot, l'incontournable pour faire des graphiques avec `R`. Les exercices d'application s'appuient sur les données de fréquentation des pistes cyclables parisiennes.",
                authors: ["Lino Galiana"],
                tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
                timeRequiredInMinutes: 180,
                imageUrl: r_svg_url,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/ggplot.html",
            },
            {
                name: "Produire des cartes avec R",
                abstract:
                    "Un chapitre consacré à la cartographie, statique (ggplot, mapsf) et réactive (leaflet). Les exemples permettent de produire des cartes de population à plusieurs échelles",
                authors: ["Lino Galiana"],
                timeRequiredInMinutes: 180,
                tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],

                imageUrl: r_svg_url,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/cartography.html",
            },
            {
                name: "Introduction aux publications reproductives avec R et Quarto",
                abstract:
                    "Un chapitre consacré à Quarto, l'écosystème permettant des publications reproductibles mélant de manière harmonieuse code et analyse des résultats.",
                authors: ["Lino Galiana"],
                tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
                timeRequiredInMinutes: 180,

                imageUrl: r_svg_url,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/quarto.html",
            },
        ],
    };
