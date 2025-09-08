import type { EducationalResource } from "./-index";
import python_jpg_url from "./-assets/python.jpg";

export const ateliers_ami_ia: EducationalResource.Collection = {
    name: "Ateliers AMI IA",
    abstract:
        "L'objectif de cet atelier est de vous faire découvrir le déroulement d'un projet de data science à travers trois cas d'études.",
    imageUrl: python_jpg_url,
    parts: [
        {
            name: "Introduction",
            abstract: "Introduction aux outils de datascience",
            authors: ["LabIA-Etalab"],
            tags: ["discover", "learn", "Python", "Notebook", "Data Science Training"],
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Foutils_du_datascientist.ipynb»&name=outils&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
        {
            name: "Atelier 1",
            abstract: "Introduction à la data visualisation",
            authors: ["LabIA-Etalab"],
            tags: ["discover", "learn", "Python", "Notebook", "Data Science Training"],
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_a_la_data_visualisation.ipynb»&name=data%2520visualisation&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
        {
            name: "Atelier 2",
            abstract: "Introduction au traîtement du langage naturel",
            authors: ["LabIA-Etalab"],
            tags: ["discover", "learn", "Python", "Notebook", "Data Science Training"],
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_au_NLP.ipynb»&name=NLP&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
        {
            name: "Atelier 3",
            abstract: "Introduction au machine learning",
            authors: ["LabIA-Etalab"],
            tags: ["discover", "learn", "Python", "Notebook", "Data Science Training"],
            imageUrl: python_jpg_url,
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_au_machine_learning.ipynb»&name=ML&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
    ],
};
