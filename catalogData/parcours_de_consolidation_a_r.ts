import type { EducationalResource } from "./_index";
import r_svg_url from "./_assets/r.svg";

export const parcours_de_consolidation_a_r: EducationalResource.Collection = {
    name: "Parcours de consolidation à R",
    abstract:
        "Formation avancée à l'utilisation de R pour des étudiants et professionnels des sciences sociales (économie, géographie, sociologie, etc.). Les séquences visent à consolider les compétences sur des aspects avancés du langage R.",
    imageUrl: r_svg_url,
    parts: [
        {
            name: "Devenir autonome en R",
            abstract:
                "Ce module vise à renforcer les compétences nécessaires pour devenir autonome avec R, y compris la compréhension des fonctions, la résolution des erreurs et l'auto-apprentissage à travers des ressources en ligne.",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence1/Sequence_1_Devenir_autonome_en_R.html",
        },
        {
            name: "Se familiariser avec les objets R",
            abstract:
                "Une introduction approfondie aux différents objets R, tels que les vecteurs, les matrices, les dataframes, et les listes, et leur utilisation pour des analyses complexes.",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence2/Sequence_2_Manipuler_des_donnees_simples.html",
        },
        {
            name: "Manipuler des données",
            abstract:
                "Techniques avancées pour manipuler des données avec `dplyr` et autres packages du tidyverse, permettant de nettoyer, filtrer, et transformer des jeux de données.",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence3/Sequence_3_Manipuler_des_donnees_complexes.html",
        },
        {
            name: "Produire et exporter des résultats",
            abstract:
                "Comment générer et exporter des résultats d'analyse, sous forme de tableaux et de graphiques.",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence3/Sequence_3_Manipuler_des_donnees_complexes.html",
        },
        {
            name: "Lire des données aux formats variés",
            abstract:
                "Cette séquence permettra de se pencher plus en détail sur les formats les plus courants et sur la façon de lire ces fichiers avec `R`",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence5/Sequence_5_Lire_des_donnees_aux_formats_varies.html",
        },
        {
            name: "Modulariser les analyses",
            abstract:
                "Introduction aux bonnes pratiques pour structurer et modulariser les analyses avec `R`, en utilisant des fonctions et scripts réutilisables.",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence6/Sequence_6_modulariser_les_analyses.html",
        },
        {
            name: "Projet statistique : structurer ses analyses",
            abstract:
                "Ce module offre des conseils sur la structuration d'un projet statistique complet, en abordant la collecte des données, le nettoyage, l'analyse et la communication des résultats.",
            authors: ["inseefrlab"],
            tags: ["consolidate", "learn", "Tutorial", "R", "Data Science Training"],
            timeRequiredInMinutes: 180,
            imageUrl: r_svg_url,
            articleUrl:
                "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence7/Sequence_7_projet_statistique_structurer_ses_analyses.html",
        },
    ],
};
