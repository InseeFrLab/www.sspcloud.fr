import type { EducationalResourceDirectory } from "./__index";
import python_jpg_url from "./_assets/python.jpg";

export const mise_en_production_de_projets_de_data_science: EducationalResourceDirectory =
    {
        name: "Mise en production de projets de data science",
        abstract:
            "Un cours de 3e année de l'ENSAE pour découvrir les enjeux du passage d'un projet expérimental vers sa prochaine étape: la mise en production",
        imageUrl: python_jpg_url,
        parts: [
            {
                name: "Introduction",
                abstract:
                    "Présentation des principales notions développées dans ce cours, de la raison d'être des bonnes pratiques et des enjeux de la mise en production.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: python_jpg_url,
                articleUrl:
                    "https://ensae-reproductibilite.github.io/website/chapters/introduction.html",
            },
            {
                name: "Révision des bases pour bien commencer",
                abstract:
                    "Des rappels sur le terminal Linux et Git, deux outils essentiels pour le data scientist qui s'intéresse à la mise en production.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: python_jpg_url,
                parts: [
                    {
                        name: "Linux 101",
                        abstract: "Introduction à l'utilisation du terminal Linux.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/linux101.html",
                    },
                    {
                        name: "Versionner son code et travailler collaborativement avec Git",
                        abstract:
                            "Présentation des principes du contrôle de version et du travail collaboratif avec Git et son écosystème.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/git.html",
                    },
                ],
            },
            {
                name: "Bonnes pratiques de développement",
                abstract:
                    "Cette partie du cours présente un ensemble de conseils et conventions utiles pour simplifier la mise en production de projets de data science.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: python_jpg_url,
                parts: [
                    {
                        name: "Qualité du code",
                        abstract:
                            "Présentation des standards permettant de produire du code lisible et maintenable, et d’outils pour faciliter leur adoption.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/code-quality.html",
                    },
                    {
                        name: "Structure des projets",
                        abstract:
                            "Présentation des principes d'architecture permettant de produire des projets modulaires et maintenables, et d'outils pour faciliter leur adoption.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/projects-architecture.html",
                    },
                    {
                        name: "Traitement des données volumineuses",
                        abstract:
                            "Présentation des architectures informatiques et des outils logiciels permettant de faciliter le traitement de données volumineuses.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/big-data.html",
                    },
                    {
                        name: "Portabilité",
                        abstract:
                            "Présentation des principes et des techniques permettant de rendre un projet exécutable sur différents environnements.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/portability.html",
                    },
                ],
            },
            {
                name: "Mise en production",
                abstract:
                    "Cette partie du cours présente les enjeux et la démarche à adopter pour mettre en production une application de data science.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: python_jpg_url,
                parts: [
                    {
                        name: "YAML 101",
                        abstract:
                            "Introduction à l’utilisation de YAML, un langage lisible et expressif devenu incontournable dans l’éco-système DevOps.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/yaml101.html",
                    },
                    {
                        name: "Déploiement",
                        abstract:
                            "Principes de valorisation et de déploiement d'une application dans un environnement de production.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/deployment.html",
                    },
                    {
                        name: "Introduction aux enjeux du MLOps",
                        abstract:
                            "Introduction aux principes du MLOps pour le passage en production des applications de machine learning.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: python_jpg_url,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/mlops.html",
                    },
                ],
            },
            {
                name: "Application",
                abstract:
                    "Une application fil rouge pour illustrer l'intérêt d'appliquer graduellement les bonnes pratiques dans une optique de mise en production d'une application de data science.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: python_jpg_url,
                deploymentUrl:
                    "https://ensae-reproductibilite.github.io/website/chapters/application.html",
            },
        ],
    };
