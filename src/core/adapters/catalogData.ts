import { GetCatalogData } from "core/ports/CatalogData";

export const getCatalogData: GetCatalogData = async () => {
    const { educationalResourceTags, educationalResources, languageAssumedIfNoTranslation } = await import(
        "../../../catalogData/_index"
    );

    return {
        educationalResources,
        tagLabelByTagId: educationalResourceTags,
        languageAssumedIfNoTranslation
    };
};
