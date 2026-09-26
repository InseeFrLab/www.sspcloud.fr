import type { EducationalResource } from "./-index";
import rpolars_png_url from "./-assets/rpolars.png";
import jupyter_png_url from "./-assets/jupyter.png";

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
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?name=Tutoriel%20polars&version=2.4.6&s3=region-79669f20&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FSSPHub%2FFormation-polars%2Frefs%2Fheads%2Fmain%2Finit.sh%C2%BB&autoLaunch=true",
            articleUrl: "https://ssphub.netlify.app/post/polars/",
        },
    ],
};
