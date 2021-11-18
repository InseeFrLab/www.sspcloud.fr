import * as core from '@actions/core'
import * as update_onyxia_web from "./update_educational_resources";
import { getActionName } from "./inputHelper";

async function run(): Promise<null> {

    const action_name = getActionName();

    switch (action_name) {
        case "update_educational_resources":
                await update_onyxia_web.action(
                    action_name,
                    update_onyxia_web.getActionParams(),
                    core
                )
            return null;
    }

    throw new Error(`${action_name} Not supported by this toolkit`);

}

(async () => {

    try {

        await run()

    } catch (error) {
        core.setFailed(error.message);
    }

})();

