import { GlHero } from "gitlanding/GlHero";
import { createGroup } from "type-route";
import { routes } from "app/router";
import { useTranslation } from "app/i18n";
import heroHeaderPngUrl from "../assets/illustrations/heroHeader.png";
import {useTheme, Text} from "gitlanding/theme";
import {createMakeStyles} from "tss-react";
import {GlArrow} from "gitlanding/utils/GlArrow";
import {GlCards} from "gitlanding/GlCards"
import {GlMetricCard} from "gitlanding/GlCards/GlMetricCard";
import {GlLogoCard} from "gitlanding/GlCards/GlLogoCard";
import {GlProjectCard} from "gitlanding/GlCards/GlProjectCard";
import servicesIconUrl from "../assets/svg/Services.svg";
import trainingIconUrl from "../assets/svg/Trainings2.svg";
import {GlSection} from "gitlanding/GlSection";
import {GlArticle} from "gitlanding/GlSection/GlArticle"
import {GlAside} from "gitlanding/GlSection/GlAside";
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
import pokemonPngUrl from "../assets/illustrations/pokemon.png"
import webinairePngUrl from "../assets/illustrations/webinaire.png"


const { makeStyles } = createMakeStyles({ useTheme });

const useStyles = makeStyles()(
    theme => ({
        "ArrowSection": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "column",
            "gap": theme.spacing(2),
            "marginBottom": theme.spacing(9)
        }
    })
);

Home.routeGroup = createGroup([routes.home]);

export function Home() {

    const { t } = useTranslation("Home");
    const { classes } = useStyles();

    return (
        <>
            <GlHero
                title={t("title")}
                subTitle={t("subtitle")}
                imageSrc={heroHeaderPngUrl}
            />
            <div className={classes.ArrowSection}>

                <Text typo="subtitle">{t("whatsNeeded")}</Text>
                <GlArrow
                    direction="down"
                    hasCircularBorder={true}
                    link={
                        {
                            "href": "#card-section"
                        }
                    }
                />

            </div>

            <div id="card-section">
                <GlCards>
                    <GlMetricCard
                        number={18}
                        subHeading={t("serviceCard")}
                        iconUrl={servicesIconUrl}
                        buttonLabel={t("serviceCardButtonLabel")}
                    />
                    <GlMetricCard
                        number={10}
                        subHeading={t("projectCard")}
                        iconUrl={trainingIconUrl}
                        buttonLabel={t("projectCardButtonLabel")}
                    />
                    <GlMetricCard
                        number={23}
                        subHeading={t("trainingCard")}
                        iconUrl={trainingIconUrl}
                        buttonLabel={t("trainingCardButtonLabel")}
                    />
                </GlCards>
            </div>

            <GlSection
				article={<GlArticle 
					title={t("presentationSectionTitle")}
					articleMd={t("presentationSectionParagraph")}
					buttonLabel={t("presentationSectionButtonLabel")}
                    buttonLink={{
                        "href": "https://datalab.sspcloud.fr/home"
                    }}
					
				/>}
				aside={<GlAside
					type="image"
					url={datalabPngUrl}
				/>}
			/>

            <GlCards
                title={t("collaborationCardSectionTitle")}
            >
                <GlLogoCard 
                    title={t("gitlabCardTitle")}
                    paragraph={t("gitlabCardParagraph")}
                    iconUrls={[gitlabPngUrl, githubPngUrl]}
                />
                <GlLogoCard 
                    title={t("tchapCardTitle")}
                    paragraph={t("tchapCardParagraph")}
                    iconUrls={[tchapPngUrl]}
                />
                <GlLogoCard 
                    title={t("mimCardTitle")}
                    paragraph={t("mimCardParagraph")}
                    iconUrls={[rocketPngUrl, drawioPngUrl, ballonPngUrl, plusPngUrl]}
                />

            </GlCards>

            <GlSection
                article={<GlAside 
                    type="image"
                    url={contributionPngUrl}
                />}

                aside={
                    <GlArticle 
                        title={t("contributionTitle")}
                        articleMd={t("contributionParagraph")}
                        buttonLabel={t("contributionButtonLabel")}
                        buttonLink={{
                            "href": "https://github.com/InseeFrLab"

                        }}

                    />
                }
            />

            <GlCards
                title="Les dernières actualités et projets"
            >

                <GlProjectCard
                    projectImageUrl={dataVisuPngUrl}
                    title={t("dataVisualCardTitle")}
                    subtitle="Milena Suarez Castillo"
                    date="01/04/2021"


                />
                <GlProjectCard
                    projectImageUrl={pokemonPngUrl}
                    title={t("pokemonCardTitle")}
                    subtitle="Pengfei Liu"
                    date="15/01/2021"
                />
                <GlProjectCard
                    projectImageUrl={kubernetesPngUrl}
                    title={t("kubernetesCardTitle")}
                    subtitle="Olivier Levitt - Frédéric Comte"
                    date="25/03/2021"
                />
                <GlProjectCard
                    projectImageUrl={webinairePngUrl}
                    title={t("webinaireCardTitle")}
                    subtitle="Olivier Levitt - Frédéric Comte"
                    date="15/11/2020"
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
        tchapCardTitle: undefined;
        tchapCardParagraph: undefined;
        mimCardTitle: undefined;
        mimCardParagraph: undefined;
        contributionTitle: undefined;
        contributionParagraph: undefined;
        contributionButtonLabel: undefined;
        dataVisualCardTitle: undefined;
        kubernetesCardTitle: undefined;
        pokemonCardTitle: undefined;
        webinaireCardTitle: undefined;
    };
}
