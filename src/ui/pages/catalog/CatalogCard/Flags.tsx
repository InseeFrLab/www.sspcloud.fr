import { useMemo, type JSX } from "react";
import { tss } from "ui/tss";
import { type Language } from "ui/i18n";
import { useLang } from "ui/i18n";
import { exclude } from "tsafe";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { elementsToSentence } from "ui/shared/elementsToSentence";
import { Text } from "onyxia-ui/Text";
import Link from "@mui/material/Link";
import { useRoute } from "ui/routes";

type Props = {
    className?: string;
    availableInLanguages: Language[];
};

export function Flags(props: Props) {
    const { className, availableInLanguages } = props;

    const { classes, cx } = useStyles();

    const { lang } = useLang();

    const { t } = useTranslation({ Flags });

    if (availableInLanguages.length === 1 && lang === availableInLanguages[0]) {
        return null;
    }

    return (
        <Text typo="body 1" className={cx(classes.root, className)}>
            {(() => {
                if (availableInLanguages.length === 1) {
                    const [availableInLanguage] = availableInLanguages;

                    return t("only available in x", {
                        x: <LanguageLink lang={availableInLanguage} />,
                    });
                }

                const x = elementsToSentence({
                    lang,
                    nodes: availableInLanguages
                        .filter(exclude(lang))
                        .map(lang => <LanguageLink lang={lang} />),
                });

                if (availableInLanguages.includes(lang)) {
                    return t("also available in x", { x });
                }

                return t("available in x", { x });
            })()}
        </Text>
    );
}

function LanguageLink(props: { lang: Language }) {
    const { lang } = props;
    const { t } = useTranslation({ Flags });
    const { setLang } = useLang();
    const route = useRoute();

    const href = useMemo(() => {
        const urlObj = new URL(`${location.origin}${route.href}`);

        urlObj.searchParams.set("lang", lang);

        return urlObj.href;
    }, [route]);

    return (
        <Link
            href={href}
            onClick={e => {
                e.preventDefault();
                setLang(lang);
            }}
        >
            {t(lang)}
        </Link>
    );
}

const useStyles = tss.withName({ Flags }).create(({ theme }) => ({
    root: {
        display: "inline-block",
        color: theme.colors.useCases.typography.textSecondary,
        fontStyle: "italic",
    },
}));

const { i18n } = declareComponentKeys<
    | Language
    | {
          K: "only available in x";
          P: { x: JSX.Element };
          R: JSX.Element;
      }
    | {
          K: "also available in x";
          P: { x: JSX.Element };
          R: JSX.Element;
      }
    | {
          K: "available in x";
          P: { x: JSX.Element };
          R: JSX.Element;
      }
>()({ Flags });

export type I18n = typeof i18n;
