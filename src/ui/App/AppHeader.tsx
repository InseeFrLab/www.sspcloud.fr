import { memo, type ReactNode } from "react";
import { Text } from "onyxia-ui/Text";
import { tss } from "ui/tss";
import { routes } from "ui/routes";
import { GlHeader } from "gitlanding/GlHeader";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, useLang } from "ui/i18n";
import { LanguageSelect } from "onyxia-ui/LanguageSelect";
import { GlobalStyles } from "tss-react";
import { URLS } from "ui/URLS";
import { useRoute } from "ui/routes";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SchoolIcon from "@mui/icons-material/School";
import { Icon, type IconProps } from "onyxia-ui/Icon";
import onyxiaSvgUrl from "ui/assets/svg/logo.svg";
import slackSvgUrl from "ui/assets/svg/slack.svg";
import openWebUiSvgUrl from "ui/assets/svg/open-webui.svg";

export type Props = {
    className?: string;
};

export const AppHeader = memo((props: Props) => {
    const { className } = props;

    const route = useRoute();

    const { t } = useTranslation({ AppHeader });
    const { lang, setLang } = useLang();

    const { classes, theme, cx, css } = useStyles();

    return (
        <GlHeader
            classes={{
                root: cx(classes.root, className),
                linkAndButtonWrapper: css({ gap: theme.spacing(3) }),
                smallDeviceCustomItemsWrapper: classes.smallDeviceCustomItemsWrapper,
                titleWrapper: classes.titleWrapper,
            }}
            title={
                <a className={classes.logoLink} {...routes.home().link}>
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
                        <span
                            className={css({
                                display: "inline-flex",
                                alignItems: "center",
                                gap: theme.spacing(2),
                            })}
                        >
                            <Icon className={iconClassName} icon={icon} size="small" />{" "}
                            <span>
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
                            </span>
                        </span>
                    );
                };

                return [
                    {
                        label: renderLabel({
                            text: t("trainings and tutorials"),
                            icon: SchoolIcon,
                            isExternal: false,
                            iconClassName: undefined,
                        }),
                        ...routes.catalog().link,
                        isActive: route.name === "catalog" || route.name === "document",
                    },
                    {
                        label: renderLabel({
                            text: t("the onyxia datalab"),
                            icon: onyxiaSvgUrl,
                            isExternal: true,
                            iconClassName: css({
                                width: "1.2em",
                                height: "1.2em",
                            }),
                        }),
                        href: URLS.getOnyxiaUrl({ page: "home" }),
                    },
                    {
                        label: renderLabel({
                            text: "AI Chat",
                            icon: openWebUiSvgUrl,
                            isExternal: true,
                            iconClassName: undefined,
                        }),
                        href: URLS.aiChat,
                    },
                    {
                        label: renderLabel({
                            text: t("slack community"),
                            icon: slackSvgUrl,
                            isExternal: true,
                            iconClassName: undefined,
                        }),
                        href: URLS.slackUrl,
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
    );
});

const useStyles = tss.withName({ AppHeader }).create(({ theme }) => ({
    root: {
        paddingBottom: theme.spacing(2),
    },
    smallDeviceCustomItemsWrapper: {
        margin: 0,
    },
    titleWrapper: {
        marginRight: 0,
    },
    logoLink: {
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
