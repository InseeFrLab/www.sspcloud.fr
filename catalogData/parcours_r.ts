import type { EducationalResource } from "./_index";
import r_svg_url from "./_assets/r.svg";
import grenouille_jpg_url from "./_assets/grenouille.jpg";
import cover_jpg_url from "./_assets/cover.jpg";
import pollinisateur_jpg_url from "./_assets/pollinisateur.jpg";
import crabe_jpg_url from "./_assets/crabe.jpg";
import renard_jpg_url from "./_assets/renard.jpg";
import odonate_jpg_url from "./_assets/odonate.jpg";

export const parcours_r: EducationalResource.Collection = {
    name: "Parcours R",
    abstract: "Parcours de formation à R du pôle ministériel MTES-MCTRCT",
    imageUrl: r_svg_url,
    parts: [
        {
            name: "1. Découvrir R et RStudio",
            abstract:
                "Découvrir le fonctionnement de R, Aborder la dimension modulaire du logiciel, S’approprier l’interface graphique du logiciel, Être en capacité d’importer dans R un fichier CSV et de réaliser des calculs statistiques simples (somme, moyenne, table des fréquences)",
            authors: [
                "Thierry Zorn",
                "Murielle Lethrosne",
                "Vivien Roussez",
                "Pascal Irz",
            ],
            tags: ["discover", "Tutorial", "R", "Data Science Training"],
            imageUrl: grenouille_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M1&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_introduction-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
            articleUrl: "https://mtes-mct.github.io/parcours_r_socle_introduction/",
        },
        {
            name: "2. Préparer ses données avec R et le Tidyverse",
            abstract:
                "Être en capacité d’explorer les données, de les comprendre, de les structurer, de les croiser et les enrichir avec des données externes pour les préparer à des traitements statistiques. La préparation des données est une étape fondamentale pour faciliter la réalisation des analyses statistiques",
            authors: ["Maël Theulière", "Bruno Terseur"],
            tags: ["learn", "Tutorial", "R", "Data Science Training"],
            imageUrl: cover_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M2&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_preparation_des_donnees-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
            articleUrl:
                "https://mtes-mct.github.io/parcours_r_socle_preparation_des_donnees/",
        },
        {
            name: "3. Statistiques descriptives avec R",
            abstract:
                "Rappels théoriques sur les méthodes usuelles de statistiques uni- et bi-variées, mise en œuvre avec R, interprétation",
            authors: ["Solène Colin", "Vivien Roussez", "Pascal Irz"],
            tags: ["learn", "Tutorial", "R", "Data Science Training"],
            imageUrl: pollinisateur_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M3&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_statistiques_descriptives-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
            articleUrl:
                "https://mtes-mct.github.io/parcours_r_module_statistiques_descriptives/",
        },
        {
            name: "4. Analyse des données multi-dimensionnelles avec R",
            abstract:
                "Méthodologie pour évaluer, en fonction des caractéristiques des données, la pertinence des méthodes usuelles d'analyse multidimensionnelle (ACP, AFC, ACM, CAH). Mise en œuvre avec le package factoMiner. Sorties graphiques avec le package factoextra. Interprétation",
            authors: ["Vivien Roussez", "Pascal Irz"],
            tags: ["consolidate", "Tutorial", "R", "Data Science Training"],
            imageUrl: crabe_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M4&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_multi_dimensionnelles-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
            articleUrl:
                "https://mtes-mct.github.io/parcours_r_module_analyse_multi_dimensionnelles/",
        },
        {
            name: "5. Valoriser ses données avec R",
            abstract:
                "Utiliser les outils R pour produire des graphiques avec le package ggplot2. Produire des cartes en utilisant ggplot2 et sf. Produire des tableaux interactifs. Rendre interactifs des graphiques et des cartes",
            authors: ["Murielle Lethrosne", "Maël Theulière"],
            tags: ["consolidate", "Tutorial", "R", "Data Science Training"],
            imageUrl: renard_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M5&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_datavisualisation-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
            articleUrl: "https://mtes-mct.github.io/parcours_r_module_datavisualisation/",
        },
        {
            name: "7. Analyse spatiale",
            abstract:
                "Introduction aux données spatiales, lire et écrire des données spatiales, manipuler des donnés spatiales, créer des cartes.",
            authors: ["Murielle Lethrosne", "Maël Theulière"],
            tags: ["consolidate", "Tutorial", "R", "Data Science Training"],
            imageUrl: odonate_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M7&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_spatiale-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
            articleUrl: "https://mtes-mct.github.io/parcours_r_module_analyse_spatiale/",
        },
    ],
};
