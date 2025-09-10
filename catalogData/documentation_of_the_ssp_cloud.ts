import type { EducationalResource } from "./-index";
import onyxia_svg_url from "./-assets/onyxia.svg";
import { id } from "tsafe";

export const documentation_of_the_ssp_cloud_alt: EducationalResource.Collection = {
    name: {
        fr: "Documentation du SSP Cloud",
        en: "Documentation of the SSP Cloud",
    },
    abstract: {
        fr: "Découverte et utilisation des services du SSP Cloud",
        en: "Discover and use the SSP Cloud services",
    },
    imageUrl: onyxia_svg_url,
    parts: [
        id<EducationalResource.Collection>({
            name: {
                fr: "Découvrir le datalab",
                en: "Discover the datalab",
            },
            abstract: {
                fr: "Découverte et utilisation des services du SSP Cloud",
                en: "Discover and use the SSP Cloud services",
            },
            imageUrl: onyxia_svg_url,
            parts: [
                id<EducationalResource.Resource>({
                    name: {
                        fr: "Principes",
                        en: "Principles",
                    },
                    abstract: {
                        en: "You’ll learn that Onyxia is an open, cloud-native platform that centralizes infrastructure, methods, and knowledge for public-sector data science.",
                        fr: "Tu apprendras qu’Onyxia est une plateforme ouverte et cloud-native qui mutualise l’infrastructure, les méthodes et les connaissances pour la data science dans le secteur public.",
                    },
                    authors: ["Inseefrlab"],
                    tags: [],
                    imageUrl: onyxia_svg_url,
                    articleUrl: {
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud/index_fr.md`,
                        en: `${import.meta.env.BASE_URL}documents/sspcloud/index_en.md`,
                    },
                }),
                id<EducationalResource.Resource>({
                    name: {
                        fr: "Premier pas",
                        en: "FirstSteps",
                    },
                    abstract: {
                        en: `This document is a beginner’s guide to the SSP Cloud (an open instance of Onyxia), explaining how to use its service catalog, launch and manage services, handle data responsibly, and access support.`,
                        fr: "Ce document est un guide d’introduction au SSP Cloud (une instance ouverte d’Onyxia).  Il explique comment utiliser son catalogue de services, lancer et gérer des services, manipuler les données de manière responsable et accéder au support.",
                    },
                    authors: ["Inseefrlab"],
                    tags: [],
                    imageUrl: onyxia_svg_url,
                    articleUrl: {
                        fr: `${import.meta.env.BASE_URL}documents/sspcloud/index_fr.md`,
                        en: `${import.meta.env.BASE_URL}documents/sspcloud/index_en.md`,
                    },
                }),
            ],
        }),
        id<EducationalResource.Collection>({
            name: {
                fr: "Utiliser le datalab",
                en: "Using the datalb",
            },
            abstract: {
                en: "Learn how to use the Onyxia Datalab instance of the SSPCloud!",
                fr: "Apprenez à utiliser l'instance Onyxia Datalab du SSPCloud",
            },
            imageUrl: onyxia_svg_url,
            parts: [],
        }),
        id<EducationalResource.Collection>({
            name: {
                fr: "Crée un tuto",
                en: "Create a tutorial",
            },
            abstract: {
                en: "Learn how to create a tutorial and publish it on this website",
                fr: "Apprenez comment Crée une tuto et le publier sur ce website",
            },
            imageUrl: onyxia_svg_url,
            parts: [],
        }),
        id<EducationalResource.Collection>({
            name: {
                fr: "LLM à la demande",
                en: "On demand LLM",
            },
            abstract: {
                fr: "Presentation de notre service LLM à la ChatGPT",
                en: "Introduction of our LLM service that resemble ChatGPT",
            },
            imageUrl: onyxia_svg_url,
            parts: [],
        }),
    ],
};
