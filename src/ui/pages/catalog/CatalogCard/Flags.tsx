import { tss } from "ui/tss";
import type { Language } from "ui/i18n";
import { assert, type Equals } from "tsafe/assert";
import { Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useLang } from "ui/i18n";

type Props = {
    className?: string;
    availableInLanguages: Language[];
};

export function Flags(props: Props) {
    const { className, availableInLanguages } = props;

    const { classes, cx, css } = useStyles();

    const { lang, setLang } = useLang();

    return (
        <span className={cx(classes.root, className)}>
            {availableInLanguages
                .map((lang_i, i, arr) => ({
                    lang_i,
                    isLast: i === arr.length - 1,
                }))
                .map(({ lang_i, isLast }) => (
                    <Fragment key={lang_i}>
                        <Tooltip
                            title={(() => {
                                switch (lang_i) {
                                    case "en":
                                        return `This resource is ${lang_i === lang ? "" : "available "}in English`;
                                    // cspell: disable
                                    case "fr":
                                        return `Cette ressource est ${lang_i === lang ? "" : "disponible"} en français`;
                                    // cspell: enable
                                }
                                assert<Equals<typeof lang_i, never>>();
                            })()}
                        >
                            <span
                                className={cx(
                                    classes.flagSpan,
                                    css({
                                        cursor: lang === lang_i ? "default" : "pointer",
                                    }),
                                )}
                                onClick={
                                    lang === lang_i
                                        ? undefined
                                        : () => setLang(lang_i)
                                }
                            >
                                {flagEmojiByLanguage[lang_i]}
                            </span>
                        </Tooltip>
                        {!isLast && (
                            <>
                                {" "}
                                <span className={classes.divider}>|</span>{" "}
                            </>
                        )}
                    </Fragment>
                ))}
        </span>
    );
}

const useStyles = tss.withName({ Flags }).create(({ theme }) => ({
    root: {
        display: "inline-block",
        //"position": "relative",
        //"top": 8
    },
    flagSpan: {
        fontSize: theme.typography.rootFontSizePx * 1.8,
        display: "inline-block",
        position: "relative",
        top: 4,
    },
    divider: {
        fontSize: theme.typography.rootFontSizePx * 1.2,
    },
}));

const flagEmojiByLanguage: Record<Language, string> = {
    fr: "🇫🇷",
    en: "🇬🇧",
};

