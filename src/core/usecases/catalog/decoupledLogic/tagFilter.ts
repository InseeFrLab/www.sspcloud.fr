import type { EducationalResource } from "core/ports/CatalogData";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";

export function filterMatchingSelectedTags(params: {
    parts: EducationalResource[];
    selectedTags: EducationalResource.Tag[];
}): EducationalResource[] {
    const { parts, selectedTags } = params;

    return parts.filter(educationalResource => {
        if ("parts" in educationalResource) {
            return getDoCollectionMatchAllSelectedTags({
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
        tags: EducationalResource.Tag[];
    };
    selectedTags: EducationalResource.Tag[];
}): boolean {
    const { resource, selectedTags } = params;

    for (const selectedTag of selectedTags) {
        if (!resource.tags.includes(selectedTag)) {
            return false;
        }
    }

    return true;
}

function getDoCollectionMatchAllSelectedTags(params: {
    parts: EducationalResource[];
    selectedTags: EducationalResource.Tag[];
}): boolean {
    const { parts, selectedTags } = params;

    const tags = new Set<EducationalResource.Tag>();

    for( const part of parts ){
        collectTags(part).forEach(tag => tags.add(tag));
    }

    return getDoResourceMatchAllSelectedTags({
        resource: {
            tags: Array.from(tags)
        },
        selectedTags
    })

}

function collectTags(er: EducationalResource): EducationalResource.Tag[] {
    if (!("parts" in er)) {
        return er.tags;
    }

    return er.parts
        .map(collectTags)
        .flat()
        .reduce(...removeDuplicates<EducationalResource.Tag>());
}
