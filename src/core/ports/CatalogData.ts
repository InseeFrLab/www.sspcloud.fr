import type {
    EducationalResource,
    Language,
    LocalizedString,
} from "../../../catalogData/_index";

export type { EducationalResource, Language, LocalizedString };

export type CatalogData = {
    educationalResources: EducationalResource[];
    tags: Record<EducationalResource.Tag, LocalizedString>;
};

export type GetCatalogData = () => Promise<CatalogData>;
