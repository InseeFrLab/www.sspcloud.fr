import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";
import type { Language } from "./libReExport";

import { App } from "app/App";
import { Home } from "app/pages/Home";
import { Documentation } from "app/pages/Documentation";
import { DocumentationCard } from "app/pages/Documentation/DocumentationCard";
import { FourOhFour } from "app/pages/FourOhFour";

export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

const reflectedI18nSchemes = {
    [symToStr({ App })]: Reflect<App.I18nScheme>(),
    [symToStr({ Home })]: Reflect<Home.I18nScheme>(),
    [symToStr({ Documentation })]: Reflect<Documentation.I18nScheme>(),
    [symToStr({ DocumentationCard })]: Reflect<DocumentationCard.I18nScheme>(),
    [symToStr({ FourOhFour })]: Reflect<FourOhFour.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = {
    [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]>;
};

export const translations = id<Record<Language, Translations>>({
    "fr": {
        /* spell-checker: disable */
        "App": {
            "documentation": "Documentation",
        },
        "Home": {
            "title": "Espace communautaire pour la statistique publique.",
            "subtitle":
                "Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communauté du SSP Cloud.",
        },
        "Documentation": {
            "search": "Rechercher",
            "pageTitle": "Formations et tutoriels",
            "pageHelpTitle":
                "Découvrez et apprenez la datascience à votre rythme en fonction de votre besoin.",
            "pageHelpContent":
                "Suivez des formations ou tutoriels interactifs et guidés et contribuer aux ressources de la communauté.",
            "trainings": "Formations",
            "no documentation found":
                "Aucune documentation ou formation non trouvé",
            "no result found": "Aucun résultat trouvé pour {{forWhat}}",
            "check spelling": `Vérifiez l'orthograph ou essayez d'élargir votre recherche.`,
            "go back": "Retourner à toute les formation",
            "show all": "Afficher tous",
            "datascience with R and Python": "Datascience avec R et Python",
            "statistics with R": "Statitique avec R",
            "step by step with the datalab": "Pas à pas avec le datalab",
            "contributors": "contributeurs",
        },
        "DocumentationCard": {
            "open": "Ouvrir",
            "read": "Lire",
            "run": "Lancer",
            "and": "et",
            "others": "autres",
        },
        "FourOhFour": {
            "not found": "Page non trouvée",
        },
        /* spell-checker: enable */
    },
    "en": {
        "App": {
            "documentation": "Documentation",
        },
        "Home": {
            "title":
                "Community space for the French's public service for the statistics.",
            "subtitle":
                "Here I find and share resources about statistical analysis an Data Science with the SSP Cloud community",
        },
        "Documentation": {
            "search": "Search",
            "pageTitle": "Courses and Tutorials",
            "pageHelpTitle":
                "Discover and learn datascience at your own pace, according to your needs",
            "pageHelpContent":
                "Follow courses or interactive tutorials and contribute to the community resources.",
            "trainings": "Trainings",
            "no documentation found": "No documentation or training found",
            "no result found": "No result found for {{forWhat}}",
            "check spelling": `Check spelling or widen the search`,
            "go back": "Go back",
            "show all": "Show all",
            "datascience with R and Python": "Datascience with R et Python",
            "statistics with R": "Statistics with R",
            "step by step with the datalab": "Step by step with the datalab",
            "contributors": "contributors",
        },
        "DocumentationCard": {
            "open": "Open",
            "read": "Read",
            "run": "Run",
            "and": "and",
            "others": "others",
        },
        "FourOhFour": {
            "not found": "Page not found",
        },
    },
});
