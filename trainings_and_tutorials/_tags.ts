import type { LocalizedString } from "i18n";

/* spell-checker: disable */

export const educationalResourceTags = {
    discover: {
        en: "Discover",
        fr: "Découvrir",
    },
    learn: {
        en: "Learn",
        fr: "Apprendre",
    },
    consolidate: {
        en: "Consolidate",
        fr: "Consolider",
    },
    deepen: {
        fr: "Approfondir",
        en: "Deepen",
    },
} satisfies Record<string, LocalizedString>;

export type EducationalResourceTag = keyof typeof educationalResourceTags;
