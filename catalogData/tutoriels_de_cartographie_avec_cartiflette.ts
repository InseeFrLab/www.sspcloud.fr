import type { EducationalResource } from "./_index";
import cartiflette_png_url from "./_assets/cartiflette.png";

export const tutoriels_de_cartographie_avec_cartiflette: EducationalResource.Collection =
    {
        name: "Tutoriels de cartographie avec cartiflette",
        abstract:
            "Une série de tutoriels pour découvrir la manière dont cartiflette simplifie la récupération de fonds de carte de l'IGN pour la cartographie en Python",
        imageUrl: cartiflette_png_url,
        parts: [
            {
                name: "Créer une carte consolidée des arrondissements et des communes",
                abstract:
                    "Un tutoriel pas à pas pour construire une carte de la densité de Velib dans la région francilienne",
                authors: ["Lino Galiana"],
                imageUrl: cartiflette_png_url,
                tags: ["consolidate", "deepen", "Data Science Training", "Tutorial"],
                articleUrl:
                    "https://inseefrlab.github.io/cartiflette-website/use-case/usecase1.html",
            },
            {
                name: "Faire une carte avec les DROM rapprochés grâce à cartiflette",
                abstract:
                    "Un tutoriel pas à pas pour construire une carte comparant la taille des élevages à la population dans chaque département",
                authors: ["Lino Galiana"],
                imageUrl: cartiflette_png_url,
                tags: ["consolidate", "deepen", "Data Science Training", "Tutorial"],
                articleUrl:
                    "https://inseefrlab.github.io/cartiflette-website/use-case/usecase2.html",
            },
        ],
    };
