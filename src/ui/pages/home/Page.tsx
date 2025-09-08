import { useTranslation } from "ui/i18n";
import { tss } from "ui/tss";
import { declareComponentKeys } from "i18nifty";
import { breakpointsValues } from "ui/theme";
import { routes } from "ui/routes";
import { GlHero } from "gitlanding/GlHero";
import heroHeaderPngUrl from "ui/assets/illustrations/heroHeader.png";
import { GlCards } from "gitlanding/GlCards";
import { GlMetricCard } from "gitlanding/GlCards/GlMetricCard";
import trainingIconUrl from "ui/assets/svg/trainings.svg";
import datalabPngUrl from "ui/assets/illustrations/datalab.png";
import { GlArticle } from "gitlanding/GlArticle";
import catalogIconUrl from "ui/assets/svg/Catalog.svg";
import { useCoreState } from "core";
import { getCore } from "core";
import { withLoader } from "ui/tools/withLoader";
import { useWindowInnerSize } from "powerhooks";

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

    const { isReady, metrics } = useCoreState("metricsDashboard", "main");

    const { classes, cx, css } = useStyles({
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
                              height: "100vh",
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
                    iconUrl={trainingIconUrl}
                    buttonLabel={t("trainingCardButtonLabel")}
                    link={routes.catalog().link}
                    isNumberAnimated={true}
                />
                <GlMetricCard
                    number={isReady ? metrics.helmDataSciencePackageCount : 0}
                    subHeading={t("serviceCard")}
                    iconUrl={catalogIconUrl}
                    buttonLabel={t("serviceCardButtonLabel")}
                    link={{
                        href: "https://datalab.sspcloud.fr/catalog",
                    }}
                    isNumberAnimated={true}
                />
                {/*
                <GlMetricCard
                    number={1}
                    subHeading={"ChatGPT like Model"}
                    iconUrl={catalogIconUrl}
                    buttonLabel={"Try it"}
                    link={{
                        href: "https://datalab.sspcloud.fr/catalog",
                    }}
                    isNumberAnimated={true}
                />
                <GlMetricCard
                    number={883}
                    subHeading={"Members in the Slack Community"}
                    iconUrl={catalogIconUrl}
                    buttonLabel={"Join us"}
                    link={{
                        href: "https://datalab.sspcloud.fr/catalog",
                    }}
                    isNumberAnimated={true}
                />
                */}
            </GlCards>

            <GlArticle
                title={t("presentationSectionTitle")}
                body={t("presentationSectionParagraph")}
                buttonLabel={t("presentationSectionButtonLabel")}
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
    | "trainingCardButtonLabel"
    | "presentationSectionParagraph"
    | "presentationSectionTitle"
    | "presentationSectionButtonLabel"
    | "collaborationCardSectionTitle"
    | "gitlabCardTitle"
    | "gitlabCardParagraph"
    | "gitlabCardButtonLabel"
    | "slackCardTitle"
    | "slackCardParagraph"
    | "slackCardButtonLabel"
    | "mimCardTitle"
    | "mimCardParagraph"
    | "mimCardButtonLabel"
    | "dataVisualCardTitle"
    | "kubernetesCardTitle"
    | "pokemonCardTitle"
    | "webinaireCardTitle"
    | "dataVisualBadgeLabel"
    | "kubernetesBadgeLabel"
    | "pokemonBadgeLabel"
    | "webinaireBadgeLabel"
>()({ Home });

export type I18n = typeof i18n;
