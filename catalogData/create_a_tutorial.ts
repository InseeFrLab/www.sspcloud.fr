import type { EducationalResource } from "./__index";
import onyxia_svg_url from "./_assets/onyxia.svg";

export const create_a_tutorial: EducationalResource = {
    name: {
        fr: "Créer un tutoriel",
        en: "Create a tutorial",
    },
    abstract: {
        fr: "Découvrir comment ajouter une formation sur le SSP Cloud",
        en: "Discover how to add a training on SSP CLOUD",
    },
    authors: ["Inseefrlab"],
    types: ["Tutoriel"],
    tags: ["discover", "learn"],
    category: "discover the datalab",
    imageUrl: onyxia_svg_url,
    articleUrl: {
        fr: "https://docs.sspcloud.fr/content/tutorials/introduction.html",
        en: "https://docs.sspcloud.fr/en/content/tutorials/introduction.html",
    },
};
