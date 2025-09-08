import type { EducationalResource } from "./_index";
import btb_png_url from "./_assets/btb.png";

export const carroyage_et_lissage_spatial_sur_r: EducationalResource.Collection = {
    name: "Carroyage et lissage spatial sur R",
    abstract:
        "Apprendre à carroyer les informations, réaliser des lissages spatiaux et calculer des indicateurs à partir des données carroyées sur R",
    imageUrl: btb_png_url,
    parts: [
        {
            name: "Introduction",
            abstract:
                "Présentation générale de la formation et ressources additionnelles",
            authors: ["Kim Antunez", "Julien Pramil"],
            tags: ["consolidate", "R", "Tutorial", "Data Science Training"],
            imageUrl: btb_png_url,
            articleUrl: "https://inseefrlab.github.io/formation-r-lissage-spatial/",
        },
        {
            name: "Tutoriel",
            abstract: "Tutoriel de formation au carroyage et au lissage spatial sur R",
            authors: ["Kim Antunez", "Julien Pramil"],
            tags: ["consolidate", "R", "Tutorial", "Data Science Training"],
            imageUrl: btb_png_url,
            articleUrl:
                "https://inseefrlab.github.io/formation-r-lissage-spatial/tuto.html",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&service.image.custom.enabled=true&service.image.custom.version=«inseefrlab%2Fformation-r-lissage-spatial%3Alatest»&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh»",
        },
        {
            name: "Exercices",
            abstract:
                "Mise en pratique des techniques présentées dans le tutoriel à partir de nouveaux jeux de données",
            authors: ["Kim Antunez", "Julien Pramil"],
            tags: ["consolidate", "R", "Tutorial", "Data Science Training"],
            imageUrl: btb_png_url,
            articleUrl:
                "https://inseefrlab.github.io/formation-r-lissage-spatial/exo.html",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&service.image.custom.enabled=true&service.image.custom.version=«inseefrlab%2Fformation-r-lissage-spatial%3Alatest»&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh»",
        },
    ],
};
