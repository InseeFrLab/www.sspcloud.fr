import { createI18nApi, declareComponentKeys } from "i18nifty";
import { languages, fallbackLanguage } from "./Language";
import { statefulObservableToStatefulEvt } from "powerhooks/tools/StatefulObservable/statefulObservableToStatefulEvt";
import { joinSlackUrl } from "env";
export { declareComponentKeys };
const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
} = createI18nApi<
    | typeof import("App/App").i18n
    | typeof import("App/AppHeader").i18n
    | typeof import("pages/FourOhFour").i18n
    | typeof import("pages/Documentation/Documentation").i18n
    | typeof import("pages/Documentation/DocumentationCard/DocumentationCard").i18n
    | typeof import("pages/Documentation/DocumentationCard/DeploymentButton").i18n
    | typeof import("pages/Home").i18n
>()(
    {
        languages,
        fallbackLanguage,
    },
    {
        en: {
            App: {
                "web site source": "Source code of this website",
                "trainings database": "Trainings database",
            },
            AppHeader: {
                platform: "Platform",
                contribute: "Contribute",
                "the onyxia datalab": "The Onyxia Datalab",
                "trainings and tutorials": "Trainings and tutorials",
            },
            FourOhFour: {
                "not found": "Page not found",
            },
            Documentation: {
                search: "Search",
                pageTitle: "Courses and Tutorials",
                pageHelpTitle:
                    "Discover and learn datascience at your own pace, according to your needs",
                pageHelpContentP1: "Follow courses or interactive tutorials and",
                pageHelpContentP2: "contribute to the community resources.",
                trainings: "Trainings",
                "no documentation found": "No documentation or training found",
                "no result found": ({ forWhat }) => `No results found for ${forWhat}`,
                "check spelling": `Check spelling or widen the search`,
                "go back": "Go back",
                "show all": "Show all",
                "discover the datalab": "Discover the Datalab",
                "training courses with R": "R training courses",
                "training courses with python": "Python training courses",
                "training courses in data science": "Data science training courses",
                "best practices": "Best practices",
                funathon: "Funathon",
                contributors: "contributors",
            },
            DeploymentButton: {
                "button label": ({ ideName }) =>
                    `Run${ideName === undefined ? "" : ` with ${ideName}`}  🚀`,
            },
            DocumentationCard: {
                open: "Open",
                read: "Read",
                run: "Run",
                and: "and",
                others: "others",
                discover: "Discover",
                learn: "Learn",
                consolidate: "Consolidate",
                deepen: "Deepen",
            },
            Home: {
                title: "Work, learn, and experiment in open data science and AI",
                subtitle:
                    "An open source platform for students and public sector professionals worldwide, to explore, train, and experiment in data science and AI.",
                whatsNeeded: "Learn more",
                serviceCard: "the services that you can access",
                projectCard: "Use cases",
                trainingCard: "training / online tutorials",
                serviceCardButtonLabel: "Discover our catalogue",
                projectCardButtonLabel: "Home page",
                trainingCardButtonLabel: "Consult the catalogue",
                presentationSectionParagraph: `SSPCloud is a trusted infrastructure hosted by Insee and fully independent from commercial cloud providers.

This platform offers several services accessible to all students and public sector professionals, regardless of their country of origin.

You will find:
- [**Datalab Onyxia**](https://datalab.sspcloud.fr/): a data science work environment accessible directly from your browser. It allows you to launch Python, R, and other sessions with on-demand CPU/GPU resources.
- [**A training catalog**](https://www.sspcloud.fr/formation) in data science and artificial intelligence, with practical exercises that can be run directly on Onyxia.
- [**A conversational agent**](https://llm.lab.sspcloud.fr), similar to ChatGPT, but locally hosted and powered by open source AI models.

[A Slack discussion space](${joinSlackUrl}) is also available to support you and answer your questions.

All these services are built entirely using open source software — some developed by our team, like [**Onyxia**](https://www.onyxia.sh/), others simply deployed and maintained by us.`,

                presentationSectionTitle: "Welcome. This platform is yours.",
                presentationSectionButtonLabel: "Browse the training catalog",
                collaborationCardSectionTitle:
                    "Collaboration at the heart of the community",
                gitlabCardTitle: "Gitlab and Github",
                gitlabCardParagraph:
                    "Collaborative work through the use of a forge with a version control system.",
                gitlabCardButtonLabel: "Begin with GIT",
                slackCardTitle: "Join the Slack community",
                slackCardParagraph:
                    "An active and enthusiastic community is here for you. Don't wait any longer; join us to share and ask your questions!",
                slackCardButtonLabel: "Join the Slack channel",
                mimCardTitle: "Mim-Libre collaboration tools",
                mimCardParagraph:
                    " Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de mutualisation inter-ministérielle.",
                mimCardButtonLabel: "Consult the Mim-Libre catalog",
                contributionTitle: "How to contribute to the community ?",
                contributionParagraph: [
                    "Within the framework of public collaboration, ",
                    "the platform and all its content are available ",
                    "as open-source. The entire project aims to be improved ",
                    "based on your experience and usage. We rely on your ",
                    "feedback and contributions by participating ",
                    "in the service catalog, documentation, and ",
                    "training, as well as by presenting ",
                    "your projects realized with the datalab.",
                ].join(""),
                contributionButtonLabel: "Contribute",
                projectCardSectionTitle: "The latest news and projects",
                dataVisualCardTitle:
                    "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
                pokemonCardTitle:
                    "MLOps et Random Forest Clustering : démonstration avec les stastitiques des Pokémons.",
                kubernetesCardTitle:
                    "Atelier Kubernetes : Introduction et bonnes pratiques du déploiement Docker avec le SSP Cloud",
                webinaireCardTitle:
                    "L'infrastructure Kubernetes : webinaire d'introduction.",
                dataVisualBadgeLabel: "Project",
                pokemonBadgeLabel: "Project",
                kubernetesBadgeLabel: "Topicality",
                webinaireBadgeLabel: "Topicality",
            },
        },
        /* spell-checker: disable */
        fr: {
            App: {
                "web site source": "Code source du site web",
                "trainings database": "Base de données des formations",
            },
            AppHeader: {
                platform: "Plateforme",
                contribute: "Contribuer",
                "the onyxia datalab": "Le datalab Onyxia",
                "trainings and tutorials": "Formations et tutoriels",
            },
            FourOhFour: {
                "not found": "page non trouvée",
            },
            Documentation: {
                search: "Rechercher",
                pageTitle: "Formations et tutoriels",
                pageHelpTitle:
                    "Découvrez et apprenez la datascience à votre rythme en fonction de votre besoin.",
                pageHelpContentP1:
                    "Suivez des formations ou tutoriels interactifs et guidés et",
                pageHelpContentP2: "contribuer aux ressources de la communauté.",
                trainings: "Formations",
                "no documentation found": "Aucune documentation ou formation non trouvée",
                "no result found": ({ forWhat }) =>
                    `Aucun résultat trouvé pour ${forWhat}`,
                "check spelling": `Vérifiez l'orthographe ou essayez d'élargir votre recherche.`,
                "go back": "Retourner à toutes les formations",
                "show all": "Afficher tous",
                "discover the datalab": "Découverte du Datalab",
                "training courses with R": "Parcours de formation à R",
                "training courses with python": "Parcours de formation à Python",
                "training courses in data science": "Tutoriels de data science",
                "best practices": "Bonnes pratiques, déploiement et automatisation",
                funathon: "Funathon",
                contributors: "contributeurs",
            },
            DeploymentButton: {
                "button label": ({ ideName }) =>
                    `Lancer${ideName === undefined ? "" : ` avec ${ideName}`}  🚀`,
            },
            DocumentationCard: {
                open: "Ouvrir",
                read: "Lire",
                run: "Lancer",
                and: "et",
                others: "autres",
                discover: "Découvrir",
                learn: "Apprendre",
                consolidate: "Consolider",
                deepen: "Approfondir",
            },
            Home: {
                title: "Travaillez, apprenez, expérimentez en data science et en IA libres",
                subtitle:
                    "Une plateforme open source à destination des étudiants et agents publics, pour explorer, se former et expérimenter en data science et en IA.",
                whatsNeeded: "En savoir plus",
                serviceCard: "services mis à disposition",
                projectCard: "cas d'usages",
                trainingCard: "formations / tutoriels en ligne",
                serviceCardButtonLabel: "Découvrir le catalogue",
                projectCardButtonLabel: "Voir les cas d'usages",
                trainingCardButtonLabel: "Consulter le catalogue",
                presentationSectionParagraph: `Le SSPCloud est une infrastructure de confiance hébergée par l’Insee et indépendante des fournisseurs de cloud commerciaux.

Cette plateforme propose plusieurs services accessibles à tous les étudiants et aux agents du secteur public, quel que soit leur pays d’origine.

Vous y trouverez :
- [**Datalab Onyxia**](https://datalab.sspcloud.fr/) : un environnement de travail pour la data science, accessible depuis votre navigateur. Il permet de lancer des sessions Python, R, etc., avec des ressources CPU/GPU allouées à la demande.
- [**Un catalogue de formations**](https://www.sspcloud.fr/formation) en data science et en intelligence artificielle, accompagné d’exercices pratiques à réaliser directement sur Onyxia.
- [**Un agent conversationnel**](https://llm.lab.sspcloud.f), équivalent à ChatGPT, mais local et basé sur des modèles d’IA open source.

[Un espace de discussion Slack](${joinSlackUrl}) est également disponible pour vous accompagner et répondre à vos questions.

Tous ces services sont construits exclusivement à partir de logiciels libres — certains développés par notre équipe, comme [**Onyxia**](https://www.onyxia.sh/), d'autres simplement déployer par nos soins.`,

                presentationSectionTitle: "Bienvenue. Cette plateforme est la vôtre.",
                presentationSectionButtonLabel: "Découvrir le catalogue de formations",
                collaborationCardSectionTitle:
                    "La collaboration au sein de la communauté",
                gitlabCardTitle: "Gitlab et Github",
                gitlabCardParagraph:
                    "Travail collaboratif via l’utilisation de forge avec un système de contrôle de version",
                gitlabCardButtonLabel: "Se mettre à git",
                slackCardTitle: "Rejoindre la communauté Slack",
                slackCardParagraph:
                    "Une communauté active et enthousiaste à votre écoute. N’attendez plus, rejoignez nous pour échanger et posez vos questions !",
                slackCardButtonLabel: "Rejoindre le canal Slack",
                mimCardTitle: "Outils collaboratifs Mim-Libre",
                mimCardParagraph:
                    "Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de mutualisation inter-ministérielle.",
                mimCardButtonLabel: "Consulter le catalalogue Mim-Libre",
                contributionTitle: "Comment contribuer à la communauté ?",
                contributionParagraph: [
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
                contributionButtonLabel: "Contribuer",
                projectCardSectionTitle: "Les dernières actualités et projets",
                dataVisualCardTitle:
                    "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
                pokemonCardTitle:
                    "MLOps et Random Forest Clustering : démonstration avec les stastitiques des Pokémons.",
                kubernetesCardTitle:
                    "Atelier Kubernetes : Introduction et bonnes pratiques du déploiement Docker avec le SSP Cloud",
                webinaireCardTitle:
                    "L'infrastructure Kubernetes : webinaire d'introduction.",
                dataVisualBadgeLabel: "Projet",
                pokemonBadgeLabel: "Projet",
                kubernetesBadgeLabel: "Actualité",
                webinaireBadgeLabel: "Actualité",
            },
        },
        /* spell-checker: enable */
    },
);

export { useTranslation, resolveLocalizedString, useLang, useResolveLocalizedString };

export const evtLang = statefulObservableToStatefulEvt({
    statefulObservable: $lang,
});
