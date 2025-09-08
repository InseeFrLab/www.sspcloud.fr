import type { EducationalResource } from "./-index";
import kub_png_url from "./-assets/kub.png";
import shiny_png_url from "./-assets/shiny.png";

export const deploiement_d_applications: EducationalResource.Collection = {
    name: "Déploiement d'applications",
    abstract:
        "Une série de tutoriels pour se former au déploiement d'applications sur le SSP Cloud.",
    imageUrl: kub_png_url,
    parts: [
        {
            name: "Déploiement d'une application R Shiny",
            abstract:
                "Un tutoriel détaillé pour packager une application R Shiny sous forme de chart Helm et la déployer sur le SSP Cloud.",
            authors: ["Inseefrlab"],
            tags: ["learn", "consolidate", "R", "Tutorial", "Best Practices"],
            imageUrl: shiny_png_url,
            //articleUrl: `${import.meta.env.BASE_URL}documents/deploiement_d_applications/shiny-app.md`,
            articleUrl:
                "https://github.com/InseeFrLab/sspcloud-tutorials/blob/main/deployment/shiny-app.md",
        },
    ],
};
