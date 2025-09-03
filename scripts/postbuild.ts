import * as fs from "fs";
import { assert } from "tsafe/assert";
import { fileURLToPath } from "url";
import { dirname, join as pathJoin } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
    const projectDirPath = pathJoin(__dirname, "..");

    const distDirPath = pathJoin(projectDirPath, "dist");

    const pagesDirPath = pathJoin(projectDirPath, "src", "ui", "pages");

    const segments: string[] = [];

    for (const basename of fs.readdirSync(pagesDirPath)) {
        const dirPath = pathJoin(pagesDirPath, basename);

        if (!fs.statSync(dirPath).isDirectory()) {
            continue;
        }

        const routeFileContent = fs
            .readFileSync(pathJoin(dirPath, "route.ts"))
            .toString("utf8");

        const match = routeFileContent.match(
            /^const\s+SEGMENT\s*=\s*["']([^"']*)["']\s*;?/m,
        );

        assert(match !== null);

        const segment = match[1];

        if (segment === "") {
            continue;
        }

        segments.push(segment);
    }

    for (const segment of segments) {
        fs.cpSync(
            pathJoin(distDirPath, "index.html"),
            pathJoin(distDirPath, `${segment}.html`),
        );
    }

    console.log("Indexes duplicated for all pages");
})();
