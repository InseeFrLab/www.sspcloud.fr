import type { GetMetrics } from "../ports/Metrics";
import { getCatalogData } from "./catalogData";
import type { EducationalResource } from "core/ports/CatalogData";

export const getMetrics: GetMetrics = async () => {
    const [helmDataSciencePackageCount, educationalResourceCount] = await Promise.all([
        getHelmDataSciencePackageCount(),
        (async () => {
            const { educationalResources } = await getCatalogData();

            const count = (function callee(parts: EducationalResource[]): number {
                return parts
                    .map(part => ("parts" in part ? callee(part.parts) : 1))
                    .reduce((prev, curr) => prev + curr, 0);
            })(educationalResources);

            return count;
        })(),
    ]);

    return {
        helmDataSciencePackageCount,
        educationalResourceCount,
    };
};
async function getHelmDataSciencePackageCount(): Promise<number> {
    const yaml = await import("js-yaml");
    return (
        await Promise.all(
            [
                "helm-charts-interactive-services",
                "helm-charts-databases",
                "helm-charts-automation",
                "helm-charts-datavisualization",
            ].map(name =>
                fetch(`https://inseefrlab.github.io/${name}/index.yaml`)
                    .then(x => x.text())
                    .then(text => yaml.load(text) as { entries: Record<string, unknown> })
                    .then(parsed => Object.keys(parsed.entries).length),
            ),
        )
    ).reduce((a, b) => a + b, 0);
}
