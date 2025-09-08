import { GetCatalogData } from "core/ports/CatalogData";

export const getCatalogData: GetCatalogData = async () => {
    const {
        educationalResourceTags,
        educationalResources,
        languageAssumedIfNoTranslation,
    } = await import("../../../catalogData/__index");

    return {
        educationalResources,
        tagLabelByTagId: educationalResourceTags,
        languageAssumedIfNoTranslation,
    };
};
