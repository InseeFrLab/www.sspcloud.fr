import type { EducationalResource } from "./-index";
import { id } from "tsafe";
import onyxia_svg_url from "./-assets/onyxia.svg";

export const sspcloud_docs = id<EducationalResource.Collection>({
    name: {
        en: "SSPCloud Documentation",
        fr: "Documentation du SSPCloud",
    },
    abstract: {
        en: "Discover and use the SSP Cloud services",
        fr: "Découverte et utilisation des services du SSP Cloud",
    },
    imageUrl: onyxia_svg_url,
    parts: [
        id<EducationalResource.Resource>({
            name: {
                en: "Getting Started",
                fr: "Premiers pas",
            },
            abstract: {
                en: "Quick tour of SSP Cloud: service catalog, launching and managing services, and where to get help.",
                fr: "Découverte rapide du SSP Cloud : catalogue des services, lancement et gestion des services, et où trouver de l'aide.",
            },
            authors: ["InseeFrLab"],
            lastUpdated: "2025-09-13",
            tags: ["discover", "learn", "Tutorial"],
            timeRequiredInMinutes: 6,
            articleUrl: {
                en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/index_en.md`,
                fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/index_fr.md`,
            },
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "Discover the Datalab",
                fr: "Découvrir le Datalab",
            },
            abstract: {
                en: "Core concepts, guiding principles and first steps on the platform.",
                fr: "Concepts clés, principes directeurs et premiers pas sur la plateforme.",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                id<EducationalResource.Resource>({
                    name: {
                        en: "Principles",
                        fr: "Principes",
                    },
                    abstract: {
                        en: "What Onyxia/SSP Cloud is, architectural principles and the project’s open approach.",
                        fr: "Ce qu’est Onyxia/SSP Cloud, les principes d’architecture et l’ouverture du projet.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["discover", "learn", "Tutorial"],
                    timeRequiredInMinutes: 8,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/principles_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/principles_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: {
                        en: "First steps",
                        fr: "Premiers pas",
                    },
                    abstract: {
                        en: "Hands-on first steps: navigate the service catalog and launch, open and delete services.",
                        fr: "Premiers pas pratiques : parcourir le catalogue, lancer, ouvrir et supprimer des services.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["discover", "learn", "Tutorial"],
                    timeRequiredInMinutes: 6,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/index_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/index_fr.md`,
                    },
                }),
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "Using the Datalab",
                fr: "Utiliser le Datalab",
            },
            abstract: {
                en: "Practical guides for version control, storage, secrets and service configuration.",
                fr: "Guides pratiques pour le contrôle de version, le stockage, les secrets et la configuration des services.",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                id<EducationalResource.Resource>({
                    name: { en: "Version control", fr: "Contrôle de version" },
                    abstract: {
                        en: "Use Git on Datalab: generate a token, configure GitHub and work via terminal or UI.",
                        fr: "Utiliser Git sur le Datalab : générer un jeton, configurer GitHub et travailler via terminal ou interface.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn", "Tutorial"],
                    timeRequiredInMinutes: 12,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/version-control_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/version-control_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Data storage", fr: "Stockage de données" },
                    abstract: {
                        en: "Work with MinIO (S3): upload, share, read/write from R/Python and manage service accounts.",
                        fr: "Utiliser MinIO (S3) : déposer, partager, lire/écrire depuis R/Python et gérer des comptes de service.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn", "Tutorial"],
                    timeRequiredInMinutes: 15,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/storage_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/storage_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Managing secrets", fr: "Gestion des secrets" },
                    abstract: {
                        en: "Store and inject credentials with Vault; expose them as environment variables in services.",
                        fr: "Stocker et injecter des identifiants avec Vault ; les exposer en variables d’environnement dans les services.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn", "Tutorial"],
                    timeRequiredInMinutes: 8,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/secrets_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/secrets_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: {
                        en: "Services configuration",
                        fr: "Configuration des services",
                    },
                    abstract: {
                        en: "Key service options: sharing, init scripts, security, Git and useful parameters.",
                        fr: "Paramètres clés des services : partage, scripts d’init, sécurité, Git et options utiles.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn", "Tutorial"],
                    timeRequiredInMinutes: 10,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/services-configuration_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/services-configuration_fr.md`,
                    },
                }),
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "Creating a Tutorial",
                fr: "Créer un tutoriel",
            },
            abstract: {
                en: "Guidance to design, structure and publish training materials with SSP Cloud.",
                fr: "Guide pour concevoir, structurer et publier des supports de formation avec le SSP Cloud.",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                id<EducationalResource.Resource>({
                    name: { en: "Introduction", fr: "Introduction" },
                    abstract: {
                        en: "Why notebooks and SSP Cloud work well for training; key benefits and caveats.",
                        fr: "Pourquoi les notebooks et le SSP Cloud sont adaptés à la formation ; bénéfices et limites.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["discover", "learn"],
                    timeRequiredInMinutes: 6,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/introduction_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/introduction_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Choose a material", fr: "Choisir un support" },
                    abstract: {
                        en: "Compare interactive materials for Python and R (Jupyter, VSCode, R Markdown, LearnR).",
                        fr: "Comparer les supports interactifs pour Python et R (Jupyter, VSCode, R Markdown, LearnR).",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn"],
                    timeRequiredInMinutes: 8,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/choose-materials_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/choose-materials_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Course structure", fr: "Structurer le cours" },
                    abstract: {
                        en: "Best practices to structure an effective hands-on course with notebooks.",
                        fr: "Bonnes pratiques pour structurer un cours efficace et pratique avec des notebooks.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn"],
                    timeRequiredInMinutes: 10,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/course-structure_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/course-structure_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Set up environment", fr: "Configurer l'environnement" },
                    abstract: {
                        en: "Build one-click training links with auto-launch and init scripts; publish your course.",
                        fr: "Construire des liens de formation en un clic avec auto-launch et scripts d'init ; publier votre cours.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn"],
                    timeRequiredInMinutes: 12,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/set-up-environment_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/tutorials/set-up-environment_fr.md`,
                    },
                }),
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "On Demand LLM",
                fr: "LLM à la Demande",
            },
            abstract: {
                en: "Access on-demand LLMs on SSP Cloud: concept, chat usage and APIs.",
                fr: "Accéder à des LLM à la demande sur le SSP Cloud : concepts, usage du tchat et API.",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                id<EducationalResource.Resource>({
                    name: { en: "Introduction", fr: "Introduction" },
                    abstract: {
                        en: "What the service provides, overview of the OpenWebUI/Ollama-based architecture and limits.",
                        fr: "Ce que propose le service, vue d'ensemble de l'architecture basée sur OpenWebUI/Ollama et limites.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["discover"],
                    timeRequiredInMinutes: 5,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/llm/introduction_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/llm/introduction_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Use chatbot", fr: "Utiliser le tchat" },
                    abstract: {
                        en: "Use OpenWebUI to chat with models via SSO; start a conversation and pick a model.",
                        fr: "Utiliser OpenWebUI pour discuter avec des modèles via SSO ; démarrer une conversation et choisir un modèle.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn"],
                    timeRequiredInMinutes: 3,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/llm/tchat_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/llm/tchat_fr.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: { en: "Use the API", fr: "Utiliser l'API" },
                    abstract: {
                        en: "Programmatic access: generate an API key and call OpenWebUI-compatible endpoints.",
                        fr: "Accès programmatique : générer une clé d’API et appeler les endpoints compatibles OpenWebUI.",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["learn"],
                    timeRequiredInMinutes: 8,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/llm/api_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/llm/api_fr.md`,
                    },
                }),
            ],
        }),
    ],
});
