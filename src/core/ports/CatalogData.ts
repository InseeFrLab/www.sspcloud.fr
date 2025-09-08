import type {
    EducationalResource,
    Language,
    LocalizedString,
} from "../../../catalogData/-index";

export type { EducationalResource, Language, LocalizedString };

export type CatalogData = {
    educationalResources: EducationalResource[];
    languageAssumedIfNoTranslation: Language;
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
};

export type GetCatalogData = () => Promise<CatalogData>;
