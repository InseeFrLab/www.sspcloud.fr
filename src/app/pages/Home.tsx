import { GlHero } from "gitlanding/GlHero";
import { createGroup } from "type-route";
import { routes } from "../router";
import heroHeaderPngUrl from "../assets/illustrations/heroHeader.png";
import { GlCards } from "gitlanding/GlCards";
import { GlMetricCard } from "gitlanding/GlCards/GlMetricCard";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";
import trainingIconUrl from "../assets/svg/Trainings2.svg";
import datalabPngUrl from "../assets/illustrations/datalab.png";
import ballonPngUrl from "../assets/collaborative_tools/balloon.png";
import drawioPngUrl from "../assets/collaborative_tools/drawio.png";
import githubPngUrl from "../assets/collaborative_tools/github.png";
import gitlabPngUrl from "../assets/collaborative_tools/gitlab.png";
import plusPngUrl from "../assets/collaborative_tools/+.png";
import rocketPngUrl from "../assets/collaborative_tools/rocket-chat.png";
import tchapPngUrl from "../assets/collaborative_tools/tchap.png";
import contributionPngUrl from "../assets/illustrations/contribution.png";
import dataVisuPngUrl from "../assets/illustrations/datavisualisation.png";
import kubernetesPngUrl from "../assets/illustrations/kubernetes.png";
import pokemonPngUrl from "../assets/illustrations/pokemon.png";
import webinairePngUrl from "../assets/illustrations/webinaire.png";
import { GlArticle } from "gitlanding/GlArticle";
import { educationalResources } from "lib/educationalResources/educationalResources";
import { getHelmDatasciencePackageCount } from "lib/getHelmDatasciencePackageCount";
import { useAsync } from "react-async-hook";
import catalogIconUrl from "app/assets/svg/Catalog.svg";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";
import { makeStyles } from "../theme";
import { breakpointsValues } from "../theme";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";
import { useHeaderHeight } from "../theme";


Home.routeGroup = createGroup([routes.home]);

Home.headerOptions = id<HeaderOptions>({
    "position": "sticky",
    "isRetracted": "smart",
});

getHelmDatasciencePackageCount();

export function Home() {
    const { t } = useTranslation({ Home });
    const { headerHeight } = useHeaderHeight();

    const { result: helmDatasciencePackageCount } = useAsync(
        getHelmDatasciencePackageCount,
        [],
    );

    const { classes, cx } = useStyles({
        "linkToSubSectionText": t("whatsNeeded"),
        headerHeight
    });
    return (
        <>
            <GlHero
                title={t("title")}
                subTitle={t("subtitle")}
                illustration={{
                    "type": "image",
                    "src": heroHeaderPngUrl,
                    "hasShadow": false
                }}
                hasLinkToSectionBellow={true}
                classes={{
                    "root": classes.heroRoot,
                    "illustrationWrapper": classes.heroImage,
                    "textAndImageWrapper": classes.heroImageAndTextWrapper,
                    "linkToSectionBelowWrapper": classes.linkToSubSection,
                    "title": classes.title,
                    "textWrapper": classes.textWrapper,
                    "subtitle": classes.subtitle,
                }}
            />

            <div id="card-section">
                <GlCards>
                    <GlMetricCard
                        number={helmDatasciencePackageCount}
                        subHeading={t("serviceCard")}
                        iconUrl={catalogIconUrl}
                        buttonLabel={t("serviceCardButtonLabel")}
                        link={{
                            "href": "https://datalab.sspcloud.fr/catalog",
                        }}
                        isNumberAnimated={true}
                    />
                    <GlMetricCard
                        number={10}
                        subHeading={t("projectCard")}
                        iconUrl={trainingIconUrl}
                        buttonLabel={t("projectCardButtonLabel")}
                        link={{
                            "href": "https://docs.sspcloud.fr/actualites",
                        }}
                        isNumberAnimated={true}
                    />
                    <GlMetricCard
                        number={educationalResources.length}
                        subHeading={t("trainingCard")}
                        iconUrl={trainingIconUrl}
                        buttonLabel={t("trainingCardButtonLabel")}
                        link={routes.documentation().link}
                        isNumberAnimated={true}
                    />
                </GlCards>
            </div>

            <GlArticle
                title={t("presentationSectionTitle")}
                body={t("presentationSectionParagraph")}
                buttonLabel={t("presentationSectionButtonLabel")}
                buttonLink={{
                    "href": "https://datalab.sspcloud.fr/home",
                }}
                illustration={{
                    "type": "image",
                    "src": datalabPngUrl,
                    "hasShadow": false
                }}
                hasAnimation={true}
                classes={{
                    "aside": cx(classes.articleImage, classes.aboutImage),
                    "root": classes.article
                }}
            />

            <GlCards title={t("collaborationCardSectionTitle")}>
                <GlLogoCard
                    title={t("gitlabCardTitle")}
                    paragraph={t("gitlabCardParagraph")}
                    iconUrls={[gitlabPngUrl, githubPngUrl]}
                    buttonLabel={t("gitlabCardButtonLabel")}
                    link={{
                        "href": "https://git.lab.sspcloud.fr/",
                    }}
                />
                <GlLogoCard
                    title={t("tchapCardTitle")}
                    paragraph={t("tchapCardParagraph")}
                    iconUrls={[tchapPngUrl]}
                    buttonLabel={t("tchapCardButtonLabel")}
                    link={{
                        "href": "https://tchap.gouv.fr/#/room/#SSPCloudXDpAw6v:agent.finances.tchap.gouv.fr",
                    }}
                />
                <GlLogoCard
                    title={t("mimCardTitle")}
                    paragraph={t("mimCardParagraph")}
                    iconUrls={[rocketPngUrl, drawioPngUrl, ballonPngUrl, plusPngUrl]}
                    buttonLabel={t("mimCardButtonLabel")}
                    overlapIcons={true}
                    link={{
                        "href": "https://www.mim-libre.fr/communaute-mim-libre/",
                    }}
                />
            </GlCards>

            <GlArticle
                title={t("contributionTitle")}
                body={t("contributionParagraph")}
                buttonLabel={t("contributionButtonLabel")}
                buttonLink={{
                    "href": "https://github.com/InseeFrLab",
                }}
                illustration={{
                    "type": "image",
                    "src": contributionPngUrl,
                    "hasShadow": false
                }}
                illustrationPosition="left"
                hasAnimation={true}
                classes={{
                    "aside": cx(classes.articleImage, classes.contributeImage),
                    "root": classes.article
                }}
            />

            <GlCards title={t("projectCardSectionTitle")} className={classes.cardSection}>
                <GlProjectCard
                    projectImageUrl={dataVisuPngUrl}
                    title={t("dataVisualCardTitle")}
                    subtitle="Milena Suarez Castillo"
                    text="01/04/2021"
                    link={{
                        "href": "https://docs.sspcloud.fr/projets/datavisualisation-mouvements-de-population-autour-du-confinement-de-mars-2020",
                    }}
                    badgeLabel={t("dataVisualBadgeLabel")}
                    badgeBackgroundColor="#d5f2e1"
                    badgeColor="black"
                />
                <GlProjectCard
                    projectImageUrl={pokemonPngUrl}
                    title={t("pokemonCardTitle")}
                    subtitle="Pengfei Liu"
                    text="15/01/2021"
                    link={{
                        "href": "https://docs.sspcloud.fr/actualites/atelier-kubernetes-ssp-cloud-introduction-et-bonnes-pratiques-de-deploiement-docker",
                    }}
                    badgeLabel={t("pokemonBadgeLabel")}
                    badgeBackgroundColor="#d5f2e1"
                    badgeColor="black"
                />
                <GlProjectCard
                    projectImageUrl={kubernetesPngUrl}
                    title={t("kubernetesCardTitle")}
                    subtitle="Olivier Levitt - Frédéric Comte"
                    text="25/03/2021"
                    link={{
                        "href": "https://docs.sspcloud.fr/projets/pokemon-classification-fr",
                    }}
                    badgeLabel={t("kubernetesBadgeLabel")}
                    badgeBackgroundColor="#e8daf3"
                    badgeColor="black"
                />
                <GlProjectCard
                    projectImageUrl={webinairePngUrl}
                    title={t("webinaireCardTitle")}
                    subtitle="Olivier Levitt - Frédéric Comte"
                    text="15/11/2020"
                    link={{
                        "href": "https://docs.sspcloud.fr/actualites/linfrastructure-kubernetes-webinaire-dintroduction",
                    }}
                    badgeLabel={t("webinaireBadgeLabel")}
                    badgeBackgroundColor="#e8daf3"
                    badgeColor="black"
                />
            </GlCards>
        </>
    );
}

export const { i18n } = declareComponentKeys<
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
    | "tchapCardTitle"
    | "tchapCardParagraph"
    | "tchapCardButtonLabel"
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
>()({ Home })

const useStyles = makeStyles<{ linkToSubSectionText: string; headerHeight: number | undefined }>({ "name": { Home } })(
    (theme, { linkToSubSectionText, headerHeight }) => ({
        "cardSection": {
            "marginBottom": theme.spacing(8),
        },
        "heroImage": {
            "position": "relative",
            //"maxWidth": 1000,
            ...(theme.windowInnerWidth >= breakpointsValues.xl
                ? {
                    "transform": `scale(1.2)`,
                    "left": -theme.spacing(7),
                }
                : {}),
            ...(theme.windowInnerWidth >= breakpointsValues["lg+"]
                ? {
                    "top": -theme.spacing(7),
                    ...(theme.windowInnerWidth < 1650
                        ? {
                            "transform": "scale(1.1)",
                            "left": -theme.spacing(5),
                            "top": -theme.spacing(5),
                        }
                        : {}),
                }
                : {}),
            ...(theme.windowInnerWidth >= breakpointsValues.lg
                ? {
                    "top": -theme.spacing(3),
                    "transform": "scale(1.1)",
                    "left": -theme.spacing(6),
                }
                : {}),
            ...(theme.windowInnerWidth >= breakpointsValues.md
                ? {
                    "top": -theme.spacing(6),
                    "transform": "scale(1.1)",
                    "left": -theme.spacing(5),
                    ...(theme.windowInnerWidth < 1100
                        ? {
                            "top": -theme.spacing(3),
                        }
                        : {}),
                }
                : {}),
        },
        "heroRoot": {
            "marginTop": headerHeight ?? undefined
        },
        "heroImageAndTextWrapper": {
            "alignItems": "flex-start",
            "minHeight": 0,
            "justifyContent": "space-between"
        },
        "article": {
            "justifyContent": "space-between",


        },
        "linkToSubSection": {
            "position": "relative",
            "top": -theme.spacing(6),
            "display": "flex",
            ":before": {
                "content": `"${linkToSubSectionText}"`,
                ...theme.typography.variants.subtitle.style,
                "marginBottom": theme.spacing(3),
            },
            "flexDirection": "column",
            "alignItems": "center",
        },
        "articleImage": {
            "maxWidth": 950,
        },
        "aboutImage": {
            "marginLeft": theme.windowInnerWidth < breakpointsValues.md ? undefined : 100,
        },
        "contributeImage": {
            "marginRight": theme.windowInnerWidth < breakpointsValues.md ? undefined : 100,
        },
        "textWrapper": {
            "marginRight": 0,
            "zIndex": 2,
        },
        "title": {
            "width": (() => {
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
        "subtitle": {
            "width": (() => {
                if (
                    theme.windowInnerWidth < breakpointsValues["lg+"] &&
                    theme.windowInnerWidth >= breakpointsValues.md
                ) {
                    return 400;
                }

                return "none";
            })(),
        },
    }),
);
