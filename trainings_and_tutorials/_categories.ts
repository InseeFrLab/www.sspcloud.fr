import type { LocalizedString } from "i18n";

/* spell-checker: disable */

export const educationalResourceCategories = {
    "discover the datalab": {
        en: "Discover the datalab",
        fr: "Découverte du Datalab",
    },
    "training courses with R": {
        en: "R training courses",
        fr: "Parcours de formation à R",
    },
    "training courses with python": {
        en: "Python training courses",
        fr: "Parcours de formation à Python",
    },
    funathon: "Funathon",
    "training courses in data science": {
        en: "Data science training courses",
        fr: "Tutoriels de data science",
    },
    "best practices": {
        en: "Best practices",
        fr: "Bonnes pratiques, déploiement et automatisation",
    },
} satisfies Record<string, LocalizedString>;

export type EducationalResourceCategory = keyof typeof educationalResourceCategories;
