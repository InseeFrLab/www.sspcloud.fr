import type { EducationalResource } from "core/ports/CatalogData";

export function filterMatchingSelectedTags(params: {
    parts: EducationalResource[];
    selectedTags: EducationalResource.Tag[];
}): EducationalResource[] {
    const { parts, selectedTags } = params;

    return parts.filter(educationalResource => {
        if ("parts" in educationalResource) {
            return getContainsAnyResourceThatMatchAllTags({
                parts: educationalResource.parts,
                selectedTags,
            });
        } else {
            return getDoResourceMatchAllSelectedTags({
                resource: educationalResource,
                selectedTags,
            });
        }
    });
}

function getDoResourceMatchAllSelectedTags(params: {
    resource: {
        tags: string[];
    };
    selectedTags: string[];
}): boolean {
    const { resource, selectedTags } = params;

    for (const selectedTag of selectedTags) {
        if (!resource.tags.includes(selectedTag)) {
            return false;
        }
    }

    return true;
}

function getContainsAnyResourceThatMatchAllTags(params: {
    parts: EducationalResource[];
    selectedTags: string[];
}): boolean {
    const { parts, selectedTags } = params;

    return parts.some(educationalResource => {});
}
