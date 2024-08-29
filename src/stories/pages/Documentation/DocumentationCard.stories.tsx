import { DocumentationCard } from "../../../pages/Documentation/DocumentationCard";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "../../getStory";
import gameControllerImgUrl from "assets/img/gameController.png";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { DocumentationCard },
});

const educationalResource =
    /* spell-checker: disable */
    {
        "name": "icaRius",
        "abstract": {
            "fr": "La partie vidéoludique du FuncampR. Un jeu de rôle inspiré d'un célèbre jeu vidéo des années 1990...",
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

export const DefaultView = getStory({
    /* spell-checker: disable */
    "name": educationalResource.name,
    "abstract": educationalResource.abstract,
    "authors": educationalResource.authors,
    "imageUrl": educationalResource.imageUrl,
    "isDirectory": false,
    "deploymentUrl": {
        "type": "url",
        "url": educationalResource.deploymentUrl
    },
    "timeRequired": undefined,
    "tags": ["discover", "learn", "consolidate", "deepen"],
    /* spell-checker: enable */
});

export const ViewWithIdeOptions = getStory({
    /* spell-checker: disable */
    "name": educationalResource.name,
    "abstract": educationalResource.abstract,
    "authors": educationalResource.authors,
    "imageUrl": educationalResource.imageUrl,
    "isDirectory": false,
    "deploymentUrl": {
        "type": "url by ide name",
        "urlByIdeName": {
            "rstudio": {
                "fr": "https://datalab.sspcloud.fr/my-lab/catalogue/inseefrlab-helm-charts-trainings/icarius/deploiement?ide=rstudio",
                "en": "https://datalab.sspcloud.fr/my-lab/catalogue/inseefrlab-helm-charts-trainings/icarius/deploiement?ide=rstudio"
            },
            "jupyter": {
                "fr": "https://datalab.sspcloud.fr/my-lab/catalogue/inseefrlab-helm-charts-trainings/icarius/deploiement?ide=jupyter",
                "en": "https://datalab.sspcloud.fr/my-lab/catalogue/inseefrlab-helm-charts-trainings/icarius/deploiement?ide=jupyter"
            }
        }
    },
    "timeRequired": undefined,
    "tags": ["discover", "learn", "consolidate", "deepen"],
    /* spell-checker: enable */
});
