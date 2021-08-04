import { useState, useReducer } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";
import type { Language } from "./libReExport";
import { id } from "tsafe/id";
import { I18nextProvider } from "react-i18next";
import { Evt } from "evt";
import { useEvt } from "evt/hooks";
import { useEffectOnValueChange } from "powerhooks";
import { useLanguage } from "./useLanguage";

export type I18nProviderProps = {
    children: React.ReactNode;
};

export function I18nProvider(props: I18nProviderProps) {
    const { children } = props;

    const { language } = useLanguage();

    const [{ i18nInstance }] = useState(() => {
        i18n.use(initReactI18next).init({
            "fallbackLng": id<Language>("fr"),
            "debug": false,
            "interpolation": {
                "escapeValue": false,
            },
            "resources": translations,
        });

        return { "i18nInstance": i18n.cloneInstance({ "lng": language }) };
    });

    useEffectOnValueChange(() => {
        i18nInstance.changeLanguage(language);
    }, [language]);

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEvt(
        ctx =>
            Evt.from(ctx, i18nInstance as any, "languagechange").attach(() =>
                forceUpdate(),
            ),
        [i18nInstance],
    );

    return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
