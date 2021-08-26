import { DocumentationCard } from "../../../app/pages/Documentation/DocumentationCard";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "../../getStory";
import gameControllerImgUrl from "app/assets/img/gameController.png";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { DocumentationCard },
});

const educationalResource =
    /* spell-checker: disable */
    {
        "name": "icaRius",
        "abstract": {
            "fr": "La partie vidéoludique du FuncampR. Jeux de rôle inspiré d'un célèbre jeu vidéo des années 1990...",
            "en": "The video game part of FuncampR. A RPG inspired by a famous video game from the 1990s ...",
        },
        "authors": [
            "A. Degorre",
            {
                "fr": "communauté Solarus",
                "en": "Solarus Community",
            },
        ],
        "contributors": [
            {
                "fr": "Communauté FuncampR",
                "en": "FuncampR Community",
            },
            {
                "fr": "communauté Solarus",
                "en": "Solarus Community",
            },
        ],
        "types": [
            {
                "fr": "Jeu vidéo",
                "en": "Video Game",
            },
        ],
        "tags": ["discover", "learn"],
        "category": "statistics with R",
        "imageUrl": gameControllerImgUrl,
        "deploymentUrl":
            "https://datalab.sspcloud.fr/my-lab/catalogue/inseefrlab-helm-charts-trainings/icarius/deploiement",
    };
/* spell-checker: enable */

export default meta;

export const VueDefault = getStory({
    /* spell-checker: disable */
    "name": educationalResource.name,
    "abstract": educationalResource.abstract,
    "authors": educationalResource.authors,
    "imageUrl": educationalResource.imageUrl,
    "isDirectory": false,
    "deploymentUrl": educationalResource.deploymentUrl,
    "timeRequired": undefined,
    "tags": ["discover", "learn", "consolidate", "deepen"],
    /* spell-checker: enable */
});
