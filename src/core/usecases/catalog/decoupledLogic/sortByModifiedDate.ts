import type { EducationalResource } from "core/ports/CatalogData";

export function sortByLastUpdatedMostRecentFirst(parts: EducationalResource[]) {
    return parts
        .map(part => ({ part, time: getEducationalResourceTime(part) }))
        .sort((a, b) => b.time - a.time)
        .map(({ part }) => part);
}

function getEducationalResourceTime(part: EducationalResource): number {
    if ("parts" in part) {
        return part.parts
            .map(getEducationalResourceTime)
            .reduce((prev, curr) => (curr > prev ? curr : prev), 0);
    } else {
        return part.lastUpdated === undefined ? 0 : new Date(part.lastUpdated).getTime();
    }
}
