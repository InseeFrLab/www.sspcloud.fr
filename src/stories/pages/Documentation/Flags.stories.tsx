import { Flags } from "../../../pages/Documentation/DocumentationCard/Flags";
import { sectionName } from "./sectionName";
import { getStoryFactory, logCallbacks } from "../../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { Flags },
});

export default meta;

export const ViewWithEnAndFr = getStory({
    "lang": "fr",
    "localizedString": {
        "en": "",
        "fr": ""
    },
    ...logCallbacks(["onChangeLanguage"])
});

export const ViewWithString = getStory({
    "lang": "fr",
    "localizedString": "",
    ...logCallbacks(["onChangeLanguage"])
});

export const ViewWithOnlyEn = getStory({
    "lang": "fr",
    "localizedString": {
        "en": ""
    },
    ...logCallbacks(["onChangeLanguage"])
});

export const ViewWithOnyFrAndEnAndTheCurrentLanguageIsEn = getStory({
    "lang": "en",
    "localizedString": {
        "en": "",
        "fr": ""
    },
    ...logCallbacks(["onChangeLanguage"])
});

export const ViewWithOnyFrAndEnAndTheCurrentLanguageIsFr = getStory({
    "lang": "fr",
    "localizedString": {
        "en": "",
        "fr": ""
    },
    ...logCallbacks(["onChangeLanguage"])
});

