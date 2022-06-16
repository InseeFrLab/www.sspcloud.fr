/*import { languages } from "../lib/i18n/Language";
import type { Language } from "../lib/i18n/Language";*/
//import { localizedStringToString } from "../lib/i18n/LocalizedString";
import { languages, fallbackLanguage } from "../i18n/Language";
import type { Language } from "../i18n/Language";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import type {
    EducationalResourceDirectory,
    EducationalResource,
} from "../lib/educationalResources";
import { matchEducationalResourceDirectory } from "../lib/educationalResources/matchEducationalResourceDirectory";
import { assert } from "tsafe/assert";
import * as fs from "fs";
import * as crypto from "crypto";
import { join as pathJoin } from "path";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";

function validateEducationalResource(params: {
    educationalResource: Pick<
        EducationalResource,
        "name" | "deploymentUrl" | "articleUrl" | "tags"
    >;
}): void {
    const { educationalResource } = params;

    assert(
        educationalResource.deploymentUrl !== undefined ||
            educationalResource.articleUrl !== undefined,
        `Error with "${educationalResource.name}" it should have least a deploymentUrl or an articleUrl`,
    );

    assert(
        educationalResource.tags.reduce(...removeDuplicates<string>()).length ===
            educationalResource.tags.length,
        `Tags present more than once in ${educationalResource.name}`,
    );
}

function createCheckNameUniqueness() {
    const set = new Set<string>();

    function checkNameUniqueness(name: string): void {
        assert(
            !set.has(name),
            `There is more than one educational resource named "${name}"`,
        );

        set.add(name);
    }

    return { checkNameUniqueness };
}

export function validateEducationalResources(params: {
    educationalResourceOrEducationalResourceDirectories: (
        | EducationalResource
        | EducationalResourceDirectory
    )[];
}) {
    const { educationalResourceOrEducationalResourceDirectories } = params;

    const { checkNameUniquenessByLanguage } = (() => {
        const checkNameUniquenessByLanguage: Record<
            Language,
            ReturnType<typeof createCheckNameUniqueness>
        > = {} as any;

        languages.forEach(
            language =>
                (checkNameUniquenessByLanguage[language] = createCheckNameUniqueness()),
        );

        return { checkNameUniquenessByLanguage };
    })();

    educationalResourceOrEducationalResourceDirectories.forEach(
        educationalResourceOrEducationalResourceDirectory => {
            if (
                matchEducationalResourceDirectory(
                    educationalResourceOrEducationalResourceDirectory,
                )
            ) {
                validateEducationalResources({
                    "educationalResourceOrEducationalResourceDirectories":
                        educationalResourceOrEducationalResourceDirectory.parts,
                });

                return;
            }

            validateEducationalResource({
                "educationalResource": educationalResourceOrEducationalResourceDirectory,
            });

            languages.forEach(language => {
                const { checkNameUniqueness } = checkNameUniquenessByLanguage[language];

                const { resolveLocalizedString } = createResolveLocalizedString({
                    "currentLanguage": language,
                    fallbackLanguage,
                });

                checkNameUniqueness(
                    resolveLocalizedString(
                        educationalResourceOrEducationalResourceDirectory.name,
                    ),
                );
            });
        },
    );
}

function makeItNodeRunnable(params: { srcFilePath: string; destFilePath: string }): void {
    const { srcFilePath, destFilePath } = params;

    const sourceCode = fs.readFileSync(srcFilePath).toString("utf8");

    let modifiedSourceCode = sourceCode;

    const denoifiedImportExportStatementByHash = new Map<string, string>();

    for (const quoteSymbol of [`"`, `'`]) {
        modifiedSourceCode = modifiedSourceCode.replace(
            new RegExp(
                `(?<=^|[\\r\\n\\s;])import\\s+[^\\*{][^\\s]*\\s+from\\s*${quoteSymbol}[^${quoteSymbol}\\r\\n]+${quoteSymbol}`,
                "g",
            ),
            importExportStatement => {
                const modifiedImportStatement = importExportStatement
                    .replace("import", "const")
                    .replace("from", "=");

                const hash = crypto
                    .createHash("sha256")
                    .update(modifiedImportStatement)
                    .digest("hex");

                denoifiedImportExportStatementByHash.set(hash, modifiedImportStatement);

                return hash;
            },
        );
    }

    for (const [hash, denoifiedImportExportStatement] of Array.from(
        denoifiedImportExportStatementByHash.entries(),
    )) {
        modifiedSourceCode = modifiedSourceCode.replace(
            new RegExp(hash, "g"),
            denoifiedImportExportStatement,
        );
    }

    fs.writeFileSync(destFilePath, Buffer.from(modifiedSourceCode, "utf8"));
}

if (require.main === module) {
    const dirPath = pathJoin(__dirname, "..", "lib", "educationalResources");

    const destFilePath = pathJoin(dirPath, "educationalResources_tmp.ts");

    makeItNodeRunnable({
        "srcFilePath": pathJoin(dirPath, "educationalResources.ts"),
        destFilePath,
    });

    import(destFilePath.replace(/\.ts$/, "")).then(
        ({
            educationalResources,
        }: {
            educationalResources: (EducationalResourceDirectory | EducationalResource)[];
        }) => {
            validateEducationalResources({
                "educationalResourceOrEducationalResourceDirectories":
                    educationalResources,
            });

            fs.unlinkSync(destFilePath);

            console.log("PASS: Educational resources are valid!");
        },
    );
}
