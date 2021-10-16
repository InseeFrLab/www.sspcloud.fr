import { GlHero } from "gitlanding/GlHero";
import { createGroup } from "type-route";
import { routes } from "../router";
import { useTranslation } from "app/i18n";
import heroHeaderPngUrl from "../assets/illustrations/heroHeader.png";
import { useTheme } from "gitlanding/theme";
import { createMakeStyles } from "tss-react/compat";
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
import { GlIllustration } from "gitlanding/GlIllustration";
import { educationalResources } from "lib/educationalResources/educationalResources";
import { getHelmDatasciencePackageCount } from "lib/getHelmDatasciencePackageCount";
import { useAsync } from "react-async-hook";
import catalogIconUrl from "app/assets/svg/Catalog.svg";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";

const { makeStyles } = createMakeStyles({ useTheme });

const useStyles = makeStyles<{linkToSubSectionText: string}>()(
    (theme, {linkToSubSectionText}) => ({
    "cardSection": {
        "marginBottom": theme.spacing(8),
    },
    "heroImage": {
        "maxWidth": 1000
    },
    "heroImageAndTextWrapper": {
        "alignItems": "flex-start",
        "padding": 0
    },
    "linkToSubSection": {
        "position": "relative",
        "top": -theme.spacing(6),
        "display": "flex",
        ":before": {
            "content": `"${linkToSubSectionText}"`,
            ...theme.typography.variants.subtitle.style,
            "marginBottom": theme.spacing(3)



        },
        "flexDirection": "column",
        "alignItems": "center"

    },
    "articleImage": {
        "maxWidth": 1000

    }
}));

Home.routeGroup = createGroup([routes.home]);

Home.headerOptions = id<HeaderOptions>({
    "position": "fixed",
    "isRetracted": "smart",
});

getHelmDatasciencePackageCount();

export function Home() {
    const { t } = useTranslation("Home");
    const { classes } = useStyles({
        "linkToSubSectionText": t("whatsNeeded")
    });

    const { result: helmDatasciencePackageCount } = useAsync(
        getHelmDatasciencePackageCount,
        [],
    );

    return (
        <>
            <GlHero
                title={t("title")}
                subTitle={t("subtitle")}
                imageSrc={heroHeaderPngUrl}
                linkToSectionBelowId="card-section"
                classes={{
                    "imageWrapper": classes.heroImage,
                    "textAndImageWrapper": classes.heroImageAndTextWrapper,
                    "linkToSectionBelowWrapper": classes.linkToSubSection
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
                illustration={<GlIllustration type="image" url={datalabPngUrl} />}
                animationVariant="secondary"
                classes={{
                    "illustrationWrapper": classes.articleImage
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
                illustration={<GlIllustration type="image" url={contributionPngUrl} />}
                illustrationPosition="left"
                animationVariant="primary"
                classes={{
                    "illustrationWrapper": classes.articleImage
                }}
            />

            <GlCards title={t("projectCardSectionTitle")} className={classes.cardSection}>
                <GlProjectCard
                    projectImageUrl={dataVisuPngUrl}
                    title={t("dataVisualCardTitle")}
                    subtitle="Milena Suarez Castillo"
                    date="01/04/2021"
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
                    date="15/01/2021"
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
                    date="25/03/2021"
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
                    date="15/11/2020"
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

export declare namespace Home {
    export type I18nScheme = {
        title: undefined;
        subtitle: undefined;
        whatsNeeded: undefined;
        serviceCard: undefined;
        projectCard: undefined;
        trainingCard: undefined;
        serviceCardButtonLabel: undefined;
        projectCardButtonLabel: undefined;
        trainingCardButtonLabel: undefined;
        presentationSectionParagraph: undefined;
        presentationSectionTitle: undefined;
        presentationSectionButtonLabel: undefined;
        collaborationCardSectionTitle: undefined;
        gitlabCardTitle: undefined;
        gitlabCardParagraph: undefined;
        gitlabCardButtonLabel: undefined;
        tchapCardTitle: undefined;
        tchapCardParagraph: undefined;
        tchapCardButtonLabel: undefined;
        mimCardTitle: undefined;
        mimCardParagraph: undefined;
        mimCardButtonLabel: undefined;
        contributionTitle: undefined;
        contributionParagraph: undefined;
        contributionButtonLabel: undefined;
        projectCardSectionTitle: undefined;
        dataVisualCardTitle: undefined;
        kubernetesCardTitle: undefined;
        pokemonCardTitle: undefined;
        webinaireCardTitle: undefined;
        dataVisualBadgeLabel: undefined;
        kubernetesBadgeLabel: undefined;
        pokemonBadgeLabel: undefined;
        webinaireBadgeLabel: undefined;
    };
}
