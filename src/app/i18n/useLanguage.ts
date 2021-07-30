import i18n from "i18next";
import type { Language } from "./libReExport";
import LanguageDetector from "i18next-browser-languagedetector";
import { id } from "tsafe/id";
import { createUseGlobalState } from "powerhooks";
import memoize from "memoizee";

export const getBrowserDefaultLanguage = memoize((): Language => {

    i18n.use(LanguageDetector).init({
        "fallbackLng": id<Language>("fr"),
        "resources": id<Record<Language, {}>>({
            "fr": {},
            "en": {}
        }),
    });

    return i18n.language.split("-")[0] as Language;
});

export const { useLanguage, evtLanguage } = createUseGlobalState(
    "language",
    getBrowserDefaultLanguage
);
