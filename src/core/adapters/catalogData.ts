import { GetCatalogData } from "core/ports/CatalogData";

export const getCatalogData: GetCatalogData = async () => {
    const { educationalResourceTags, educationalResources } = await import(
        "../../../catalogData/_index"
    );

    return {
        educationalResources,
        tags: educationalResourceTags,
    };
};
