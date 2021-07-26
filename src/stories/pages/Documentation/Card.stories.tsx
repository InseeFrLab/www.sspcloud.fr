

import { Card } from "app/pages/Documentation/Card";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "stories/getStory";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { Card }
});

export default meta;

export const VueDefault = getStory({
});

