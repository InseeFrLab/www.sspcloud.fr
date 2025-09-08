import { useTranslation } from "ui/i18n";
import { tss } from "ui/tss";
import { declareComponentKeys } from "i18nifty";
import { breakpointsValues, getIconUrlByName } from "ui/theme";
import { routes } from "ui/routes";
import { GlHero } from "gitlanding/GlHero";
import heroHeaderPngUrl from "ui/assets/illustrations/heroHeader.png";
import { GlCards } from "gitlanding/GlCards";
import { GlMetricCard } from "gitlanding/GlCards/GlMetricCard";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import trainingIconUrl from "ui/assets/svg/trainings.svg";
import datalabPngUrl from "ui/assets/illustrations/datalab.png";
import ballonPngUrl from "ui/assets/collaborative_tools/balloon.png";
import drawioPngUrl from "ui/assets/collaborative_tools/drawio.png";
import githubPngUrl from "ui/assets/collaborative_tools/github.png";
import gitlabPngUrl from "ui/assets/collaborative_tools/gitlab.png";
import plusPngUrl from "ui/assets/collaborative_tools/+.png";
import rocketPngUrl from "ui/assets/collaborative_tools/rocket-chat.png";
import slackPngUrl from "ui/assets/collaborative_tools/slack.png";
import contributionPngUrl from "ui/assets/illustrations/contribution.png";
import { GlArticle } from "gitlanding/GlArticle";
import catalogIconUrl from "ui/assets/svg/Catalog.svg";
import { joinSlackUrl } from "ui/CONSTANTS";
import { useCoreState } from "core";
import { getCore } from "core";
import { withLoader } from "ui/tools/withLoader";

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

    const { classes, cx } = useStyles({
        linkToSubSectionText: t("whatsNeeded"),
    });

    return (
        <>
            <GlHero
                title={t("title")}
                subTitle={t("subtitle")}
                illustration={{
                    type: "image",
                    src: heroHeaderPngUrl,
                    hasShadow: false,
                }}
                hasLinkToSectionBellow
                classes={{
                    illustrationWrapper: classes.heroImage,
                    textAndImageWrapper: classes.heroImageAndTextWrapper,
                    linkToSectionBelowWrapper: classes.linkToSubSection,
                    title: classes.title,
                    textWrapper: classes.textWrapper,
                    subtitle: classes.subtitle,
                }}
            />

            <div id="card-section">
                <GlCards>
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
                    <GlMetricCard
                        number={7}
                        subHeading={t("projectCard")}
                        iconUrl={getIconUrlByName("Biotech")}
                        buttonLabel={t("projectCardButtonLabel")}
                        link={{
                            href: "https://cros.ec.europa.eu/dashboard/aiml4os",
                        }}
                        isNumberAnimated={true}
                    />
                    <GlMetricCard
                        number={isReady ? metrics.educationalResourceCount : undefined}
                        subHeading={t("trainingCard")}
                        iconUrl={trainingIconUrl}
                        buttonLabel={t("trainingCardButtonLabel")}
                        link={routes.catalog().link}
                        isNumberAnimated={true}
                    />
                </GlCards>
            </div>

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

            <GlCards title={t("collaborationCardSectionTitle")}>
                <GlLogoCard
                    title={t("gitlabCardTitle")}
                    paragraph={t("gitlabCardParagraph")}
                    iconUrls={[gitlabPngUrl, githubPngUrl]}
                    buttonLabel={t("gitlabCardButtonLabel")}
                    link={{
                        href: "https://www.sspcloud.fr/formation?search=version%20control&path=%5B%5D",
                    }}
                />
                <GlLogoCard
                    title={t("slackCardTitle")}
                    paragraph={t("slackCardParagraph")}
                    iconUrls={[slackPngUrl]}
                    buttonLabel={t("slackCardButtonLabel")}
                    link={{
                        href: joinSlackUrl,
                    }}
                />
                <GlLogoCard
                    title={t("mimCardTitle")}
                    paragraph={t("mimCardParagraph")}
                    iconUrls={[rocketPngUrl, drawioPngUrl, ballonPngUrl, plusPngUrl]}
                    buttonLabel={t("mimCardButtonLabel")}
                    overlapIcons={true}
                    link={{
                        href: "https://www.mim-libre.fr/communaute-mim-libre/",
                    }}
                />
            </GlCards>

            <GlArticle
                title={t("contributionTitle")}
                body={t("contributionParagraph")}
                buttonLabel={t("contributionButtonLabel")}
                buttonLink={{
                    href: "https://github.com/InseeFrLab/www.sspcloud.fr",
                }}
                illustration={{
                    type: "image",
                    src: contributionPngUrl,
                    hasShadow: false,
                }}
                illustrationPosition="left"
                hasAnimation={true}
                classes={{
                    aside: cx(classes.articleImage, classes.contributeImage),
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
        contributeImage: {
            marginRight: theme.windowInnerWidth < breakpointsValues.md ? undefined : 100,
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
    | "projectCard"
    | "trainingCard"
    | "serviceCardButtonLabel"
    | "projectCardButtonLabel"
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
    | "contributionTitle"
    | "contributionParagraph"
    | "contributionButtonLabel"
    | "projectCardSectionTitle"
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
