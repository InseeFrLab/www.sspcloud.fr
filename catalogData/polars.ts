import type { EducationalResource } from "./__index";
import rpolars_png_url from "./__assets/rpolars.png";
import jupyter_png_url from "./__assets/jupyter.png";

export const polars: EducationalResource.Collection = {
    name: "Polars",
    abstract:
        "Des tutoriels R et Python pour prendre en main Polars, une librairie Rust qui offre des performances exceptionnelles sur les DataFrames",
    imageUrl: rpolars_png_url,
    parts: [
        {
            name: "Cookbook de Polars pour R",
            abstract:
                "Une documentation pour apprendre à utiliser Polars avec R (en anglais)",
            authors: ["Damien Dotta"],
            tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
            imageUrl: rpolars_png_url,
            articleUrl: "https://ddotta.github.io/cookbook-rpolars/",
        },
        {
            name: "Prise en main de Polars en Python",
            abstract:
                "Un tutoriel pour prendre en main le package Python Polars, une alternative directe et très performante à Pandas",
            authors: ["Romain Tailhurat", "Lino Galiana"],
            tags: ["learn", "consolidate", "Notebook", "Python", "Data Science Training"],
            imageUrl: jupyter_png_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?version=1.13.22&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fssphub%2Fmain%2Fpost%2Fpolars%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABpolars-tuto%C2%BB&onyxia.friendlyName=%C2%ABTutoriel%20Polars%C2%BB",
            articleUrl: "https://ssphub.netlify.app/post/polars/",
        },
    ],
};
