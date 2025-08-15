import type { EducationalResource } from "core/ports/CatalogData";

export function getResourceCountInParts(parts: EducationalResource[]): number{
    return parts
        .map(part => ("parts" in part ? getResourceCountInParts(part.parts) : 1))
        .reduce((prev, curr) => prev + curr, 0);
}