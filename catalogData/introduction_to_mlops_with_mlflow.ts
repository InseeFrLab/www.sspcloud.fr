import type { EducationalResource } from "./__index";
import mlflow_png_url from "./__assets/mlflow.png";

export const introduction_to_mlops_with_mlflow: EducationalResource = {
    name: {
        fr: "Introduction au MLOps avec MLflow",
        en: "Introduction to MLOps with MLflow",
    },
    abstract: {
        fr: "Un tutoriel pour prendre en main MLflow, un outil permettant de gérer le cycle de vie d'un projet de machine learning de bout en bout",
        en: "A hands-on tutorial on MLflow, a tool for managing the end-to-end lifecycle of a machine learning project",
    },
    authors: ["Romain Avouac", "Thomas Faria", "Tom Seimandi"],
    tags: ["learn", "consolidate", "Slides", "Best Practices"],
    imageUrl: mlflow_png_url,
    articleUrl: {
        fr: "https://inseefrlab.github.io/formation-mlops/slides/fr/index.html",
        en: "https://inseefrlab.github.io/formation-mlops/slides/en/index.html",
    },
};
