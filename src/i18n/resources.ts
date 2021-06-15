import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";

import { Home } from "pages/Home";

export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

const reflectedI18nSchemes = {
    [symToStr({ Home })]: Reflect<Home.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = { [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]> };

export type SupportedLanguage = "en" | "fr";


export const resources = id<Record<SupportedLanguage, Translations>>({
    "en": {
        "Home": {
            "accept": "accept",
            "hello person": "Hello {{person}}"
        }
    },
    "fr": {
        /* spell-checker: disable */
        "Home": {
            "accept": "accept",
            "hello person": "Bonjour {{person}}"
        }
        /* spell-checker: enable */
    }

});
