import { tss } from "theme";
import type { Language, LocalizedString } from "i18n";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { assert, type Equals } from "tsafe/assert";
import { useMemo, Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";

type Props = {
    className?: string;
    lang: Language;
    localizedString: LocalizedString;
    onChangeLanguage: (lang: Language) => void;
};

export function Flags(props: Props) {

    const { className, lang, localizedString, onChangeLanguage } = props;

    const localizedStringAvailableLanguages = useMemo(
        () => 
            getLocalizedStringAvailableLanguages(localizedString)
                .sort((a, b) => a === lang ? -1 : b === lang ? 1 : 0),
        [localizedString, lang]
    );

    const { classes, cx, css } = useStyles();

    return (
        <span className={cx(classes.root, className)}>
            {
                localizedStringAvailableLanguages.map((lang_i, i, arr) => ({
                    lang_i,
                    "isLast": i === arr.length - 1
                })).map(({ lang_i, isLast }) => (
                    <Fragment key={lang_i}>
                        <Tooltip
                            title={(()=>{
                                switch(lang_i){
                                    case "en": return `This resource is ${lang_i === lang ? "" : "available "}in English`;
                                    // cspell: disable
                                    case "fr": return `Cette ressource est ${lang_i === lang ? "" : "disponible"} en français`;
                                    // cspell: enable
                                }
                                assert<Equals<typeof lang_i, never>>();
                            })()}
                        >
                        <span
                            className={cx(classes.flagSpan, css({
                                "cursor": lang === lang_i ? "default" : "pointer",
                            }))}
                            onClick={
                                lang === lang_i ? 
                                    undefined : 
                                    (() => onChangeLanguage(lang_i))
                            }
                        >
                            {flagEmojiByLanguage[lang_i]}
                        </span>
                        </Tooltip>
                        {!isLast && (
                            <>
                                {" "}<span className={classes.divider}>|</span>{" "}
                            </>
                        )}
                    </Fragment>
                ))
            }
        </span>
    );
}


const useStyles = tss
    .withName({ Flags })
    .create(({ theme }) => ({
        "root": {
            "display": "inline-block",
            //"position": "relative",
            //"top": 8
        },
        "flagSpan": {
            "fontSize": theme.typography.rootFontSizePx * 1.8,
            "display": "inline-block",
            "position": "relative",
            "top": 4
        },
        "divider": {
            "fontSize": theme.typography.rootFontSizePx * 1.2,
        }
    }));


const flagEmojiByLanguage: Record<Language, string> = {
    "fr": "🇫🇷",
    "en": "🇬🇧",
};

const NON_LOCALIZED_STRING_ASSUMED_LANGUAGE: Language = "fr";

function getLocalizedStringAvailableLanguages(localizedString: LocalizedString): Language[] {

    if (typeof localizedString === "string") {
        return [NON_LOCALIZED_STRING_ASSUMED_LANGUAGE];
    }

    const localizedStringAvailableLanguages: Language[] = [];

    for (const lang of ["fr", "en"] as const) {

        assert<Equals<typeof lang, Language>>();

        const { resolveLocalizedStringDetailed } = createResolveLocalizedString<Language>({
            "currentLanguage": lang,
            "fallbackLanguage": "en",
            "labelWhenMismatchingLanguage": true
        });

        const { langAttrValue } = resolveLocalizedStringDetailed(localizedString);

        if (langAttrValue !== undefined) {
            continue;
        }

        localizedStringAvailableLanguages.push(lang);

    }

    return localizedStringAvailableLanguages;

}
