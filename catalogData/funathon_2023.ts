import type { EducationalResourceDirectory } from "./__index";
import data_science_png_url from "./_assets/data_science.png";
import observable_png_url from "./_assets/observable.png";
import r_svg_url from "./_assets/r.svg";
import python_jpg_url from "./_assets/python.jpg";

export const funathon_2023: EducationalResourceDirectory = {
    name: "Funathon 2023",
    abstract:
        "Des tutoriels pour découvrir et pratiquer la data science autour du thème _'Du champ à l'assiette'_",
    imageUrl: data_science_png_url,
    parts: [
        {
            name: "150 ans d'agriculture en France",
            abstract: "Initiation à la dataviz sur séries longues avec Observable.",
            authors: ["Inseefrlab"],
            types: ["Tutoriel"],
            tags: ["discover", "consolidate"],
            category: "funathon",
            imageUrl: observable_png_url,
            articleUrl: "https://github.com/InseeFrLab/funathon2023_sujet1/tree/main",
            deploymentUrl:
                "https://observablehq.com/@francoissemecurbe/le-recensement-agricole-de-1852",
        },
        {
            name: "Explorer la géographie des cultures agricoles françaises",
            abstract: "Initiation à l'analyse spatiale et à la dataviz avec R et PostGIS",
            authors: ["Inseefrlab"],
            types: ["Tutoriel"],
            tags: ["discover", "consolidate"],
            category: "funathon",
            imageUrl: r_svg_url,
            articleUrl: "https://inseefrlab.github.io/funathon2023_sujet2/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet2%2Fmain%2Finit.sh%C2%BB&onyxia.friendlyName=%C2%ABSujet%202%20Funathon%C2%BB",
        },
        {
            name: "Explorer les habitudes alimentaires de nos compatriotes",
            abstract:
                "Initiation à l'analyse exploratoire de données, au clustering et au machine learning avec R ou Python",
            authors: ["Inseefrlab"],
            types: ["Tutoriel"],
            tags: ["discover", "consolidate"],
            category: "funathon",
            imageUrl: data_science_png_url,
            parts: [
                {
                    name: "Tutoriel en Python",
                    abstract: "",
                    authors: ["Inseefrlab"],
                    types: ["Tutoriel"],
                    tags: ["discover", "consolidate"],
                    category: "funathon",
                    imageUrl: python_jpg_url,
                    deploymentUrl:
                        "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet3%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABPython%C2%BB",
                },
                {
                    name: "Tutoriel en R",
                    abstract: "",
                    authors: ["Inseefrlab"],
                    types: ["Tutoriel"],
                    tags: ["discover", "consolidate"],
                    category: "funathon",
                    imageUrl: r_svg_url,
                    deploymentUrl:
                        "https://datalab.sspcloud.fr/launcher/ide/jupyter-r?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet3%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABR%C2%BB",
                },
            ],
        },
        {
            name: "Mon application Yuka",
            abstract:
                "Un parcours guidé pour créer une application de lecture de code barre à la manière de Yuka avec Python.",
            authors: ["Inseefrlab"],
            types: ["Tutoriel"],
            tags: ["discover", "consolidate"],
            category: "funathon",
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=false&kubernetes.role=%C2%ABadmin%C2%BB&networking.user.enabled=true&git.cache=%C2%AB36000%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet4%2Fmain%2Finit.sh%C2%BB&git.token=%C2%AB%C2%BB&git.repository=%C2%ABhttps%3A%2F%2Fgithub.com%2FInseeFrLab%2Ffunathon2023_sujet4.git%C2%BB",
        },
        {
            name: "Analyse textuelle des commentaires clients de restaurants",
            abstract:
                "Analyse de sentiments à partir de commentaires clients scrapés sur Trustpilot avec Python.",
            authors: ["Inseefrlab"],
            types: ["Tutoriel"],
            tags: ["discover", "consolidate"],
            category: "funathon",
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet5%2Fmain%2Finit.sh%C2%BB",
        },
        {
            name: "A la recherche de l'alimentation perdue",
            abstract:
                "Traitement du langage naturel : rechercher toutes les références à des aliments dans l'oeuvre de Proust.",
            authors: ["Inseefrlab"],
            types: ["Tutoriel"],
            tags: ["discover", "consolidate"],
            category: "funathon",
            imageUrl: python_jpg_url,
            articleUrl: "https://github.com/InseeFrLab/funathon2023_sujet6",
        },
    ],
};
