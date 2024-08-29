import { DeploymentButton } from "../../../pages/Documentation/DocumentationCard/DeploymentButton";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "../../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { DeploymentButton },
});

export default meta;

export const DefaultView = getStory({
    "deploymentUrl": {
        "type": "url",
        "url": "#"
    }
});

export const ViewWithUrlByIdeName = getStory({
    "deploymentUrl": {
        "type": "url by ide name",
        "urlByIdeName": {
            "RStudio": "#r-studio",
            "Jupyter": "#jupyter"
        }
    }
});
