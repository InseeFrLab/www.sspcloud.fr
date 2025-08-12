import * as fs from "fs";
import { join as pathJoin, basename as pathBasename } from "path";
import { assert } from "tsafe/assert";

type LocalizedString = string | { en?: string; fr?: string };

type EducationalResource = {
    name: LocalizedString;
    abstract: LocalizedString;
    /** List must contain at least one author */
    authors: [LocalizedString, ...LocalizedString[]];
    /** Epoch timestamp, get it for a specific date here: https://www.epochconverter.com */
    dateTime?: number;
    contributors?: LocalizedString[];
    /** Eg: video game, course, tutorial ... */
    types: LocalizedString[];
    tags: string;
    category: string;
    keywords?: string[];
    imageUrl?: string;
    /** Expressed in minutes */
    timeRequired?: number;
    /** At least one of the following must be specified */
    articleUrl?: LocalizedString;
    deploymentUrl?: LocalizedString | Record<string /* ide name */, LocalizedString>;
};

type EducationalResourceDirectory = {
    name: LocalizedString;
    abstract: LocalizedString;
    imageUrl?: string;
    parts: (EducationalResource | EducationalResourceDirectory)[];
};

(async () => {
    const educationalResources: (EducationalResource | EducationalResourceDirectory)[] =
        JSON.parse(fs.readFileSync("educationalResources.json").toString("utf8"));

    const fileBasenames: string[] = [];

    const paths_toDelete = new Set<string>();

    for (const er of educationalResources) {
        const fileBasename = (() => {
            const { name } = er;

            const name_en = typeof name === "string" ? name : (name.en ?? name.fr);

            assert(name_en !== undefined, "no name");

            let fileBasename = name_en;
            fileBasename = fileBasename.toLowerCase();
            fileBasename = fileBasename.split("_-_")[0];
            fileBasename = fileBasename.split("(")[0];
            fileBasename = fileBasename.replaceAll(" ", "_");
            fileBasename = fileBasename.replaceAll("-", "_");
            fileBasename = fileBasename.replaceAll("__", "_");
            fileBasename = fileBasename.replaceAll("'", "_");
            fileBasename = fileBasename.replaceAll("à", "a");
            fileBasename = fileBasename.replaceAll("é", "e");
            fileBasename = fileBasename.replaceAll("è", "e");
            fileBasename = fileBasename + ".ts";

            return fileBasename;
        })();

        const imageUrls: string[] = [];

        (function collectImageUrls(
            er: EducationalResource | EducationalResourceDirectory,
        ) {
            root: {
                const { imageUrl } = er;

                if (imageUrl === undefined) {
                    break root;
                }

                if (imageUrls.find(url => url === imageUrl) !== undefined) {
                    break root;
                }

                imageUrls.push(imageUrl);
            }

            if (!("parts" in er)) {
                return;
            }

            for (const er_i of er.parts) {
                collectImageUrls(er_i);
            }
        })(er);

        let er_serialized = JSON.stringify(er, null, 2);

        {
            const dirPath = pathJoin("trainings_and_tutorials", "_assets");

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
        }

        const imageImportLines: string[] = [];

        for (const imageUrl of imageUrls) {
            const { identifierName, fileBasename } = (() => {
                const [urlBasename] = imageUrl.split("/").reverse();

                const [basename_withoutExt, ext, ...rest] = urlBasename.split(".");

                assert(rest.length === 0);

                const identifierName = `${basename_withoutExt.replaceAll("-", "_")}_${ext}_url`;

                const fileBasename = `${basename_withoutExt.replaceAll("-", "_")}.${ext}`;

                return { identifierName, fileBasename };
            })();

            const fileRelativePath_target = pathJoin(
                "trainings_and_tutorials",
                "_assets",
                pathBasename(fileBasename),
            );

            if (imageUrl.startsWith("https://")) {
                const result = await fetch(imageUrl);

                fs.writeFileSync(
                    fileRelativePath_target,
                    Buffer.from(await result.arrayBuffer()),
                );
            } else {
                assert(imageUrl.startsWith("/"));

                fs.writeFileSync(
                    fileRelativePath_target,
                    fs.readFileSync(`.${imageUrl}`),
                );

                paths_toDelete.add(`.${imageUrl}`);
            }

            er_serialized = er_serialized.replaceAll(`"${imageUrl}"`, identifierName);

            imageImportLines.push(
                `import ${identifierName} from "./_assets/${pathBasename(fileRelativePath_target)}";`,
            );
        }

        const isDirectory = "parts" in er;

        const typeIdentifier = isDirectory
            ? "EducationalResourceDirectory"
            : "EducationalResource";

        fs.writeFileSync(
            pathJoin("trainings_and_tutorials", fileBasename),
            `
import type { ${typeIdentifier} } from "./__index";
${imageImportLines.join("\n")}

export const ${fileBasename.replace(/\.ts$/, "")}: ${typeIdentifier} = ${er_serialized};
`,
        );

        fileBasenames.push(fileBasename);
    }

    paths_toDelete.forEach(filePath => {
        fs.rmSync(filePath);
    });

    fs.writeFileSync(
        pathJoin("trainings_and_tutorials", "__index.ts"),
        Buffer.from(
            `
import type { LocalizedString } from "i18n";
/* spell-checker: disable */

export type EducationalResource = {
    name: LocalizedString;
    abstract: LocalizedString;
    /** List must contain at least one author */
    authors: [LocalizedString, ...LocalizedString[]];
    /** Epoch timestamp, get it for a specific date here: https://www.epochconverter.com */
    dateTime?: number;
    contributors?: LocalizedString[];
    /** Eg: video game, course, tutorial ... */
    types: LocalizedString[];
    tags: import("./_tags").EducationalResourceTag[];
    category: import("./_categories").EducationalResourceCategory;
    keywords?: string[];
    imageUrl?: string;
    /** Expressed in minutes */
    timeRequired?: number;
    /** At least one of the following must be specified */
    articleUrl?: LocalizedString;
    deploymentUrl?: LocalizedString | Record<string /* ide name */, LocalizedString>;
};

export type EducationalResourceDirectory = {
    name: LocalizedString;
    abstract: LocalizedString;
    imageUrl?: string;
    parts: (EducationalResource | EducationalResourceDirectory)[];
};

${fileBasenames.map(fileBasename => `import { ${fileBasename.replace(/\.ts$/, "")} } from "./${fileBasename}";`).join("\n")}

export const educationalResources: (
    | EducationalResource
    | EducationalResourceDirectory
)[] = [
${fileBasenames.map(fileBasename => fileBasename.replace(/\.ts$/, "")).join(",\n")}
];
        `,
            "utf8",
        ),
    );
})();
