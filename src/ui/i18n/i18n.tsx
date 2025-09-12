import { createI18nApi, declareComponentKeys } from "i18nifty";
import { languages, fallbackLanguage } from "./Language";
import { URLS } from "ui/URLS";
export { declareComponentKeys };

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString,
    /** For use outside of React */
    getTranslation,
} = createI18nApi<
    | import("ui/App/AppHeader").I18n
    | import("ui/App/AppFooter").I18n
    | import("ui/pages/page404/Page").I18n
    | import("ui/pages/catalog/Page").I18n
    | import("ui/pages/catalog/CatalogCard/CatalogCard").I18n
    | import("ui/pages/catalog/CatalogCard/DeploymentButton").I18n
    | import("ui/pages/catalog/CatalogCard/Flags").I18n
    | import("ui/pages/home/Page").I18n
>()(
    {
        languages,
        fallbackLanguage,
    },
    {
        en: {
            AppHeader: {
                platform: "Platform",
                "slack community": "Slack community",
                "the onyxia datalab": "The Onyxia Datalab",
                "trainings and tutorials": "Trainings and tutorials",
            },
            AppFooter: {
                "web site source": "Source Code of This Website",
            },
            Page404: {
                "not found": "Page not found",
            },
            Catalog: {
                search: "Search",
                trainings: "Trainings",
                "no documentation found": "No documentation or training found",
                "no result found": ({ forWhat }) => `No results found for ${forWhat}`,
                "check spelling": `Check spelling or widen the search`,
                "go back": "Go back",
                "show all": "Show all",
                contributors: "contributors",
                and: "and",
                "result for": ({ isPlural }) => `Result${isPlural ? "s" : ""} for`,
            },
            DeploymentButton: {
                "button label": ({ ideName }) =>
                    `Run${ideName === undefined ? "" : ` with ${ideName}`}`,
            },
            Flags: {
                en: "English",
                fr: "French",
                "also available in x": ({ x }) => <>Also available in {x}.</>,
                "available in x": ({ x }) => <>Available in {x}.</>,
                "only available in x": ({ x }) => <>Only available in {x}.</>,
            },
            CatalogCard: {
                open: "Open",
                read: "Read",
                run: "Run",
                and: "and",
                others: "others",
            },
            Home: {
                title: "Work, learn, and experiment in open data science and AI",
                subtitle:
                    "An open source platform for students and public sector professionals worldwide, to explore, train, and experiment in data science and AI.",
                whatsNeeded: "Learn more",
                serviceCard: "Services that you can access",
                trainingCard: "Training and tutorials",
                serviceCardButtonLabel: "Discover our catalogue",
                presentationSectionParagraph: `SSPCloud is a trusted infrastructure hosted by [Insee](${URLS.insee}) and fully independent from commercial cloud providers.

This platform offers several services accessible to all students and public sector professionals, regardless of their country of origin.

You will find:
- [**Datalab Onyxia**](https://datalab.sspcloud.fr/): a data science work environment accessible directly from your browser. It allows you to launch Python, R, and other sessions with on-demand CPU/GPU resources.
- [**A training catalog**](/catalog) in data science and artificial intelligence, with practical exercises that can be run directly on Onyxia.
- [**A conversational agent**](https://llm.lab.sspcloud.fr), similar to ChatGPT, but locally hosted and powered by open source AI models.

[A Slack discussion space](${URLS.slackUrl}) is also available to support you and answer your questions.

All these services are built entirely using open source software, some developed by our team, like [**Onyxia**](https://www.onyxia.sh/), others simply deployed and maintained by us.`,

                presentationSectionTitle: "Welcome. This platform is yours.",
                "AI chat metric description": "ChatGPT like Service",
                "slack metric desc": "Community Members",
            },
        },
        /* spell-checker: disable */
        fr: {
            AppHeader: {
                platform: "Plateforme",
                "slack community": "Communauté Slack",
                "the onyxia datalab": "Le datalab Onyxia",
                "trainings and tutorials": "Formations et tutoriels",
            },
            AppFooter: {
                "web site source": "Code Source du Site Web",
            },
            Page404: {
                "not found": "page non trouvée",
            },
            Catalog: {
                search: "Rechercher",
                trainings: "Formations",
                "no documentation found": "Aucune documentation ou formation non trouvée",
                "no result found": ({ forWhat }) =>
                    `Aucun résultat trouvé pour ${forWhat}`,
                "check spelling": `Vérifiez l'orthographe ou essayez d'élargir votre recherche.`,
                "go back": "Retourner à toutes les formations",
                "show all": "Afficher tous",
                contributors: "contributeurs",
                and: "et",
                "result for": ({ isPlural }) => `Résultat${isPlural ? "s" : ""} pour`,
            },
            DeploymentButton: {
                "button label": ({ ideName }) =>
                    `Lancer${ideName === undefined ? "" : ` avec ${ideName}`}`,
            },
            Flags: {
                en: "Anglais",
                fr: "Français",
                "also available in x": ({ x }) => <>Aussi disponible en {x}.</>,
                "available in x": ({ x }) => <>Disponible en {x}.</>,
                "only available in x": ({ x }) => <>Seulement disponible en {x}.</>,
            },
            CatalogCard: {
                open: "Ouvrir",
                read: "Lire",
                run: "Lancer",
                and: "et",
                others: "autres",
            },
            Home: {
                title: "Travaillez, apprenez, expérimentez en data science et en IA libres",
                subtitle:
                    "Une plateforme open source à destination des étudiants et agents publics, pour explorer, se former et expérimenter en data science et en IA.",
                whatsNeeded: "En savoir plus",
                serviceCard: "Services mis à disposition",
                trainingCard: "Formations et tutoriels",
                serviceCardButtonLabel: "Découvrir le catalogue",
                presentationSectionParagraph: `Le SSPCloud est une infrastructure de confiance hébergée par l’[Insee](${URLS.insee}) et indépendante des fournisseurs de cloud commerciaux.

Cette plateforme propose plusieurs services accessibles à tous les étudiants et aux agents du secteur public, quel que soit leur pays d’origine.

Vous y trouverez :
- [**Datalab Onyxia**](https://datalab.sspcloud.fr/) : un environnement de travail pour la data science, accessible depuis votre navigateur. Il permet de lancer des sessions Python, R, etc., avec des ressources CPU/GPU allouées à la demande.
- [**Un catalogue de formations**](/catalog) en data science et en intelligence artificielle, accompagné d’exercices pratiques à réaliser directement sur Onyxia.
- [**Un agent conversationnel**](https://llm.lab.sspcloud.f), équivalent à ChatGPT, mais local et basé sur des modèles d’IA open source.

[Un espace de discussion Slack](${URLS.slackUrl}) est également disponible pour vous accompagner et répondre à vos questions.

Tous ces services sont construits exclusivement à partir de logiciels libres, certains développés par notre équipe, comme [**Onyxia**](https://www.onyxia.sh/), d'autres simplement déployer par nos soins.`,

                presentationSectionTitle: "Bienvenue. Cette plateforme est la vôtre.",
                "AI chat metric description": "Chat style ChatGPT",
                "slack metric desc": "Membre dans le communauté",
            },
        },
        /* spell-checker: enable */
    },
);
