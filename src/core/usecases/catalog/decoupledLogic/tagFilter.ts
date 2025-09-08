import type { EducationalResource } from "core/ports/CatalogData";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import memoize from "memoizee";

let isCacheHit: boolean;

let hitCount = 0;
let missCount = 0;
let hitDuration = 0;
let missDuration = 0;

export function filterMatchingSelectedTags(params: {
    parts: EducationalResource[];
    selectedTags: EducationalResource.Tag[];
}): EducationalResource[] {
    const { parts, selectedTags } = params;

    isCacheHit = true;

    const start = Date.now();

    const x = filterMatchingSelectedTags_memo(
        parts,
        JSON.stringify([...selectedTags].sort()),
    );

    const duration = Date.now() - start;

    if (isCacheHit) {
        hitDuration += duration;
        hitCount++;
    } else {
        missDuration += duration;
        missCount++;
    }

    if (hitCount + missCount === 200) {
        console.log({ hitCount, missCount, hitDuration, missDuration });
    }

    return x;
}

export const filterMatchingSelectedTags_memo = memoize(
    (parts: EducationalResource[], selectedTags_str: string): EducationalResource[] => {
        isCacheHit = false;

        const selectedTags: EducationalResource.Tag[] = JSON.parse(selectedTags_str);

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
    },
    { length: 1000 },
);

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

    for (const part of parts) {
        collectTags(part).forEach(tag => tags.add(tag));
    }

    return getDoResourceMatchAllSelectedTags({
        resource: {
            tags: Array.from(tags),
        },
        selectedTags,
    });
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
