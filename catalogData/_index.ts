/* spell-checker: disable */

export type Language = "en" | "fr";

export type LocalizedString = string | Partial<Record<Language, string>>;

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

export type EducationalResource =
    | EducationalResource.Resource
    | EducationalResource.Collection;

export namespace EducationalResource {
    type Common = {
        name: LocalizedString;
        abstract: LocalizedString;
        imageUrl?: string;
    };

    export type Tag = keyof typeof educationalResourceTags;

    export type Resource = Common & {
        /** List must contain at least one author */
        authors: [LocalizedString, ...LocalizedString[]];
        /** YYYY-MM-DD */
        lastUpdated?: `${string}-${string}-${string}`;
        tags: Tag[];
        /** Expressed in minutes */
        timeRequiredInMinutes?: number;
        /** At least one of the following must be specified */
        articleUrl?: LocalizedString;
        deploymentUrl?: LocalizedString | Record<string /* ide name */, LocalizedString>;
    };

    export type Collection = Common & {
        parts: EducationalResource[];
    };
}

import { documentation_of_the_ssp_cloud } from "./documentation_of_the_ssp_cloud.ts";
import { create_a_tutorial } from "./create_a_tutorial.ts";
import { open_data_challenges } from "./open_data_challenges.ts";
import { funcampr__spellbook_ } from "./funcampr__spellbook_.ts";
import { parcours_r } from "./parcours_r.ts";
import { introduction_to_python } from "./introduction_to_python.ts";
import { python_pour_la_data_science } from "./python_pour_la_data_science.ts";
import { tutoriels_de_cartographie_avec_cartiflette } from "./tutoriels_de_cartographie_avec_cartiflette.ts";
import { getting_started_with_spark } from "./getting_started_with_spark.ts";
import { carroyage_et_lissage_spatial_sur_r } from "./carroyage_et_lissage_spatial_sur_r.ts";
import { tutoriels_ml } from "./tutoriels_ml.ts";
import { introduction_a_r_pour_les_sciences_sociales } from "./introduction_a_r_pour_les_sciences_sociales.ts";
import { parcours_de_consolidation_a_r } from "./parcours_de_consolidation_a_r.ts";
import { processing_large_data_sets_with_r } from "./processing_large_data_sets_with_r.ts";
import { documentation_utilitr } from "./documentation_utilitr.ts";
import { polars } from "./polars.ts";
import { ateliers_ami_ia } from "./ateliers_ami_ia.ts";
import { bonnes_pratiques_de_developpement_avec_git_et_r } from "./bonnes_pratiques_de_developpement_avec_git_et_r.ts";
import { introduction_to_mlops_with_mlflow } from "./introduction_to_mlops_with_mlflow.ts";
import { deploiement_d_applications } from "./deploiement_d_applications.ts";
import { mise_en_production_de_projets_de_data_science } from "./mise_en_production_de_projets_de_data_science.ts";
import { funathon_2024 } from "./funathon_2024.ts";
import { funathon_2023 } from "./funathon_2023.ts";
import { appariement_de_donnees_individuelles } from "./appariement_de_donnees_individuelles.ts";

export const educationalResources: EducationalResource[] = [
    documentation_of_the_ssp_cloud,
    create_a_tutorial,
    open_data_challenges,
    funcampr__spellbook_,
    parcours_r,
    introduction_to_python,
    python_pour_la_data_science,
    tutoriels_de_cartographie_avec_cartiflette,
    getting_started_with_spark,
    carroyage_et_lissage_spatial_sur_r,
    tutoriels_ml,
    introduction_a_r_pour_les_sciences_sociales,
    parcours_de_consolidation_a_r,
    processing_large_data_sets_with_r,
    documentation_utilitr,
    polars,
    ateliers_ami_ia,
    bonnes_pratiques_de_developpement_avec_git_et_r,
    introduction_to_mlops_with_mlflow,
    deploiement_d_applications,
    mise_en_production_de_projets_de_data_science,
    funathon_2024,
    funathon_2023,
    appariement_de_donnees_individuelles,
];
