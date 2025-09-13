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
                en: "TODO",
                fr: "TODO",
            },
            authors: ["InseeFrLab"],
            lastUpdated: "2025-09-13",
            tags: ["discover", "learn", "Tutorial"],
            timeRequiredInMinutes: 3,
            articleUrl: {
                en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/index_en.md`,
                fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/index_fr.md`,
            },
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "Discover the Datalab",
                fr: "Discover the Datalab",
            },
            abstract: {
                en: "TODO",
                fr: "TODO",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                id<EducationalResource.Resource>({
                    name: {
                        en: "Principles",
                        fr: "Principes",
                    },
                    abstract: {
                        en: "TODO",
                        fr: "TODO",
                    },
                    authors: ["InseeFrLab"],
                    lastUpdated: "2025-09-13",
                    tags: ["discover", "learn", "Tutorial"],
                    timeRequiredInMinutes: 5,
                    articleUrl: {
                        en: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/principles_en.md`,
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud_docs/content/principles_fr.md`,
                    },
                }),
                // TODO add "first step/premiers pas"
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "Using the Datalab",
                fr: "Utiliser le Datalab",
            },
            abstract: {
                en: "TODO",
                fr: "TODO",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                // TODO add "version control", "Data Storage", "Secret Management" and "Service configuration"
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "Creating a Tutorial",
                fr: "Crée un Tuto",
            },
            abstract: {
                en: "TODO",
                fr: "TODO",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                // TODO...
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                en: "On Demand LLM",
                fr: "LLM à la Demande",
            },
            abstract: {
                en: "TODO",
                fr: "TODO",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                // TODO
            ],
        }),
    ],
});
