import type { EducationalResource } from "./_index";
import git_png_url from "./_assets/git.png";

export const bonnes_pratiques_de_developpement_avec_git_et_r: EducationalResource.Collection =
    {
        name: "Bonnes pratiques de développement avec Git et R",
        abstract:
            "Formation au travail collaboratif et au contrôle de version à l'aide des logiciels Git et RStudio",
        imageUrl: git_png_url,
        parts: [
            {
                name: "Version courte",
                abstract:
                    "Version 1 jour de la formation aux bonnes pratiques avec Git et R, axée autour de l'apprentissage de Git, de la qualité du code et de la structure des projets statistiques.",
                authors: ["Romain Avouac", "Lino Galiana"],
                tags: ["discover", "consolidate", "Best Practices", "R", "Tutorial"],
                imageUrl: git_png_url,
                articleUrl:
                    "https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/slides/light.html",
            },
            {
                name: "Version complète",
                abstract:
                    "Version 2 jours de la formation aux bonnes pratiques avec Git et R, axée autour des notions de reproductibilité et de collaboration.",
                authors: ["Lino Galiana", "Romain Avouac"],
                tags: ["discover", "consolidate", "Best Practices", "R", "Tutorial"],
                imageUrl: git_png_url,
                articleUrl:
                    "https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/slides/complete.html",
            },
        ],
    };
