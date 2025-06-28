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
    | typeof import("pages/Examples").i18n
    | typeof import("components/ExamplesCard/ExamplesCard").i18n
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
                platform: "Hosting",
                "slack community": "Developer Community",
                "the onyxia datalab": "Hosting Dashboard",
                "trainings and tutorials": "Documentation & Guides",
                examples: "Examples",
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
                title: "Affordable hosting solutions for startups and personal projects",
                subtitle:
                    "Free and low-cost hosting solutions with GPU acceleration for generative AI. Perfect for developers, startups, and creative projects.",
                whatsNeeded: "Learn more",
                serviceCard: "hosting solutions available",
                projectCard: "Use cases",
                trainingCard: "documentation / tutorials",
                serviceCardButtonLabel: "Explore our services",
                projectCardButtonLabel: "View examples",
                trainingCardButtonLabel: "View documentation",
                presentationSectionParagraph: `Braden's Bay is a modern hosting platform designed specifically for developers and startups who need reliable, affordable infrastructure.

Our platform offers flexible hosting solutions that scale with your needs, from personal projects to enterprise applications.

What we offer:
- [**Free & Low-Cost Hosting**](https://bradensbay.com/hosting): Static sites, web applications, and databases with generous free tiers and affordable upgrade options.
- [**GPU-Accelerated AI Hosting**](https://bradensbay.com/ai): Dedicated GPU instances for machine learning, AI model training, and generative AI applications.
- [**Developer-Friendly Tools**](https://bradensbay.com/tools): Easy deployment, CI/CD integration, monitoring, and collaboration features.

[Join our community](${joinSlackUrl}) to connect with other developers and get support for your projects.

All our services are built on modern, reliable infrastructure with 99.9% uptime and global edge deployment for optimal performance.`,

                presentationSectionTitle: "Welcome to affordable hosting.",
                presentationSectionButtonLabel: "Explore our hosting plans",
                collaborationCardSectionTitle: "Tools and integrations for developers",
                gitlabCardTitle: "Git Integration",
                gitlabCardParagraph:
                    "Seamless integration with GitHub, GitLab, and other version control systems for automated deployments.",
                gitlabCardButtonLabel: "Set up Git deployment",
                slackCardTitle: "Developer Community",
                slackCardParagraph:
                    "Join our active community of developers building amazing projects. Get help, share ideas, and collaborate!",
                slackCardButtonLabel: "Join our community",
                mimCardTitle: "Development Tools",
                mimCardParagraph:
                    "Access to modern development tools, monitoring, analytics, and collaboration features for your projects.",
                mimCardButtonLabel: "Explore developer tools",
                contributionTitle: "Build with the community",
                contributionParagraph: [
                    "Braden's Bay is built for developers, by developers. ",
                    "We believe in transparent pricing, excellent support, ",
                    "and providing the tools you need to bring your ideas to life. ",
                    "Share your projects, get feedback, and help others in our ",
                    "growing community of creators and innovators.",
                ].join(""),
                contributionButtonLabel: "Join the community",
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
            Examples: {
                title: "Examples & Live Demos",
                subtitle:
                    "Explore interactive demos and tools built on Braden's Bay platform. Try our AI-powered development tools and see what's possible.",
            },
            ExamplesCard: {
                examplesCardSectionTitle: "Examples and Tools",
                codelingoCardTitle: "CodeLingo",
                codelingoCardParagraph:
                    "Interactive coding platform with AI-powered assistance for learning and building projects.",
                codelingoCardButtonLabel: "Try CodeLingo",
                promptCardTitle: "Prompt Lab",
                promptCardParagraph:
                    "Advanced prompt engineering and AI experimentation platform for developers and researchers.",
                promptCardButtonLabel: "Launch Prompt Lab",
            },
        },
        /* spell-checker: disable */
        fr: {
            App: {
                "web site source": "Code source du site web",
                "trainings database": "Base de données des formations",
            },
            AppHeader: {
                platform: "Hébergement",
                "slack community": "Communauté Développeur",
                "the onyxia datalab": "Tableau de Bord Hébergement",
                "trainings and tutorials": "Documentation & Guides",
                examples: "Exemples",
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
                title: "Solutions d'hébergement abordables pour startups et projets personnels",
                subtitle:
                    "Solutions d'hébergement gratuites et à bas coût avec accélération GPU pour l'IA générative. Parfait pour les développeurs, startups et projets créatifs.",
                whatsNeeded: "En savoir plus",
                serviceCard: "solutions d'hébergement disponibles",
                projectCard: "cas d'usages",
                trainingCard: "documentation / tutoriels",
                serviceCardButtonLabel: "Découvrir nos services",
                projectCardButtonLabel: "Voir les exemples",
                trainingCardButtonLabel: "Consulter la documentation",
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
            Examples: {
                title: "Exemples et Démos en Direct",
                subtitle:
                    "Explorez des démos interactives et des outils construits sur la plateforme Braden's Bay. Essayez nos outils de développement alimentés par l'IA.",
            },
            ExamplesCard: {
                examplesCardSectionTitle: "Exemples et Outils",
                codelingoCardTitle: "CodeLingo",
                codelingoCardParagraph:
                    "Plateforme de codage interactive avec assistance IA pour apprendre et construire des projets.",
                codelingoCardButtonLabel: "Essayer CodeLingo",
                promptCardTitle: "Laboratoire Prompt",
                promptCardParagraph:
                    "Plateforme avancée d'ingénierie de prompts et d'expérimentation IA pour développeurs et chercheurs.",
                promptCardButtonLabel: "Lancer Prompt Lab",
            },
        },
        /* spell-checker: enable */
    },
);

export { useTranslation, resolveLocalizedString, useLang, useResolveLocalizedString };

export const evtLang = statefulObservableToStatefulEvt({
    statefulObservable: $lang,
});
