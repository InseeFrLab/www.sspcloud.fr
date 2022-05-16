import { createI18nApi } from "i18nifty";
import { languages, fallbackLanguage } from "./Language";

export const {
	useTranslation,
	resolveLocalizedString,
	useLang,
	evtLang,
	useResolveLocalizedString
} = createI18nApi<
	| typeof import("app/App/AppHeader").i18n
	| typeof import("app/pages/FourOhFour").i18n
	| typeof import("app/pages/Documentation/Documentation").i18n
	| typeof import("app/pages/Documentation/DocumentationCard").i18n
	| typeof import("app/pages/Home").i18n
>()(
	{
		languages,
		fallbackLanguage,
		"doPersistLanguageInLocalStorage": true
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
			}
		},
		/* spell-checker: disable */
		"fr": {
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
				"no documentation found": "Aucune documentation ou formation non trouvé",
				"no result found": ({ forWhat }) => `Aucun résultat trouvé pour ${forWhat}`,
				"check spelling": `Vérifiez l'orthographe ou essayez d'élargir votre recherche.`,
				"go back": "Retourner à toutes les formations",
				"show all": "Afficher tous",
				"training courses with R": "Parcours de formation à R",
				"training courses with python": "Parcours de formation à Python",
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
				"discover": "Découvrir",
				"learn": "Apprendre",
				"consolidate": "Consolider",
				"deepen": "Approfondire",
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

			}
		}
		/* spell-checker: enable */
	}
);