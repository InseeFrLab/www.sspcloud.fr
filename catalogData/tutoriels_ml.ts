import type { EducationalResource } from "./__index";
import jupyter_png_url from "./__assets/jupyter.png";

export const tutoriels_ml: EducationalResource.Collection = {
    name: "Tutoriels ML",
    abstract: "Tutoriels de Machine learning",
    imageUrl: jupyter_png_url,
    parts: [
        {
            name: "Random forest",
            abstract: "Initiation au random forest sur les données du Titanic",
            authors: ["Alexis Dondon"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: jupyter_png_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Falexisdondon%2Fformation%2F-%2Fraw%2Fmaster%2FTitanic-randomForest.sh%C2%BB&name=Random_forest",
        },
    ],
};
