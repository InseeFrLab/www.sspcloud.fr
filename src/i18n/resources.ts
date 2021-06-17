import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";

import { HomeHero } from "pages/Home/HomeHero";
import { HomeKeyMetrics } from "pages/Home/HomeKeyMetrics";
import { HomeIntroductionArticle } from "pages/Home/HomeIntroductionArticle";
import { HomeCollaborativeServices } from "pages/Home/HomeCollaborativeServices";
import { HomeCallToContributeArticle } from "pages/Home/HomeCallToContributeArticle";
import { FourOhFour } from "pages/FourOhFour";

export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

const reflectedI18nSchemes = {
    [symToStr({ HomeHero })]: Reflect<HomeHero.I18nScheme>(),
    [symToStr({ HomeKeyMetrics })]: Reflect<HomeKeyMetrics.I18nScheme>(),
    [symToStr({ HomeIntroductionArticle })]: Reflect<HomeIntroductionArticle.I18nScheme>(),
    [symToStr({ HomeCollaborativeServices })]: Reflect<HomeCollaborativeServices.I18nScheme>(),
    [symToStr({ HomeCallToContributeArticle })]: Reflect<HomeCallToContributeArticle.I18nScheme>(),
    [symToStr({ FourOhFour })]: Reflect<FourOhFour.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = { [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]> };

export type SupportedLanguage = "fr";


export const resources = id<Record<SupportedLanguage, Translations>>({
    "fr": {
        /* spell-checker: disable */
        "HomeHero": {
            "title": "Espace communautaire pour la statistique publique.",
            "subtitle": `
            Ici je trouve et je partage des ressources 
            sur le traitement statistique et la datascience
            avec la communauté du SSP Cloud.
            `,
            "what you need": "Ce dont vous avez besoin :"
        },
        "HomeKeyMetrics": {
            "card1 description": "services mis à disposition",
            "card1 button label": "Découvrir le catalog",
            "card2 description": "projets / ateliers du datalab",
            "card2 button label": "Voir les actualités",
            "card3 description": "formations / tutoriels en ligne ",
            "card3 button label": "Consulter le catalogue"
        },
        "HomeIntroductionArticle": {
            "title": "Quelques mots à propos du datalab",
            "body": `
                C’est une plateforme libre service et mutualisée pour le traitement de données statistiques et de datascience. 
                Le datalab met à disposition des statisticiens et des data scientists de l’État un catalogue de services et un 
                environnement de travail simple, rapide et collaboratif, permettant de lancer facilement ces outils et d’y 
                connecter ses données et son code. Au-delà des ressources techniques, le projet représente une opportunité pour 
                les statisticiens publics de découvrir et d’adopter de nouvelles méthodes de travail. Il est aussi utilisé à 
                des fins de formations et d’auto-formations.
            `,
            "button label": "En savoir plus"
        },
        "HomeCollaborativeServices": {
            "forge title": "Gitlab et Github",
            "forge description": `
                Travail collaboratif via l’utilisation de forge avec un système de contrôle de
                version et orchestration des processus de traitement de données.
            `,
            "social title": "Rejoindre le canal Tchap",
            "social description": `
                Une communauté active et enthousiaste à votre écoute. N’attendez plus, rejoignez nous pour 
                échanger et posez vos questions !
            `,
            "collaborative tools title": "Outils collaboratifs Mim-Libre",
            "collaborative tools description": `
                Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de 
                mutualisation inter-ministérielle.
            `
        },
        "HomeCallToContributeArticle": {
            "title": "Comment contribuer à la communauté ?",
            "body": `
                Dans le cadre d'une collaboration publique, la plateforme et l’entièreté de son contenu 
                sont disponibles en open-source.  L’ensemble du projet a vocation à être améliorée 
                en fonction de votre expérience et de vos usages, nous comptons sur vos retours 
                et vos contributions en participant au catalogue de service, à la documentation 
                et aux formations mais aussi en présentant vos projets réalisés avec le datalab.
            `,
            "button label": "Contribuer"
        },
        "FourOhFour": {
            "not found": "Page non trouvée"
        }
        /* spell-checker: enable */
    }

});
