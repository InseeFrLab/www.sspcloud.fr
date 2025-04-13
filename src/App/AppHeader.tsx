import { memo } from "react";
import { Text } from "onyxia-ui/Text";
import { tss } from "tss";

import { routes } from "router";
import { GlHeader } from "gitlanding/GlHeader";
import { useDomRect } from "powerhooks/useDomRect";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, useLang } from "i18n";
//import { LanguageSelect } from "../theme";
import { LanguageSelect } from "onyxia-ui/LanguageSelect";
import { GlobalStyles } from "tss-react";
import { joinSlackUrl } from "env";

export type Props = {
    className?: string;
    isRetracted?: boolean;
};

export const AppHeader = memo((props: Props) => {
    const { className, isRetracted } = props;

    const { t } = useTranslation({ AppHeader });
    const { lang, setLang } = useLang();

    const {
        ref,
        domRect: { height: headerHeight },
    } = useDomRect();

    const { classes, theme, cx } = useStyles({
        isRetracted: isRetracted ?? false,
        headerHeight,
    });

    return (
        <div className={cx(classes.root, className)} ref={ref}>
            <GlHeader
                title={
                    <a className={classes.titleWrapper} {...routes.home().link}>
                        {(() => {
                            const out = [
                                <Text
                                    key={0}
                                    typo="section heading"
                                    className={classes.communityText}
                                >
                                    {t("platform")}
                                </Text>,
                                <div key={1} style={{ width: theme.spacing(3) }} />,
                                <Text
                                    key={2}
                                    typo="section heading"
                                    className={classes.sspCloudText}
                                    color="focus"
                                >
                                    SSP Cloud
                                </Text>,
                            ];

                            if (lang === "en") {
                                return out.reverse();
                            }

                            return out;
                        })()}
                    </a>
                }
                links={[
                    {
                        label: t("trainings and tutorials"),
                        ...routes.documentation().link,
                    },
                    {
                        label: t("the onyxia datalab"),
                        href: "https://datalab.sspcloud.fr",
                    },
                    {
                        label: "AI Chat",
                        href: "https://llm.lab.sspcloud.fr/auth?redirect=%2F",
                    },
                    {
                        label: "Slack community",
                        href: joinSlackUrl,
                    },
                ]}
                customItemEnd={{
                    behaviorOnSmallDevice: "normal",
                    item: (
                        <>
                            <GlobalStyles
                                styles={{
                                    "#language-menu": {
                                        zIndex: 4001,
                                    },
                                }}
                            />
                            <LanguageSelect
                                /*language={lang}
                                onLanguageChange={setLang}
                                variant="big"*/
                                language={lang}
                                onLanguageChange={setLang}
                                variant="big"
                                languagesPrettyPrint={{
                                    en: "English",
                                    fr: "Français",
                                }}
                            />
                        </>
                    ),
                }}
                enableDarkModeSwitch={true}
            />
        </div>
    );
});

const useStyles = tss
    .withParams<{ isRetracted: boolean; headerHeight: number }>()
    .create(({ isRetracted, headerHeight }) => ({
        root: {
            transition: "margin-top 250ms",
            "margin-top": isRetracted ? -headerHeight : 0,
        },
        titleWrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
        },
        sspCloudText: {
            fontWeight: 500,
        },
        communityText: {
            fontWeight: 600,
        },
    }));

export const { i18n } = declareComponentKeys<
    "trainings and tutorials" | "the onyxia datalab" | "contribute" | "platform"
>()({ AppHeader });
