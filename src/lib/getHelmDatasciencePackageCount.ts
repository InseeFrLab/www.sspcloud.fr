

import yaml from "js-yaml";


export async function getHelmDatasciencePackageCount(): Promise<number>{

    const parsed: any = await fetch("https://inseefrlab.github.io/helm-charts-datascience/index.yaml")
        .then(x => x.text())
        .then(yaml.load);

    return Object.keys(parsed.entries).length;

}


