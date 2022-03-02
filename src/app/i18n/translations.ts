import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";
import type { Language } from "./libReExport";

import { AppHeader } from "app/App/AppHeader";
import { Home } from "app/pages/Home";
import { Documentation } from "app/pages/Documentation";
import { DocumentationCard } from "app/pages/Documentation/DocumentationCard";
import { FourOhFour } from "app/pages/FourOhFour";

export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

const reflectedI18nSchemes = {
    [symToStr({ AppHeader })]: Reflect<AppHeader.I18nScheme>(),
    [symToStr({ Home })]: Reflect<Home.I18nScheme>(),
    [symToStr({ Documentation })]: Reflect<Documentation.I18nScheme>(),
    [symToStr({ DocumentationCard })]: Reflect<DocumentationCard.I18nScheme>(),
    [symToStr({ FourOhFour })]: Reflect<FourOhFour.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = {
    [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]>;
};

export const translations = id<Record<Language, Translations>>({
    "fr": {
        /* spell-checker: disable */
        "AppHeader": {
            "community": "Communauté",
            "contribute": "Contribuer",
            "our GitLab forge": "Notre forge GitLab",
            "the onyxia datalab": "Le datalab Onyxia",
            "trainings and tutorials": "Formations et tutoriels",
        },
        "Home": {
            "title": "Espace communautaire pour la statistique publique.",
            "subtitle":
                "Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communauté du SSP Cloud.",
            "whatsNeeded": "Ce dont vous avez besoin :",
            "serviceCard": "services mis à disposition",
            "projectCard": "projets / ateliers",
            "trainingCard": "formations / tutoriels en ligne",
            "serviceCardButtonLabel": "Découvrir le catalogue",
            "projectCardButtonLabel": "Voir les actualités",
            "trainingCardButtonLabel": "Consulter le catalogue",
            "presentationSectionParagraph": [
                "Onyxia est une plateforme libre service ",
                "mutualisée de traitement de données ",
                "statistiques et de datascience. Le datalab ",
                "met à disposition aux statisticiens et aux ",
                "data scientists de l’État un catalogue de ",
                "services et un environnement de travail simple, ",
                "rapide et collaboratif, permettant de lancer ",
                "facilement ces outils et d’y connecter ses données ",
                "et son code. Au-delà des ressources techniques, le ",
                "projet représente une opportunité pour les ",
                "statisticiens publics de découvrir et d’adopter ",
                "de nouvelles méthodes de travail. Il est ",
                "aussi utilisé à des fins de formations et ",
                "d’auto-formations.",
            ].join(""),

            "presentationSectionTitle": "Quelques mots à propos d'Onyxia",
            "presentationSectionButtonLabel": "En savoir plus",
            "collaborationCardSectionTitle": "La collaboration au sein de la communauté",
            "gitlabCardTitle": "Gitlab et Github",
            "gitlabCardParagraph":
                "Travail collaboratif via l’utilisation de forge avec un système de contrôle de version et orchestration des processus de traitement de données.",
            "gitlabCardButtonLabel": "Voir le Gitlab du SSP Cloud",
            "tchapCardTitle": "Rejoindre la communauté Tchap",
            "tchapCardParagraph":
                "Une communauté active et enthousiaste à votre écoute. N’attendez plus, rejoignez nous pour échanger et posez vos questions !",
            "tchapCardButtonLabel": "Rejoindre le canal Tchap",
            "mimCardTitle": "Outils collaboratifs Mim-Libre",
            "mimCardParagraph":
                " Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de mutualisation inter-ministérielle.",
            "mimCardButtonLabel": "Consulter le catalalogue Mim-Libre",
            "contributionTitle": "Comment contribuer à la communauté ?",
            "contributionParagraph": [
                "Dans le cadre d'une collaboration publique, ",
                "la plateforme et l’entièreté de son contenu sont ",
                "disponibles en open-source.  L’ensemble du projet a ",
                "vocation à être améliorée en fonction de votre ",
                "expérience et de vos usages, nous comptons sur ",
                "vos retours et vos contributions en participant au ",
                "catalogue de service, à la documentation et aux ",
                "formations mais aussi en présentant vos projets ",
                "réalisés avec le datalab.",
            ].join(""),
            "contributionButtonLabel": "Contribuer",
            "projectCardSectionTitle": "Les dernières actualités et projets",
            "dataVisualCardTitle":
                "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
            "pokemonCardTitle":
                "MLOps et Random Forest Clustering : démonstration avec les stastitiques des Pokémons.",
            "kubernetesCardTitle":
                "Atelier Kubernetes : Introduction et bonnes pratiques du déploiement Docker avec le SSP Cloud",
            "webinaireCardTitle":
                "L'infrastructure Kubernetes : webinaire d'introduction.",
            "dataVisualBadgeLabel": "Projet",
            "pokemonBadgeLabel": "Projet",
            "kubernetesBadgeLabel": "Actualité",
            "webinaireBadgeLabel": "Actualité",
        },

        "Documentation": {
            "search": "Rechercher",
            "pageTitle": "Formations et tutoriels",
            "pageHelpTitle":
                "Découvrez et apprenez la datascience à votre rythme en fonction de votre besoin.",
            "pageHelpContentP1":
                "Suivez des formations ou tutoriels interactifs et guidés et",
            "pageHelpContentP2": "contribuer aux ressources de la communauté.",
            "trainings": "Formations",
            "no documentation found": "Aucune documentation ou formation non trouvé",
            "no result found": "Aucun résultat trouvé pour {{forWhat}}",
            "check spelling": `Vérifiez l'orthographe ou essayez d'élargir votre recherche.`,
            "go back": "Retourner à toutes les formations",
            "show all": "Afficher tous",
            "training courses with R": "Parcours de formation avec R",
            "training courses with python": "Parcours de formation avec Python",
            "trainings of data science": "Tutoriels de data science",
            "contributors": "contributeurs",
        },
        "DocumentationCard": {
            "open": "Ouvrir",
            "read": "Lire",
            "run": "Lancer",
            "and": "et",
            "others": "autres",
            "discover": "Découvrir",
            "learn": "Apprendre",
            "consolidate": "Consolider",
            "deepen": "Approfondire",
        },
        "FourOhFour": {
            "not found": "Page non trouvée",
        },
        /* spell-checker: enable */
    },
    "en": {
        "AppHeader": {
            "community": "Community",
            "contribute": "Contribute",
            "our GitLab forge": "Our GitLab forge",
            "the onyxia datalab": "The Onyxia Datalab",
            "trainings and tutorials": "Trainings and tutorials",
        },
        "Home": {
            "title":
                "Community space for the French's public service for the statistics.",
            "subtitle":
                "Here I find and share resources about statistical analysis an Data Science with the SSP Cloud community",
            "whatsNeeded": "What you need :",
            "serviceCard": "the services that you can access",
            "projectCard": "projects / workshop",
            "trainingCard": "training / online tutorials",
            "serviceCardButtonLabel": "Discover our catalogue",
            "projectCardButtonLabel": "News letter",
            "trainingCardButtonLabel": "Consult the catalogue",
            "presentationSectionParagraph": [
                "Onyxia est une plateforme libre service et ",
                "mutualisée pour le traitement de données ",
                "statistiques et de datascience. Le datalab ",
                "met à disposition des statisticiens et des ",
                "data scientists de l’État un catalogue de ",
                "services et un environnement de travail simple, ",
                "rapide et collaboratif, permettant de lancer ",
                "facilement ces outils et d’y connecter ses données ",
                "et son code. Au-delà des ressources techniques, le ",
                "projet représente une opportunité pour les ",
                "statisticiens publics de découvrir et d’adopter ",
                "de nouvelles méthodes de travail. Il est ",
                "aussi utilisé à des fins de formations et ",
                "d’auto-formations.",
            ].join(""),

            "presentationSectionTitle": "A few words about onyxia",
            "presentationSectionButtonLabel": "More",
            "collaborationCardSectionTitle":
                "Collaboration at the heart of the community",
            "gitlabCardTitle": "Gitlab and Github",
            "gitlabCardParagraph":
                "Travail collaboratif via l’utilisation de forge avec un système de contrôle de version et orchestration des processus de traitement de données.",
            "gitlabCardButtonLabel": "See the Gitlab of SSP Cloud",
            "tchapCardTitle": "Join the Tchap community",
            "tchapCardParagraph":
                "Une communauté active et enthousiaste à votre écoute. N’attendez plus, rejoignez nous pour échanger et posez vos questions !",
            "tchapCardButtonLabel": "Join the Tchap canal",
            "mimCardTitle": "Mim-Libre collaboration tools",
            "mimCardParagraph":
                " Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de mutualisation inter-ministérielle.",
            "mimCardButtonLabel": "Consult the Mim-Libre catalog",
            "contributionTitle": "How to contribute to the community ?",
            "contributionParagraph": [
                "Dans le cadre d'une collaboration publique, ",
                "la plateforme et l’entièreté de son contenu sont ",
                "disponibles en open-source.  L’ensemble du projet a ",
                "vocation à être améliorée en fonction de votre ",
                "expérience et de vos usages, nous comptons sur ",
                "vos retours et vos contributions en participant au ",
                "catalogue de service, à la documentation et aux ",
                "formations mais aussi en présentant vos projets ",
                "réalisés avec le datalab.",
            ].join(""),
            "contributionButtonLabel": "Contribute",
            "projectCardSectionTitle": "The latest news and projects",
            "dataVisualCardTitle":
                "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
            "pokemonCardTitle":
                "MLOps et Random Forest Clustering : démonstration avec les stastitiques des Pokémons.",
            "kubernetesCardTitle":
                "Atelier Kubernetes : Introduction et bonnes pratiques du déploiement Docker avec le SSP Cloud",
            "webinaireCardTitle":
                "L'infrastructure Kubernetes : webinaire d'introduction.",
            "dataVisualBadgeLabel": "Project",
            "pokemonBadgeLabel": "Project",
            "kubernetesBadgeLabel": "Topicality",
            "webinaireBadgeLabel": "Topicality",
        },
        "Documentation": {
            "search": "Search",
            "pageTitle": "Courses and Tutorials",
            "pageHelpTitle":
                "Discover and learn datascience at your own pace, according to your needs",
            "pageHelpContentP1": "Follow courses or interactive tutorials and",
            "pageHelpContentP2": "contribute to the community resources.",
            "trainings": "Trainings",
            "no documentation found": "No documentation or training found",
            "no result found": "No result found for {{forWhat}}",
            "check spelling": `Check spelling or widen the search`,
            "go back": "Go back",
            "show all": "Show all",
            "training courses with R":"Training courses with R",
            "training courses with python":"Training courses with Python",
            "trainings of data science":"Trainings of data science",
            "contributors": "contributors",
        },
        "DocumentationCard": {
            "open": "Open",
            "read": "Read",
            "run": "Run",
            "and": "and",
            "others": "others",
            "discover": "Discover",
            "learn": "Learn",
            "consolidate": "Consolidate",
            "deepen": "Deepen",
        },
        "FourOhFour": {
            "not found": "Page not found",
        },
    },
});
