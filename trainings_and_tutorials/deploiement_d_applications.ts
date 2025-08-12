import type { EducationalResourceDirectory } from "./__index";
import kub_png_url from "./_assets/kub.png";
import shiny_png_url from "./_assets/shiny.png";

export const deploiement_d_applications: EducationalResourceDirectory = {
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
            types: ["Tutoriel R"],
            tags: ["learn", "consolidate"],
            category: "best practices",
            imageUrl: shiny_png_url,
            articleUrl:
                "https://github.com/InseeFrLab/sspcloud-tutorials/blob/main/deployment/shiny-app.md",
        },
    ],
};
