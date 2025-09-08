import type { EducationalResource } from "./-index";
import r_svg_url from "./-assets/r.svg";

export const processing_large_data_sets_with_r: EducationalResource.Resource = {
    name: {
        fr: "Traitement des données volumineuses avec R",
        en: "Processing large data sets with R",
    },
    abstract: {
        fr: "Introduction à l'utilisation des outils pour le traitement des données volumineuses avec R : format Parquet, Arrow, DuckDB et Spark.",
        en: "Introduction to the use of tools for processing big data with R: Parquet format, Arrow, DuckDB and Spark.",
    },
    authors: ["Romain Avouac", "Thomas Faria", "Olivier Meslin"],
    tags: ["discover", "learn", "Tutorial", "R", "Data Science Training"],
    imageUrl: r_svg_url,
    deploymentUrl: {
        fr: "https://datalab.sspcloud.fr/launcher/ide/rstudio-sparkr?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-bceao%2Fmain%2Ftp%2Finit-tp.sh%C2%BB&resources.limits.memory=%C2%AB100Gi%C2%BB&persistence.size=%C2%AB40Gi%C2%BB&init.personalInitArgs=%C2%ABfr%C2%BB",
        en: "https://datalab.sspcloud.fr/launcher/ide/rstudio-sparkr?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-bceao%2Fmain%2Ftp%2Finit-tp.sh%C2%BB&resources.limits.memory=%C2%AB100Gi%C2%BB&persistence.size=%C2%AB40Gi%C2%BB&init.personalInitArgs=%C2%ABen%C2%BB",
    },
};
