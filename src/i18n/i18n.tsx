import { createI18nApi } from "i18nifty";
import { languages, fallbackLanguage } from "./Language";
import { statefulObservableToStatefulEvt } from "powerhooks/tools/StatefulObservable/statefulObservableToStatefulEvt";

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
    | typeof import("pages/Documentation/DocumentationCard").i18n
    | typeof import("pages/Home").i18n
>()(
    {
        languages,
        fallbackLanguage,
    },
    {
        "en": {
            "App": {
                "web site source": "Source code of this website",
                "trainings database": "Trainings database",
            },
            "AppHeader": {
                "community": "Community",
                "contribute": "Contribute",
                "our GitLab forge": "Our GitLab forge",
                "the onyxia datalab": "The Onyxia Datalab",
                "trainings and tutorials": "Trainings and tutorials",
            },
            "FourOhFour": {
                "not found": "Page not found",
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
                "no result found": ({ forWhat }) => `No results found for ${forWhat}`,
                "check spelling": `Check spelling or widen the search`,
                "go back": "Go back",
                "show all": "Show all",
                "discover the datalab": "Discover the Datalab",
                "training courses with R": "R training courses",
                "training courses with python": "Python training courses",
                "training courses in data science": "Data science training courses",
                "best practices": "Best practices",
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
            "Home": {
                "title":
                    "Platform for Open Collaboration in European Statiscal System and Beyond",
                "subtitle":
                    "Here I find and share resources about statistical analysis an Data Science with the community",
                "whatsNeeded": "What you need :",
                "serviceCard": "the services that you can access",
                "projectCard": "projects / workshop",
                "trainingCard": "training / online tutorials",
                "serviceCardButtonLabel": "Discover our catalogue",
                "projectCardButtonLabel": "News letter",
                "trainingCardButtonLabel": "Consult the catalogue",
                "presentationSectionParagraph": [                    
                    "Onyxia is an open-source software designed ",
                    "to create self-service and shared datalab ",
                    "platforms for processing statistical data and ",
                    "data science. This software enables the establishment ",
                    "of a catalog of services and a simple, fast, ",
                    "and collaborative working environment for ",
                    "statisticians and data scientists. With Onyxia, ",
                    "users can easily launch tools, connect their data ",
                    "and code, and explore new working methods. ",
                    "It also serves as a valuable resource ",
                    "for training and self-training purposes. ",
                ].join(""),

                "presentationSectionTitle": "Powered by Onyxia",
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
        },
        /* spell-checker: disable */
        "fr": {
            "App": {
                "web site source": "Code source du site web",
                "trainings database": "Base de données des formations",
            },
            "AppHeader": {
                "community": "Communauté",
                "contribute": "Contribuer",
                "our GitLab forge": "Notre forge GitLab",
                "the onyxia datalab": "Le datalab Onyxia",
                "trainings and tutorials": "Formations et tutoriels",
            },
            "FourOhFour": {
                "not found": "page non trouvée",
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
                "deepen": "Approfondir",
            },
            "Home": {
                "title": "Plateforme de collaboration ouverte pour le Système Statistique Européen et au-delà",
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
                  
                    "Onyxia est un logiciel open-source conçu ",
                    "pour créer des plateformes de traitement ",
                    "en libre-service et mutualisées pour ",
                    "le traitement des données statistiques ",
                    "et de la data science. Ce logiciel permet de ",
                    "services et un environnement de travail simple, ",
                    "rapide et collaboratif, permettant de lancer ",
                    "mettre en place un catalogue de services ",
                    "et un environnement de travail simple, ",
                    "rapide et collaboratif pour les statisticiens et ",
                    "les data scientists. Avec Onyxia, les utilisateurs ",
                    "peuvent facilement lancer des outils, ",
                    "connecter leurs données et leur code, ",
                    "et explorer de nouvelles méthodes de travail. ",
                ].join(""),

                "presentationSectionTitle": "Propulsée par Onyxia",
                "presentationSectionButtonLabel": "En savoir plus",
                "collaborationCardSectionTitle":
                    "La collaboration au sein de la communauté",
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
                    "Retrouvez en ligne des logiciels libres répondant aux besoins de collaboration et de mutualisation inter-ministérielle.",
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
        },
        /* spell-checker: disable */
        "it": {
            "App": {
                "web site source": "Codice sorgente del sito web",
                "trainings database": "Database dei corsi di formazione",
            },
            "AppHeader": {
                "community": "Comunità",
                "contribute": "Contribuire",
                "our GitLab forge": "La nostra piattaforma Gitlab",
                "the onyxia datalab": "Il datalab Onyxia",
                "trainings and tutorials": "Formazioni e tutorials",
            },
            "FourOhFour": {
                "not found": "Pagina non trovata",
            },
            "Documentation": {
                "search": "Ricercare",
                "pageTitle": "Formazioni e tutorial",
                "pageHelpTitle":
                    "Scopri e impara la data science al tuo ritmo, in base alle tue esigenze.",
                "pageHelpContentP1":
                    "Segui corsi o tutorial interattivi e guidati e",
                "pageHelpContentP2": "contribuisci alle risorse della comunità.",
                "trainings": "Formazioni",
                "no documentation found": "Nessuna documentazione o formazione trovata",
                "no result found": ({ forWhat }) =>
                    `Nessun risultato trovato per ${forWhat}`,
                "check spelling": `Controlla l'ortografia o prova ad ampliare la tua ricerca.`,
                "go back": "Tornare a tutte le formazioni",
                "show all": "Mostrare tutti",
                "discover the datalab": "Scoprire il Datalab",
                "training courses with R": "Percorso di formazione su R",
                "training courses with python": "Percorso di formazione su Python",
                "training courses in data science": "Tutorial di data science",
                "best practices": "Best practices, deployment e automazione",
                "contributors": "Contributori",
            },
            "DocumentationCard": {
                "open": "Aprire",
                "read": "Leggere",
                "run": "Avviare",
                "and": "e",
                "others": "altri",
                "discover": "Scoprire",
                "learn": "Imparare",
                "consolidate": "Consolidare",
                "deepen": "Approfondire",
            },
            "Home": {
                "title": "Spazio comunitario per la statistica pubblica",
                "subtitle":
                    "Qui trovo e condivido risorse sul trattamento statistico e la data science con la comunità del SSP Cloud.",
                "whatsNeeded": "Ciò di cui hai bisogno :",
                "serviceCard": "Servizi messi a disposizione",
                "projectCard": "Progetti / Workshop",
                "trainingCard": "Formazioni / Online tutorial",
                "serviceCardButtonLabel": "Scoprire il catalogo",
                "projectCardButtonLabel": "Vedere le notizie",
                "trainingCardButtonLabel": "Consultare il catalogo",
                "presentationSectionParagraph": [
                    "Onyxia è una piattaforma self-service ",
                    "condivisa per il trattamento di dati ",
                    "statistici e di data science. Il datalab ",
                    "mette a disposizione degli statistici e dei ",
                    "data scientist dello Stato un catalogo di ",
                    "servizi e un ambiente di lavoro semplice, ",
                    "veloce e collaborativo, che permette di avviare ",
                    "facilmente questi strumenti e collegarvi i propri dati ",
                    "e il proprio codice. Oltre alle risorse tecniche, il ",
                    "progetto rappresenta un'opportunità per gli ",
                    "statistici pubblici di scoprire e adottare ",
                    "nuovi metodi di lavoro. È anche ",
                    "utilizzato per scopi di formazione e ",
                    "di autoformazione.",
                ].join(""),

                "presentationSectionTitle": "Alcune parole su Onyxia",
                "presentationSectionButtonLabel": "Per saperne di più",
                "collaborationCardSectionTitle":
                    "La collaborazione nella comunità",
                "gitlabCardTitle": "Gitlab e Github",
                "gitlabCardParagraph":
                    "Lavoro collaborativo con l'uso di una piattaforma con un sistema di controllo di versione e orchestrazione dei processi di trattemento dei dati",
                "gitlabCardButtonLabel": "Vedere il Gitlab del SSP Cloud",
                "tchapCardTitle": "Unirsi alla comunità Tchap",
                "tchapCardParagraph":
                    "Una comunità attiva e entusiasta è pronta ad ascoltarti. Non aspettare oltre, unisciti a noi per scambiare informazioni e porre domande!",
                "tchapCardButtonLabel": "Unirsi alla comunità Tchap",
                "mimCardTitle": "Strumenti collaborativi Mim-Libre",
                "mimCardParagraph":
                    "Trova online software open source che soddisfano le esigenze di collaborazione e condivisione tra i ministeri.",
                    "mimCardButtonLabel": "Consultare il catalalogo Mim-Libre",
                "contributionTitle": "Come contribuire alla comunità ?",
                "contributionParagraph": [
                    "Nel contesto di una collaborazione pubblica, ",
                    " la piattaforma e il suo contenuto intero sono ",
                    "disponibili in open source. L'intero progetto è ",
                    "destinato a essere migliorato sulla base della vostra ",
                    "esperienza e dei vostri utilizzi. Contiamo sui ",
                    "vvostri feedback e contributi partecipando al ",
                    "catalogo dei servizi, alla documentazione e alla ",
                    "formazione, ma anche presentando i vostri progetti ",
                    "realizzati con il datalab.",
                ].join(""),
                "contributionButtonLabel": "Contribuire",
                "projectCardSectionTitle": "Le ultime notizie e progetti",
                "dataVisualCardTitle":
                    "Datavisualisazione: Spostamenti della popolazione legati al lockdown di marzo 2020",
                "pokemonCardTitle":
                    "MLOps e clustering con Random Forest: dimostrazione con le statistiche dei Pokemon",
                "kubernetesCardTitle":
                    "Workshop Kubernetes: Introduzione e best practices per il deployment di Docker con il SSP Cloud",
                "webinaireCardTitle":
                    "L'infrastruttura Kubernetes: webinar introduttivo",
                "dataVisualBadgeLabel": "Progetto",
                "pokemonBadgeLabel": "Progetto",
                "kubernetesBadgeLabel": "Notizie",
                "webinaireBadgeLabel": "Notizie",
            },
        },
        /* spell-checker: enable */
    },
);

export { useTranslation, resolveLocalizedString, useLang, useResolveLocalizedString };

export const evtLang = statefulObservableToStatefulEvt({
    "statefulObservable": $lang,
});
