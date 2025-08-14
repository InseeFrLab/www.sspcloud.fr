import type { EducationalResource } from "./_index";
import python_jpg_url from "./_assets/python.jpg";
import r_svg_url from "./_assets/r.svg";

export const appariement_de_donnees_individuelles: EducationalResource.Directory = {
    name: "Appariement de données individuelles",
    abstract:
        "Des tutoriels en Python et en R pour s'initier à l'appariement de données individuelles.",
    imageUrl: python_jpg_url,
    parts: [
        {
            name: "Package Record Linkage (Python)",
            abstract:
                "Appariement de données individuelles en Python avec le package Record Linkage",
            authors: ["Lucas Malherbe", "Lucas Malherbe"],
            tags: ["discover", "learn"],
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABrecordLinkage%C2%BB",
        },
        {
            name: "Package dedupe (Python)",
            abstract:
                "Appariement de données individuelles en Python avec le package dedupe",
            authors: ["Lucas Malherbe"],
            contributors: ["Lucas Malherbe"],
            types: ["Notebook Python"],
            tags: ["discover", "learn"],
            category: "training courses in data science",
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABdedupe%C2%BB",
        },
        {
            name: "Package reclin2 (R)",
            abstract: "Appariement de données individuelles en R avec le package reclin2",
            authors: ["Lucas Malherbe"],
            contributors: ["Lucas Malherbe"],
            types: ["Notebook R"],
            tags: ["discover", "learn"],
            category: "training courses in data science",
            imageUrl: r_svg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-r?autoLaunch=true&init.personalInitArgs=%C2%ABreclin2%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB",
        },
    ],
};
