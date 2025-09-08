import { memo, type ReactNode } from "react";
import { Text } from "onyxia-ui/Text";
import { tss } from "ui/tss";
import { routes } from "ui/routes";
import { GlHeader } from "gitlanding/GlHeader";
import { useDomRect } from "powerhooks/useDomRect";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, useLang } from "ui/i18n";
import { LanguageSelect } from "onyxia-ui/LanguageSelect";
import { GlobalStyles } from "tss-react";
import { joinSlackUrl } from "ui/CONSTANTS";
import { useRoute } from "ui/routes";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SchoolIcon from "@mui/icons-material/School";
import { Icon, type IconProps } from "onyxia-ui/Icon";
import onyxiaSvgUrl from "ui/assets/svg/logo.svg";
import slackSvgUrl from "ui/assets/svg/slack.svg";
import openWebUiSvgUrl from "ui/assets/svg/open-webui.svg";
import { breakpointsValues } from "onyxia-ui";

export type Props = {
    className?: string;
    isRetracted: boolean | undefined;
};

export const AppHeader = memo((props: Props) => {
    const { className, isRetracted } = props;

    const route = useRoute();

    const { t } = useTranslation({ AppHeader });
    const { lang, setLang } = useLang();

    const {
        ref,
        domRect: { height: headerHeight },
    } = useDomRect();

    const { classes, theme, cx, css } = useStyles({
        isRetracted: isRetracted ?? false,
        headerHeight,
    });

    return (
        <div ref={ref}>
            <GlHeader
                classes={{
                    root: cx(classes.root, className),
                    linkAndButtonWrapper: css({ gap: theme.spacing(3) }),
                }}
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
                                <div key={1} style={{ width: theme.spacing(2) }} />,
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
                links={(() => {
                    const renderLabel = (params: {
                        text: ReactNode;
                        icon: IconProps["icon"];
                        iconClassName: string | undefined;
                        isExternal: boolean;
                    }) => {
                        const { text, icon, iconClassName, isExternal } = params;
                        return (
                            <>
                                <Icon
                                    className={iconClassName}
                                    icon={icon}
                                    size="small"
                                />{" "}
                                {text}
                                {isExternal && (
                                    <Icon
                                        icon={OpenInNewIcon}
                                        className={css({
                                            fontSize: "inherit",
                                            width: "0.7em",
                                            height: "0.7em",
                                        })}
                                    />
                                )}
                            </>
                        );
                    };

                    return [
                        {
                            label: renderLabel({
                                text: t("trainings and tutorials"),
                                icon: SchoolIcon,
                                isExternal: false,
                                iconClassName: css({
                                    position: "relative",
                                    top: 2,
                                }),
                            }),
                            ...routes.catalog().link,
                            isActive: route.name === "catalog",
                        },
                        {
                            label: renderLabel({
                                text: t("the onyxia datalab"),
                                icon: onyxiaSvgUrl,
                                isExternal: true,
                                iconClassName: css({
                                    position: "relative",
                                    width: "1.2em",
                                    height: "1.2em",
                                }),
                            }),
                            href: "https://datalab.sspcloud.fr",
                        },
                        {
                            label: renderLabel({
                                text: "AI Chat",
                                icon: openWebUiSvgUrl,
                                isExternal: true,
                                iconClassName: css({
                                    position: "relative",
                                    top:
                                        theme.windowInnerWidth < breakpointsValues.md
                                            ? undefined
                                            : 1,
                                }),
                            }),
                            href: "https://llm.lab.sspcloud.fr/auth?redirect=%2F",
                        },
                        {
                            label: renderLabel({
                                text: t("slack community"),
                                icon: slackSvgUrl,
                                isExternal: true,
                                iconClassName: css({}),
                            }),
                            href: joinSlackUrl,
                        },
                    ];
                })()}
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
    .create(({ theme, isRetracted, headerHeight }) => ({
        root: {
            transition: "margin-top 250ms",
            "margin-top": isRetracted ? -headerHeight : 0,
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(0),
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

const { i18n } = declareComponentKeys<
    "trainings and tutorials" | "the onyxia datalab" | "slack community" | "platform"
>()({ AppHeader });

export type I18n = typeof i18n;
