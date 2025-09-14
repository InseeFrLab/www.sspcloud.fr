import { tss } from "ui/tss";
import { declareComponentKeys } from "i18nifty";
import { breakpointsValues } from "ui/theme";
import { routes } from "ui/routes";
import { GlHero } from "gitlanding/GlHero";
import documentationWebpUrl from "ui/assets/illustrations/documentation.webp";
import datalabWebpUrl from "ui/assets/illustrations/datalab.webp";
import { GlArticle } from "gitlanding/GlArticle";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
import { Markdown } from "ui/shared/Markdown";
import { useTranslation } from "ui/i18n";
import { MetricsCards } from "./MetricsCards";

export default function Home() {
    const { t } = useTranslation({ Home });
    const { t: t_AppHeader } = useTranslation("AppHeader");

    const { classes, cx, css, theme } = useStyles({
        linkToSubSectionText: t("whatsNeeded"),
    });

    const { windowInnerHeight, windowInnerWidth } = useWindowInnerSize();

    const isPortraitOrientation = windowInnerWidth < windowInnerHeight;

    return (
        <>
            <div
                className={
                    isPortraitOrientation
                        ? undefined
                        : css({
                              height: windowInnerHeight,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                          })
                }
            >
                <GlHero
                    title={t("title")}
                    subTitle={t("subtitle")}
                    hasLinkToSectionBellow={false}
                    illustration={{
                        type: "image",
                        src: documentationWebpUrl,
                        hasShadow: false,
                    }}
                    classes={{
                        root: css({ paddingBottom: 0 }),
                        illustrationWrapper: classes.heroImage,
                        textAndImageWrapper: classes.heroImageAndTextWrapper,
                        linkToSectionBelowWrapper: classes.linkToSubSection,
                        title: classes.title,
                        textWrapper: classes.textWrapper,
                        subtitle: classes.subtitle,
                    }}
                />
            </div>
            <MetricsCards
                className={isPortraitOrientation ? undefined : css({ marginTop: 0 })}
            />
            <GlArticle
                title={t("presentationSectionTitle")}
                body={<Markdown>{t("presentationSectionParagraph")}</Markdown>}
                buttonLabel={t_AppHeader("trainings and tutorials")}
                buttonLink={routes.catalog().link}
                illustration={{
                    type: "image",
                    src: datalabWebpUrl,
                    hasShadow: false,
                }}
                hasAnimation={true}
                classes={{
                    aside: cx(classes.articleImage, classes.aboutImage),
                    root: classes.article,
                    button: css({ marginTop: theme.spacing(4) }),
                    article: classes.glArticle,
                }}
            />
        </>
    );
}

const useStyles = tss
    .withParams<{
        linkToSubSectionText: string;
    }>()
    .withName({ Home })
    .create(({ theme, linkToSubSectionText }) => ({
        heroImage: {
            position: "relative",
            maxWidth: 1000,
            minWidth: "unset",
            ...(theme.windowInnerWidth >= breakpointsValues.xl
                ? {
                      transform: `scale(1.2)`,
                      left: -theme.spacing(7),
                  }
                : {}),
            ...(theme.windowInnerWidth >= breakpointsValues["lg+"]
                ? {
                      top: -theme.spacing(7),
                      ...(theme.windowInnerWidth < 1650
                          ? {
                                transform: "scale(1.1)",
                                left: -theme.spacing(5),
                                top: -theme.spacing(5),
                            }
                          : {}),
                  }
                : {}),
            ...(theme.windowInnerWidth >= breakpointsValues.lg
                ? {
                      top: -theme.spacing(3),
                      transform: "scale(1.1)",
                      left: -theme.spacing(6),
                  }
                : {}),
            ...(theme.windowInnerWidth >= breakpointsValues.md
                ? {
                      top: -theme.spacing(6),
                      transform: "scale(1.1)",
                      left: -theme.spacing(5),
                      ...(theme.windowInnerWidth < 1100
                          ? {
                                top: -theme.spacing(3),
                            }
                          : {}),
                  }
                : {}),
        },
        heroImageAndTextWrapper: {
            alignItems: "flex-start",
            minHeight: 0,
            justifyContent: "space-between",
        },
        article: {
            justifyContent: "space-between",
        },
        glArticle: {
            flex: theme.windowInnerWidth >= breakpointsValues.lg ? 1 : undefined,
        },
        linkToSubSection: {
            position: "relative",
            top: -theme.spacing(6),
            display: "flex",
            ":before": {
                content: `"${linkToSubSectionText}"`,
                ...theme.typography.variants.subtitle.style,
                marginBottom: theme.spacing(3),
            },
            flexDirection: "column",
            alignItems: "center",
        },
        articleImage: {
            maxWidth: 950,
        },
        aboutImage: {
            marginLeft: theme.windowInnerWidth < breakpointsValues.md ? undefined : 100,
        },
        textWrapper: {
            marginRight: 0,
            zIndex: 2,
        },
        title: {
            width: (() => {
                if (theme.windowInnerWidth >= breakpointsValues.xl) {
                    return 800;
                }

                if (theme.windowInnerWidth >= breakpointsValues["lg+"]) {
                    return 650;
                }

                if (theme.windowInnerWidth >= breakpointsValues.lg) {
                    return 550;
                }

                if (theme.windowInnerWidth >= breakpointsValues.md) {
                    return 500;
                }

                return "none";
            })(),
        },
        subtitle: {
            width: (() => {
                if (
                    theme.windowInnerWidth < breakpointsValues["lg+"] &&
                    theme.windowInnerWidth >= breakpointsValues.md
                ) {
                    return 400;
                }

                return "none";
            })(),
        },
    }));

const { i18n } = declareComponentKeys<
    | "title"
    | "subtitle"
    | "whatsNeeded"
    | "presentationSectionParagraph"
    | "presentationSectionTitle"
>()({ Home });

export type I18n = typeof i18n;
