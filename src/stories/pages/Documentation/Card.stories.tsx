

import { DocumentationCard } from "app/pages/Documentation/DocumentationCard";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "stories/getStory";
import onyxiaLogoUrl from "stories/assets/svg/OnyxiaLogo.svg";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { DocumentationCard }
});

export default meta;

export const VueDefault = getStory({
    /* spell-checker: disable */
    "name": "Lancer rapidement un service",
    "abstract": "Tutoriel pour lancer rapidment un service avec le datalb.",
    "learningResourceType": ["tutoriel", "tutoriel vidéo", "Apprendre"],
    "timeRequired": "5 minutes",
    "author": "InseeFrLab",
    "image": onyxiaLogoUrl,
    "isDirectory": false,
    "url": "https://example.com"
    /* spell-checker: enable */
});

