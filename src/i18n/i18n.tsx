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
                "training courses with R": "R training courses",
                "training courses with python": "Python training courses",
                "trainings of data science": "Data science training courses",
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
                    "mutualis??e pour le traitement de donn??es ",
                    "statistiques et de datascience. Le datalab ",
                    "met ?? disposition des statisticiens et des ",
                    "data scientists de l?????tat un catalogue de ",
                    "services et un environnement de travail simple, ",
                    "rapide et collaboratif, permettant de lancer ",
                    "facilement ces outils et d???y connecter ses donn??es ",
                    "et son code. Au-del?? des ressources techniques, le ",
                    "projet repr??sente une opportunit?? pour les ",
                    "statisticiens publics de d??couvrir et d???adopter ",
                    "de nouvelles m??thodes de travail. Il est ",
                    "aussi utilis?? ?? des fins de formations et ",
                    "d???auto-formations.",
                ].join(""),

                "presentationSectionTitle": "A few words about onyxia",
                "presentationSectionButtonLabel": "More",
                "collaborationCardSectionTitle":
                    "Collaboration at the heart of the community",
                "gitlabCardTitle": "Gitlab and Github",
                "gitlabCardParagraph":
                    "Travail collaboratif via l???utilisation de forge avec un syst??me de contr??le de version et orchestration des processus de traitement de donn??es.",
                "gitlabCardButtonLabel": "See the Gitlab of SSP Cloud",
                "tchapCardTitle": "Join the Tchap community",
                "tchapCardParagraph":
                    "Une communaut?? active et enthousiaste ?? votre ??coute. N???attendez plus, rejoignez nous pour ??changer et posez vos questions !",
                "tchapCardButtonLabel": "Join the Tchap canal",
                "mimCardTitle": "Mim-Libre collaboration tools",
                "mimCardParagraph":
                    " Retrouvez en ligne des logiciels libres r??pondant aux besoins de collaboration et de mutualisation inter-minist??rielle.",
                "mimCardButtonLabel": "Consult the Mim-Libre catalog",
                "contributionTitle": "How to contribute to the community ?",
                "contributionParagraph": [
                    "Dans le cadre d'une collaboration publique, ",
                    "la plateforme et l???enti??ret?? de son contenu sont ",
                    "disponibles en open-source.  L???ensemble du projet a ",
                    "vocation ?? ??tre am??lior??e en fonction de votre ",
                    "exp??rience et de vos usages, nous comptons sur ",
                    "vos retours et vos contributions en participant au ",
                    "catalogue de service, ?? la documentation et aux ",
                    "formations mais aussi en pr??sentant vos projets ",
                    "r??alis??s avec le datalab.",
                ].join(""),
                "contributionButtonLabel": "Contribute",
                "projectCardSectionTitle": "The latest news and projects",
                "dataVisualCardTitle":
                    "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
                "pokemonCardTitle":
                    "MLOps et Random Forest Clustering : d??monstration avec les stastitiques des Pok??mons.",
                "kubernetesCardTitle":
                    "Atelier Kubernetes : Introduction et bonnes pratiques du d??ploiement Docker avec le SSP Cloud",
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
            "AppHeader": {
                "community": "Communaut??",
                "contribute": "Contribuer",
                "our GitLab forge": "Notre forge GitLab",
                "the onyxia datalab": "Le datalab Onyxia",
                "trainings and tutorials": "Formations et tutoriels",
            },
            "FourOhFour": {
                "not found": "page non trouv??e",
            },
            "Documentation": {
                "search": "Rechercher",
                "pageTitle": "Formations et tutoriels",
                "pageHelpTitle":
                    "D??couvrez et apprenez la datascience ?? votre rythme en fonction de votre besoin.",
                "pageHelpContentP1":
                    "Suivez des formations ou tutoriels interactifs et guid??s et",
                "pageHelpContentP2": "contribuer aux ressources de la communaut??.",
                "trainings": "Formations",
                "no documentation found": "Aucune documentation ou formation non trouv??",
                "no result found": ({ forWhat }) =>
                    `Aucun r??sultat trouv?? pour ${forWhat}`,
                "check spelling": `V??rifiez l'orthographe ou essayez d'??largir votre recherche.`,
                "go back": "Retourner ?? toutes les formations",
                "show all": "Afficher tous",
                "training courses with R": "Parcours de formation ?? R",
                "training courses with python": "Parcours de formation ?? Python",
                "trainings of data science": "Tutoriels de data science",
                "best practices": "Bonnes pratiques",
                "contributors": "contributeurs",
            },
            "DocumentationCard": {
                "open": "Ouvrir",
                "read": "Lire",
                "run": "Lancer",
                "and": "et",
                "others": "autres",
                "discover": "D??couvrir",
                "learn": "Apprendre",
                "consolidate": "Consolider",
                "deepen": "Approfondire",
            },
            "Home": {
                "title": "Espace communautaire pour la statistique publique.",
                "subtitle":
                    "Ici je trouve et je partage des ressources sur le traitement statistique et la datascience avec la communaut?? du SSP Cloud.",
                "whatsNeeded": "Ce dont vous avez besoin :",
                "serviceCard": "services mis ?? disposition",
                "projectCard": "projets / ateliers",
                "trainingCard": "formations / tutoriels en ligne",
                "serviceCardButtonLabel": "D??couvrir le catalogue",
                "projectCardButtonLabel": "Voir les actualit??s",
                "trainingCardButtonLabel": "Consulter le catalogue",
                "presentationSectionParagraph": [
                    "Onyxia est une plateforme libre service ",
                    "mutualis??e de traitement de donn??es ",
                    "statistiques et de datascience. Le datalab ",
                    "met ?? disposition aux statisticiens et aux ",
                    "data scientists de l?????tat un catalogue de ",
                    "services et un environnement de travail simple, ",
                    "rapide et collaboratif, permettant de lancer ",
                    "facilement ces outils et d???y connecter ses donn??es ",
                    "et son code. Au-del?? des ressources techniques, le ",
                    "projet repr??sente une opportunit?? pour les ",
                    "statisticiens publics de d??couvrir et d???adopter ",
                    "de nouvelles m??thodes de travail. Il est ",
                    "aussi utilis?? ?? des fins de formations et ",
                    "d???auto-formations.",
                ].join(""),

                "presentationSectionTitle": "Quelques mots ?? propos d'Onyxia",
                "presentationSectionButtonLabel": "En savoir plus",
                "collaborationCardSectionTitle":
                    "La collaboration au sein de la communaut??",
                "gitlabCardTitle": "Gitlab et Github",
                "gitlabCardParagraph":
                    "Travail collaboratif via l???utilisation de forge avec un syst??me de contr??le de version et orchestration des processus de traitement de donn??es.",
                "gitlabCardButtonLabel": "Voir le Gitlab du SSP Cloud",
                "tchapCardTitle": "Rejoindre la communaut?? Tchap",
                "tchapCardParagraph":
                    "Une communaut?? active et enthousiaste ?? votre ??coute. N???attendez plus, rejoignez nous pour ??changer et posez vos questions !",
                "tchapCardButtonLabel": "Rejoindre le canal Tchap",
                "mimCardTitle": "Outils collaboratifs Mim-Libre",
                "mimCardParagraph":
                    " Retrouvez en ligne des logiciels libres r??pondant aux besoins de collaboration et de mutualisation inter-minist??rielle.",
                "mimCardButtonLabel": "Consulter le catalalogue Mim-Libre",
                "contributionTitle": "Comment contribuer ?? la communaut?? ?",
                "contributionParagraph": [
                    "Dans le cadre d'une collaboration publique, ",
                    "la plateforme et l???enti??ret?? de son contenu sont ",
                    "disponibles en open-source.  L???ensemble du projet a ",
                    "vocation ?? ??tre am??lior??e en fonction de votre ",
                    "exp??rience et de vos usages, nous comptons sur ",
                    "vos retours et vos contributions en participant au ",
                    "catalogue de service, ?? la documentation et aux ",
                    "formations mais aussi en pr??sentant vos projets ",
                    "r??alis??s avec le datalab.",
                ].join(""),
                "contributionButtonLabel": "Contribuer",
                "projectCardSectionTitle": "Les derni??res actualit??s et projets",
                "dataVisualCardTitle":
                    "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
                "pokemonCardTitle":
                    "MLOps et Random Forest Clustering : d??monstration avec les stastitiques des Pok??mons.",
                "kubernetesCardTitle":
                    "Atelier Kubernetes : Introduction et bonnes pratiques du d??ploiement Docker avec le SSP Cloud",
                "webinaireCardTitle":
                    "L'infrastructure Kubernetes : webinaire d'introduction.",
                "dataVisualBadgeLabel": "Projet",
                "pokemonBadgeLabel": "Projet",
                "kubernetesBadgeLabel": "Actualit??",
                "webinaireBadgeLabel": "Actualit??",
            },
        },
        /* spell-checker: enable */
    },
);

export { useTranslation, resolveLocalizedString, useLang, useResolveLocalizedString };

export const evtLang = statefulObservableToStatefulEvt({
    "statefulObservable": $lang,
});
