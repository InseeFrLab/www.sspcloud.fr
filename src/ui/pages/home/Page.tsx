import { useTranslation } from "ui/i18n";
import { tss } from "ui/tss";
import { declareComponentKeys } from "i18nifty";
import { breakpointsValues } from "ui/theme";
import { routes } from "ui/routes";
import { GlHero } from "gitlanding/GlHero";
import heroHeaderPngUrl from "ui/assets/illustrations/heroHeader.png";
import { GlCards } from "gitlanding/GlCards";
import { GlMetricCard } from "gitlanding/GlCards/GlMetricCard";
import SchoolIcon from "@mui/icons-material/School";
import onyxiaSvgUrl from "ui/assets/svg/logo.svg";
import { URLS } from "ui/URLS";
import slackSvgUrl from "ui/assets/svg/slack.svg";
import datalabPngUrl from "ui/assets/illustrations/datalab.png";
import { GlArticle } from "gitlanding/GlArticle";
import { useCoreState } from "core";
import { getCore } from "core";
import { withLoader } from "ui/tools/withLoader";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
import { Button } from "onyxia-ui/Button";
import openWebUiSvgUrl from "ui/assets/svg/open-webui.svg";

const Page = withLoader({
    loader,
    Component: Home,
});

export default Page;

async function loader() {
    const core = await getCore();

    core.functions.metricsDashboard.initialize();
}

function Home() {
    const { t } = useTranslation({ Home });
    const { t: t_AppHeader } = useTranslation("AppHeader");

    const { isReady, metrics } = useCoreState("metricsDashboard", "main");

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
                              height:
                                  windowInnerHeight - theme.typography.rootFontSizePx * 1,
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
                        src: heroHeaderPngUrl,
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
            <GlCards
                className={isPortraitOrientation ? undefined : css({ marginTop: 0 })}
            >
                <GlMetricCard
                    number={isReady ? metrics.educationalResourceCount : undefined}
                    subHeading={t("trainingCard")}
                    button={
                        <Button startIcon={SchoolIcon} {...routes.catalog().link}>
                            {t_AppHeader("trainings and tutorials")}
                        </Button>
                    }
                    isNumberAnimated={true}
                />
                <GlMetricCard
                    number={isReady ? metrics.helmDataSciencePackageCount : 0}
                    subHeading={t("serviceCard")}
                    button={
                        <Button
                            startIcon={onyxiaSvgUrl}
                            doOpenNewTabIfHref={false}
                            href={URLS.getOnyxiaUrl({ page: "catalog" })}
                        >
                            {t_AppHeader("the onyxia datalab")}
                        </Button>
                    }
                    isNumberAnimated={true}
                />
                <GlMetricCard
                    number={1}
                    subHeading={t("AI chat metric description")}
                    button={
                        <Button
                            startIcon={openWebUiSvgUrl}
                            doOpenNewTabIfHref={false}
                            href={URLS.aiChat}
                        >
                            AI Chat
                        </Button>
                    }
                    isNumberAnimated={false}
                />
                <GlMetricCard
                    number={883}
                    subHeading={t("slack metric desc")}
                    button={
                        <Button startIcon={slackSvgUrl} href={URLS.slackUrl}>
                            {t_AppHeader("slack community")}
                        </Button>
                    }
                    isNumberAnimated={true}
                />
            </GlCards>

            <GlArticle
                title={t("presentationSectionTitle")}
                body={t("presentationSectionParagraph")}
                buttonLabel={t_AppHeader("trainings and tutorials")}
                buttonLink={routes.catalog().link}
                illustration={{
                    type: "image",
                    src: datalabPngUrl,
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
    | "serviceCard"
    | "trainingCard"
    | "serviceCardButtonLabel"
    | "presentationSectionParagraph"
    | "presentationSectionTitle"
    | "slack metric desc"
    | "AI chat metric description"
>()({ Home });

export type I18n = typeof i18n;
