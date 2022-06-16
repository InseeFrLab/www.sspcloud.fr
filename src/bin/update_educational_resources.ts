import { join as pathJoin } from "path";
import * as fs from "fs";
import type { educationalResources } from "../lib/educationalResources";
import type { LocalizedString } from "../i18n";

async function updateEducationalResources(params: {
    update: (params: {
        currentEducationalResources: typeof educationalResources;
    }) => Promise<{ newEducationalResources: typeof educationalResources }>;
}) {
    const { update } = params;

    const projectRoot = pathJoin(__dirname, "..", "..");

    const sourceFilePath = pathJoin(
        projectRoot,
        "src/lib/educationalResources/educationalResources.ts",
    );

    const sourceCode = fs.readFileSync(sourceFilePath).toString("utf8");

    const match = sourceCode.match(/educationalResources[^=]*=([^;]+);/);

    const prefix = "dIdLsId9dL3di";

    const json = match![1].replace(
        /["']imageUrl["']: *([^"', \n\r]+)/g,
        (substring, capture) => substring.replace(capture, `"${prefix}${capture}"`),
    );

    let currentEducationalResources: typeof educationalResources = null as any;

    // eslint-disable-next-line no-eval
    eval(`currentEducationalResources=${json.replace(/\n/g, "")};`);

    const { newEducationalResources } = await update({ currentEducationalResources });

    const updatedSourceCode = sourceCode
        .split(match![1])
        .join(
            JSON.stringify(newEducationalResources, null, 2).replace(
                new RegExp(`"${prefix}([^"]+)"`, "g"),
                (...[, capture]) => capture,
            ),
        );

    fs.writeFileSync(sourceFilePath, Buffer.from(updatedSourceCode, "utf8"));
}

async function main(params: {
    educationalResource: typeof educationalResources[number];
}) {
    const { educationalResource } = params;

    await updateEducationalResources({
        "update": ({ currentEducationalResources }) =>
            Promise.resolve({
                "newEducationalResources": (() => {
                    const toReplace = currentEducationalResources.find(({ name }) =>
                        areSameLocalizedString(name, educationalResource.name),
                    );

                    return !toReplace
                        ? [...currentEducationalResources, educationalResource]
                        : currentEducationalResources.map(entry =>
                            entry === toReplace ? educationalResource : entry,
                        );
                })(),
            }),
    });
}

function areSameLocalizedString(a: LocalizedString, b: LocalizedString) {
    const toObj = (locStr: LocalizedString): Exclude<LocalizedString, string> =>
        typeof locStr === "string" ? { "en": locStr, "fr": locStr } : locStr;

    const aObj = toObj(a);
    const bObj = toObj(b);

    return aObj.en === bObj.en || aObj.fr === bObj.fr;
}

if (require.main === module) {
    main({
        "educationalResource": JSON.parse(
            fs.readFileSync(process.argv[2]).toString("utf8"),
        ),
    });
}
