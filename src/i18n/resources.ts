import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";

import { Home }  from "pages/Home";
import { FourOhFour } from "pages/FourOhFour";

export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

const reflectedI18nSchemes = {
    [symToStr({ Home })]: Reflect<Home.I18nScheme>(),
    [symToStr({ FourOhFour })]: Reflect<FourOhFour.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = { [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]> };

export type SupportedLanguage = "fr";


export const resources = id<Record<SupportedLanguage, Translations>>({
    "fr": {
        /* spell-checker: disable */
        "Home": {
            "title": "Espace communautaire pour la statistique publique.",
            "subtitle": "Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communauté du SSP Cloud."

        },
        "FourOhFour": {
            "not found": "Page non trouvée"
        }
        /* spell-checker: enable */
    }

});
