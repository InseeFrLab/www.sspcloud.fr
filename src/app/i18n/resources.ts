import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";

import { App } from "app/App";
import { Home } from "app/pages/Home";
import { Documentation } from "app/pages/Documentation";
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
    [symToStr({ FourOhFour })]: Reflect<FourOhFour.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = { [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]> };

export type SupportedLanguage = "fr";


export const resources = id<Record<SupportedLanguage, Translations>>({
    "fr": {
        /* spell-checker: disable */
        "App": {
            "documentation": "Documentation"
        },
        "Home": {
            "title": "Espace communautaire pour la statistique publique.",
            "subtitle": "Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communauté du SSP Cloud."

        },
        "Documentation": {
            "search": "Rechercher",
            "pageTitle": "Documentations et formations",
            "pageHelpTitle": "Découvrez et apprenez la datascience à votre rythme en fonction de votre besoin.",
            "pageHelpContent": "Suivez des formations ou tutoriels interactifs et guidés et contribuer aux ressources de la communauté.",
            "no documentation found": "Aucune documentation ou formation non trouvé",
            "no result found": "Aucun résultat trouvé pour {{forWhat}}",
            "check spelling": `Vérifiez que le nom du service est correctement 
            orthographié ou essayez d'élargir votre recherche.`,
            "go back": "Retourner à toute les formation",
        },
        "FourOhFour": {
            "not found": "Page non trouvée"
        }
        /* spell-checker: enable */
    }

});
