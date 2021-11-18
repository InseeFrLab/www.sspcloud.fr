
import { getActionParamsFactory } from "./inputHelper";
import { gitCommit } from "./tools/gitCommit";
import { execSync } from "child_process";

export const { getActionParams } = getActionParamsFactory({
    "inputNameSubset": [
        "github_token",
        "educational_resource",
    ] as const
});

export type Params = ReturnType<typeof getActionParams>;

type CoreLike = {
    debug: (message: string) => void;
    warning: (message: string) => void;
};


export async function action(
    _actionName: "update_educational_resources",
    params: Params,
    core: CoreLike
) {

    const { github_token, educational_resource } = params;

    core.debug(`params: ${JSON.stringify(params)}`);

    await gitCommit({
        "owner": "InseeFrLab",
        "repo": "www.sspcloud.fr",
        github_token,
        "commitAuthorEmail": "actions@github.com",
        "performChanges": async () => {

            console.log(`About to install dependencies`);

            execSync("yarn install");

            console.log(`About to update educational resources`);

            execSync(`npx ts-node  --skip-project src/bin/update_educational_resources.ts '${educational_resource}'`);

            console.log(`About to build (to make sure everything is ok)`);

            execSync("yarn build")

            console.log(`About to format (for a minimal diff)`);

            execSync("yarn format");

            console.log(`About to commit`);

            return {
                "commit": true,
                "addAll": false,
                "message": `Update educational resources`
            };

        }

    });

}
