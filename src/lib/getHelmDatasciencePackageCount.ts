import yaml from "js-yaml";

export async function getHelmDatasciencePackageCount(): Promise<number> {

    return (await Promise.all(
        [
            "helm-charts-interactive-services",
            "helm-charts-databases",
            "helm-charts-automation",
            "helm-charts-datavisualization"
        ]
            .map(name =>
                fetch(`https://inseefrlab.github.io/${name}/index.yaml`)
                    .then(x => x.text())
                    .then(text => yaml.load(text) as { entries: Record<string, unknown>; })
                    .then(parsed => Object.keys(parsed.entries).length)
            )
    )).reduce((a, b) => a + b, 0);

}
