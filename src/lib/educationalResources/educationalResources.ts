import type { LocalizedString } from "../../i18n/Language";
/* spell-checker: disable */
import gameControllerImgUrl from "assets/img/gameController.png";
import grimoire01ImgUrl from "assets/img/grimoire01.png";
import grimoire02ImgUrl from "assets/img/grimoire02.png";
import grimoire03ImgUrl from "assets/img/grimoire03.png";
import grimoire04ImgUrl from "assets/img/grimoire04.png";
import grimoire05ImgUrl from "assets/img/grimoire05.png";
import grimoire06ImgUrl from "assets/img/grimoire06.png";
import grimoire07ImgUrl from "assets/img/grimoire07.png";
import grimoire08ImgUrl from "assets/img/grimoire08.png";
import grimoire09ImgUrl from "assets/img/grimoire09.png";
import grimoire10ImgUrl from "assets/img/grimoire10.png";
import grimoire11ImgUrl from "assets/img/grimoire11.png";
import grimoire12ImgUrl from "assets/img/grimoire12.png";
import grimoire13ImgUrl from "assets/img/grimoire13.png";
import grimoire14ImgUrl from "assets/img/grimoire14.png";
import openDataUniPngUrl from "assets/img/open-data-uni.png";
import neverendingImgUrl from "assets/img/neverending.png";
import grenouilleImgUrl from "assets/img/grenouille.jpg";
import coverImgUrl from "assets/img/cover.jpg";
import pollinisateurImgUrl from "assets/img/pollinisateur.jpg";
import crabeImgUrl from "assets/img/crabe.jpg";
import renardImgUrl from "assets/img/renard.jpg";
import odonateImgUrl from "assets/img/odonate.jpg";
import kubImgUrl from "assets/img/kub.png";
import utilitrImgUrl from "assets/img/utilitr.png";
import rSvgUrl from "assets/svg/r.svg";
import jupyterImgUrl from "assets/img/jupyter.png";
import sparkImgUrl from "assets/img/spark.png";
import hiveSvgUrl from "assets/svg/hive.svg";
import redashSvgUrl from "assets/svg/redash.svg";
import pythonImgUrl from "assets/img/python.jpg";
import minioImgUrl from "assets/img/python.jpg";
import vaultSvgUrl from "assets/svg/vault.svg";
import gitImgUrl from "assets/img/git.png";
import btbImgUrl from "assets/img/btb.png";
import mlflowImgUrl from "assets/img/mlflow.png";
import shinyImgUrl from "assets/img/shiny.png";
import dsImgUrl from "assets/img/data-science.png";
import observableImgUrl from "assets/img/observable.png";
import onyxiaImgUrl from "assets/img/onyxia.svg";
import rpolarsImgUrl from "assets/img/rpolars.png";
import cartifletteImgUrl from "assets/img/cartiflette.png";

export type EducationalResourceCategory =
    | "discover the datalab"
    | "training courses with R"
    | "training courses with python"
    | "funathon"
    | "training courses in data science"
    | "best practices";

export type EducationalResourceTag = "discover" | "learn" | "consolidate" | "deepen";

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
    tags: EducationalResourceTag[];
    category: EducationalResourceCategory;
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

export const educationalResources: (
    | EducationalResource
    | EducationalResourceDirectory
)[] = [
    {
        name: {
            fr: "Documentation du SSP Cloud",
            en: "Documentation of the SSP Cloud",
        },
        abstract: {
            fr: "Découverte et utilisation des services du SSP Cloud",
            en: "Discover and use the SSP Cloud services",
        },
        authors: ["Inseefrlab"],
        types: ["Tutoriel"],
        tags: ["discover", "learn"],
        category: "discover the datalab",
        imageUrl: onyxiaImgUrl,
        articleUrl: {
            fr: "https://docs.sspcloud.fr/",
            en: "https://docs.sspcloud.fr/en",
        },
    },

    {
        name: {
            fr: "Créer un tutoriel",
            en: "Create a tutorial",
        },
        abstract: {
            fr: "Découvrir comment ajouter une formation sur le SSP Cloud",
            en: "Discover how to add a training on SSP CLOUD",
        },
        authors: ["Inseefrlab"],
        types: ["Tutoriel"],
        tags: ["discover", "learn"],
        category: "discover the datalab",
        imageUrl: onyxiaImgUrl,
        articleUrl: {
            fr: "https://docs.sspcloud.fr/content/tutorials/introduction.html",
            en: "https://docs.sspcloud.fr/en/content/tutorials/introduction.html",
        },
    },

    {
        name: {
            en: "Open Data Challenges",
            fr: "Défis Open Data",
        },
        abstract: {
            en: "Train and use open data to address social and environmental issues",
            fr: "Se former et utiliser des données ouvertes pour répondre à des enjeux sociaux, environnementaux",
        },
        types: [
            {
                en: "Challenge",
                fr: "Défi",
            },
        ],
        parts: [
            {
                name: {
                    en: "Impact Diagnostics of Energy Performance",
                    fr: "Impact Diagnostics de Performance Energétique",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What impact does the DPE class have on energy consumption? Challenge led by Enedis",
                    fr: "Quel impact de la classe DPE sur les consommations énergétiques ? Défi porté par Enedis",
                },
                authors: ["data.gouv.fr", "Enedis"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65b76f15d7874915c8e41298/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABdiagnostics-de-performance-energetique%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Cultural Offer",
                    fr: "Offre culturelle",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How to enhance the cultural offer and promote access to culture?",
                    fr: "Comment valoriser l'offre culturelle et favoriser l'accès à la culture ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                category: "training courses in data science",
                tags: ["learn", "consolidate"],
                articleUrl: "https://defis.data.gouv.fr/defis/65b10aa72d0c187ecf296930/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABoffre-culturelle%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Elections",
                    fr: "Elections",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What are the links between voting and socio-demographic characteristics?",
                    fr: "Quels liens entre vote et caractéristiques socio-démographiques ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65b22219ffcf892bd066df76/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABelections%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Climate Change",
                    fr: "Changement climatique",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How has the climate in France evolved since the early 20th century?",
                    fr: "Quelle évolution du climat en France depuis le début du XXe siècle ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65b10beae24f409e31c547a5/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABchangement-climatique%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "City Center Shops",
                    fr: "Commerces de centre-ville",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What is the structure of the commercial fabric?",
                    fr: "Quelle est la structure du tissu commercial ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65b76b8536f029909a82ca1c/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABcommerces-de-centre-ville%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Cycling Infrastructure",
                    fr: "Infrastructures cyclables",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What are the links between cycling accidents and cycling infrastructure?",
                    fr: "Quels liens entre accidentologie à vélo et infrastructures cyclables ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65a92352ddd3d98e460e83f3/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABinfrastructures-cyclables%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Energy in France",
                    fr: "Energie en France",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What are the past and future energy tensions in France?",
                    fr: "Quelles tensions énergétiques passées et futures en France ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65a92372953d21f206abb110/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABenergie-en-france%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "School Map",
                    fr: "Carte scolaire",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How to know which school to enroll a child in?",
                    fr: "Comment permettre de savoir dans quel établissement inscrire un enfant ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65a9237ed493a309fc872e4a/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABcarte-scolaire%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Electric Vehicles",
                    fr: "Véhicules électriques",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "Is the distribution of charging infrastructure adequate?",
                    fr: "La répartition des infrastructures de recharge est-elle adaptée ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65a923a083cf5f728c9934b3/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABvehicules-electriques%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "France Recovery Plan",
                    fr: "Plan France Relance",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What are the impacts of the distributed aid on the economy and ecological transition?",
                    fr: "Quels impacts des aides distribués sur l'économie et la transition écologique ?",
                },
                authors: ["data.gouv.fr", "Latitudes"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/65a9238c202514467c0163d2/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABplan-france-relance%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Access and Use of Meteorological Data",
                    fr: "Accès et exploitation des données météorologiques",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How to facilitate access to meteorological data?",
                    fr: "Comment faciliter l'accès aux données météorologiques ?",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/6639df879e70e0b00e5aeef1/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABacces-aux-donnees-meteo%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Renewable Energy",
                    fr: "Energies renouvelables",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How to predict the variations in renewable energy production?",
                    fr: "Comment prévoir les variations de production d’énergies renouvelables ?",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/6639e311f4a75be320cfa517/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABenergies-renouvelables%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Agricultural Decision",
                    fr: "Décision agricole",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How to mobilize meteorological data for agricultural decision-making?",
                    fr: "Comment mobiliser les données météorologiques pour la prise de décision agricole ?",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/6639e67fa95c6e4f1da70e39/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABdecision-agricole%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Urban Heat Island",
                    fr: "Îlot de chaleur urbain",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What is the map of urban heat islands?",
                    fr: "Quelle cartographie des îlots de chaleur urbain ?",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/6639ea1a5fde712a09fa0c67/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABilots-de-chaleur-urbain%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Access to Sport",
                    fr: "Accès au sport",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "Sport for all: Evaluate and improve equal access to sports activities in France",
                    fr: "Sport pour tous : Évaluer et améliorer l’égalité d’accès aux activités sportives en France",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/66a0fdf41a40f23f40025444/",
            },
            {
                name: {
                    en: "JOP2024 and Cultural Offer",
                    fr: "JOP2024 et offre culturelle",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "Olympic and Paralympic Games: Enrich the experience and highlight the cultural offer",
                    fr: "Jeux Olympiques et Paralympiques : Enrichissez l’expérience et mettez en valeur l’offre culturelle",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/66a0ffa8d8f03afc1d474a53/",
            },
            {
                name: {
                    en: "JOP2024 and Air Quality",
                    fr: "JOP2024 et qualité de l’air",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "Olympic and Paralympic Games: air pollution issues in the context of physical activity",
                    fr: "Jeux Olympiques et Paralympiques : enjeux de pollution de l’air dans le cadre d’une activité physique",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/66a10128a66990ed3d718a53/",
            },
            {
                name: {
                    en: "Diversity and inclusion in the workplace",
                    fr: "Diversité et inclusion en entreprise",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "What is EDF SA's policy on inclusion and diversity? A challenge by EDF",
                    fr: "Quelle politique sur l'inclusion et la diversité au sein d'EDF SA ? Un défi porté par EDF",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/6704d5262a223f0cbc866c68/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABdiversite-et-inclusion-en-entreprise%C2%BB&security.allowlist.enabled=false",
            },
            {
                name: {
                    en: "Revitalizing small towns",
                    fr: "Revitalisation des petites villes",
                },
                imageUrl: openDataUniPngUrl,
                abstract: {
                    en: "How to present the specificities of a small town ? A challenge by Banque des territoires",
                    fr: "Comment représenter les spécifités d'une petite ville de demain ? Un défi porté par la Banque des territoires",
                },
                authors: ["data.gouv.fr"],
                types: [
                    {
                        en: "Challenge",
                        fr: "Défi",
                    },
                ],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                articleUrl: "https://defis.data.gouv.fr/defis/6704d7a9120c998a2085f8bc/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABrevitalisation-des-petites-villes%C2%BB&security.allowlist.enabled=false",
            },
        ],
    },

    {
        name: {
            fr: "FuncampR - Grimoire (FR)",
            en: "FuncampR - Spellbook (EN - WIP)",
        },
        abstract: {
            fr: "Une aventure d'apprentissage vidéoludique pour le langage statistique R, à partager au sein du SSP (et du royaume de Statis). Pour en savoir plus, consulter le site https://funcamp.sspcloud.fr/",
            en: "A serious game to learn statistical language R, dedicated to beginners - and gamers :-p. For more information, see https://funcamp.sspcloud.fr/",
        },
        imageUrl: gameControllerImgUrl,
        parts: [
            {
                name: "icaRius",
                abstract: {
                    fr: "La partie vidéoludique du FuncampR. Un jeu de rôle inspiré d'un célèbre jeu vidéo des années 1990...",
                    en: "The video game part of FuncampR. A RPG inspired by a famous video game from the 1990s ...",
                },
                authors: [
                    "A. Degorre",
                    {
                        fr: "communauté Solarus",
                        en: "Solarus Community",
                    },
                ],
                contributors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                    {
                        fr: "communauté Solarus",
                        en: "Solarus Community",
                    },
                ],
                types: [
                    {
                        fr: "Jeu vidéo",
                        en: "Video Game",
                    },
                ],
                tags: ["discover", "learn"],
                category: "training courses with R",
                imageUrl: gameControllerImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/icarius?autoLaunch=true",
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 1",
                    en: "IgoR Spellbook - Chapter 1",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 1 : la maison d’icaRius. Découverture du grimoire IgoR et de la langue des Runes",
                    en: "Educational part of FuncampR. Chapter 1: icaRius' home. Discovery of the IgoR Spellbook and the Runes' language",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["discover"],
                category: "training courses with R",
                imageUrl: grimoire01ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre1»&name=Grimoire-Chap1",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter1»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=Spellbook-Chap1»",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 2",
                    en: "IgoR Spellbook - Chapter 2",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 2 : la poule pondeuse. Dans le village de Kokoro, icaRius aide la fermière à recomposer le livre des pontes...",
                    en: "FuncampR educational part. Chapter 2: the laying hen. In the village of Kokoro, icaRius helps the farmer to recompose the egg-laying book...",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire02ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre2»&name=Grimoire-Chap2",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter2»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap2",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 3",
                    en: "IgoR Spellbook - Chapter 3",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 3 :  le village de GrissGrass. Le chef du village demande à icaRius de trouver quelle est l’exploitation la plus productive en herbe de Mandragore.",
                    en: "FuncampR educational part. Chapter 3: the village of GrissGrass. The village chief asks icaRius to find the most productive Mandrake farm.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire03ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre3»&name=Grimoire-Chap3",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter3»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap3",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 4",
                    en: "IgoR Spellbook - Chapter 4",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 4 : le secret de la culture de Mandragore. IcaRius doit retrouver la recette de la culture de la Mandragore.",
                    en: "FuncampR educational part. Chapter 4: The Secret of Mandrake Culture. IcaRius must find the recipe for the culture of the Mandrake.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire04ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre4»&name=Grimoire-Chap4",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter4»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap4",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 5",
                    en: "IgoR Spellbook - Chapter 5",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 5 :  le cuistot Batreb. Pour libérer Essespéus dans le château de Statis, icaRius doit d’abord obtenir la confiance du cuistot Batreb.",
                    en: "FuncampR educational part. Chapter 5: the cook Batreb. To free Essespeus in Statis Castle, icaRius must first gain the trust of cook Batreb.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire05ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre5»&name=Grimoire-Chap5",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter5»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap5",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 6",
                    en: "IgoR Spellbook - Chapter 6",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 6 : la fake news. Essespéus et icaRius vont créer une Fake News pour tromper les armées de SaSSoS.",
                    en: "FuncampR educational part. Chapter 6: fake news. Essespéus and icaRius create a Fake News to deceive the armies of SaSSoS.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire06ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre6»&name=Grimoire-Chap6",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter6»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap6",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 7",
                    en: "IgoR Spellbook - Chapter 7",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 7 (optionnel): le labyrinthe. Le Mage Delagarde propose à icaRius un défi pour obtenir les bonnes directions dans le labyrinthe.",
                    en: "FuncampR educational part. Chapter 7 (optional): the labyrinth. Mage Delagarde offers icaRius a challenge to get the right directions in the labyrinth.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire07ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre7»&name=Grimoire-Chap7",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter7»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap7",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 8",
                    en: "IgoR Spellbook - Chapter 8",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 8: la plume d’IgoR. Pour soulever la pierre qui bloque le passage, icaRius doit apprendre de nouveaux sortilèges.",
                    en: "FuncampR educational part. Chapter 8: IgoR's Feather. To lift the stone blocking the passage, icaRius must learn new spells.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire08ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre8»&name=Grimoire-Chap8",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter8»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap8",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 9",
                    en: "IgoR Spellbook - Chapter 9",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 9: le village de Sandia. Mam’Grouxi narre les innombrables naissances qu’elle a vu au fil des ans (des siècles?).",
                    en: "FuncampR educational part. Chapter 9: the village of Sandia. Mam’Grouxi recounts the countless births she has seen over the years.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire09ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre9»&name=Grimoire-Chap9",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter9»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap9",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 10",
                    en: "IgoR Spellbook - Chapter 10",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 10: La porte de sortie - Save Me. Dans ses pérégrinations, icaRius se trouve pris au piège dans une salle de l'impossible",
                    en: "FuncampR educational part. Chapter 10: Exit Door - Save Me. In his wanderings, icaRius finds himself trapped in an Impossible Room.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire10ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre10»&name=Grimoire-Chap10",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter10»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap10",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 11",
                    en: "IgoR Spellbook - Chapter 11",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 11: Codez-le une fois. L'automate TeoC enseigne à icaRius la Voie du Reproductible",
                    en: "FuncampR educational part. Chapter 11: Code It Once. The TeoC automaton teaches icaRius the Way of the Reproducible.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire11ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre11»&name=Grimoire-Chap11",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter11»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap11",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 12",
                    en: "IgoR Spellbook - Chapter 12",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 12: De l’oxygène documentaire. Rencontre d'un drôle d’oiseau, FebeleR, féru de littérature statisienne et de grimoires...",
                    en: "FuncampR educational part. Chapter 12: Breathe and document. Meeting with a strange bird, FebeleR, fond of Statisian literature and grimoires ...",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire12ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre12»&name=Grimoire-Chap12",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter12»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap12",
                },
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre 13",
                    en: "IgoR Spellbook - Chapter 13",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre 13: l'histoire sans fin. La gueRnouille Asa apprend à icaRius à écrire lui-même la fin de l'histoire",
                    en: "FuncampR educational part. Chapter 13: The NeveRending Story. Asa fRog teaches icaRius to write himself the end of the story",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire13ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre13»&name=Grimoire-Chap13",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter13»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-Chap13",
                },
            },
            {
                name: {
                    fr: "Grimoire - Neverending",
                    en: "Spellbook - Neverending",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Le parchemin pour écrire soi-même le chapitre 13 et la fin de l'histoire d'icaRius.",
                    en: "FuncampR educational part. The scroll on which icaRius writes chapter 13 and the end of the  story.",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel Rstudio",
                        en: "Rstudio Tutorial",
                    },
                ],
                tags: ["discover", "learn"],
                category: "training courses with R",
                imageUrl: neverendingImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/neverending?autoLaunch=true&name=neveRending",
            },
            {
                name: {
                    fr: "Grimoire IgoR - Chapitre Bonus",
                    en: "IgoR Spellbook - Bonus Chapter",
                },
                abstract: {
                    fr: "Partie pédagogique du FuncampR. Chapitre Bonus :  le village de Phocea. La cheffe-Sylphe, Lireva, demande à icaRius de l'aider à reconstruire son village, détruit par les bombes sylvestres",
                    en: "FuncampR educational part. Bonus Chapter: the village of Phocea. The Sylph leader, Lireva, asks icaRius to help her rebuild her village, destroyed by Sylvan bombs",
                },
                authors: [
                    {
                        fr: "Communauté FuncampR",
                        en: "FuncampR Community",
                    },
                ],
                types: [
                    {
                        fr: "Tutoriel R",
                        en: "R Tutorial",
                    },
                ],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: grimoire14ImgUrl,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre14»&name=Grimoire-ChapBonus",
                    en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter14»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-ChapBonus",
                },
            },
        ],
    },

    {
        name: "Parcours R",
        abstract: "Parcours de formation à R du pôle ministériel MTES-MCTRCT",
        imageUrl: rSvgUrl,
        parts: [
            {
                name: "1. Découvrir R et RStudio",
                abstract:
                    "Découvrir le fonctionnement de R, Aborder la dimension modulaire du logiciel, S’approprier l’interface graphique du logiciel, Être en capacité d’importer dans R un fichier CSV et de réaliser des calculs statistiques simples (somme, moyenne, table des fréquences)",
                authors: [
                    "Thierry Zorn",
                    "Murielle Lethrosne",
                    "Vivien Roussez",
                    "Pascal Irz",
                ],
                types: ["Tutoriel R"],
                tags: ["discover"],
                category: "training courses with R",
                imageUrl: grenouilleImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M1&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_introduction-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                articleUrl: "https://mtes-mct.github.io/parcours_r_socle_introduction/",
            },
            {
                name: "2. Préparer ses données avec R et le Tidyverse",
                abstract:
                    "Être en capacité d’explorer les données, de les comprendre, de les structurer, de les croiser et les enrichir avec des données externes pour les préparer à des traitements statistiques. La préparation des données est une étape fondamentale pour faciliter la réalisation des analyses statistiques",
                authors: ["Maël Theulière", "Bruno Terseur"],
                types: ["Tutoriel R"],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: coverImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M2&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_preparation_des_donnees-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                articleUrl:
                    "https://mtes-mct.github.io/parcours_r_socle_preparation_des_donnees/",
            },
            {
                name: "3. Statistiques descriptives avec R",
                abstract:
                    "Rappels théoriques sur les méthodes usuelles de statistiques uni- et bi-variées, mise en œuvre avec R, interprétation",
                authors: ["Solène Colin", "Vivien Roussez", "Pascal Irz"],
                types: ["Tutoriel R"],
                tags: ["learn"],
                category: "training courses with R",
                imageUrl: pollinisateurImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M3&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_statistiques_descriptives-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                articleUrl:
                    "https://mtes-mct.github.io/parcours_r_module_statistiques_descriptives/",
            },
            {
                name: "4. Analyse des données multi-dimensionnelles avec R",
                abstract:
                    "Méthodologie pour évaluer, en fonction des caractéristiques des données, la pertinence des méthodes usuelles d'analyse multidimensionnelle (ACP, AFC, ACM, CAH). Mise en œuvre avec le package factoMiner. Sorties graphiques avec le package factoextra. Interprétation",
                authors: ["Vivien Roussez", "Pascal Irz"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses with R",
                imageUrl: crabeImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M4&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_multi_dimensionnelles-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                articleUrl:
                    "https://mtes-mct.github.io/parcours_r_module_analyse_multi_dimensionnelles/",
            },
            {
                name: "5. Valoriser ses données avec R",
                abstract:
                    "Utiliser les outils R pour produire des graphiques avec le package ggplot2. Produire des cartes en utilisant ggplot2 et sf. Produire des tableaux interactifs. Rendre interactifs des graphiques et des cartes",
                authors: ["Murielle Lethrosne", "Maël Theulière"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses with R",
                imageUrl: renardImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M5&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_datavisualisation-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                articleUrl:
                    "https://mtes-mct.github.io/parcours_r_module_datavisualisation/",
            },
            {
                name: "7. Analyse spatiale",
                abstract:
                    "Introduction aux données spatiales, lire et écrire des données spatiales, manipuler des donnés spatiales, créer des cartes.",
                authors: ["Murielle Lethrosne", "Maël Theulière"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses with R",
                imageUrl: odonateImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=ParcoursR_M7&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_spatiale-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                articleUrl:
                    "https://mtes-mct.github.io/parcours_r_module_analyse_spatiale/",
            },
        ],
    },

    {
        name: {
            fr: "Initiation à Python",
            en: "Introduction to Python",
        },
        abstract: {
            fr: "Cours introductif à Python : fondamentaux du langage et premières manipulations de données",
            en: "Introductory course to Python: language fundamentals and initial data manipulations",
        },
        authors: ["inseefrlab"],
        contributors: ["Romain Avouac"],
        types: ["Notebook Python"],
        tags: ["discover", "learn"],
        category: "training courses with python",
        imageUrl:
            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
        parts: [
            {
                name: {
                    fr: "Introduction",
                    en: "Introduction",
                },
                abstract: {
                    fr: 'Introduction de l\'auto-formation "Initiation à Python" du SSP Cloud',
                    en: 'Introduction to the self-training "Introduction to Python" on the SSP Cloud',
                },
                authors: ["inseefrlab"],
                contributors: ["Romain Avouac"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                articleUrl: {
                    fr: "https://inseefrlab.github.io/formation-python-initiation/",
                    en: "https://inseefrlab.github.io/formation-python-initiation/en/",
                },
            },
            {
                name: {
                    fr: "Fondamentaux du langage",
                    en: "Language fundamentals",
                },
                abstract: {
                    fr: "Présentation de la syntaxe et des objets de base en Python",
                    en: "Presentation of syntax and basic objects in Python",
                },
                authors: ["inseefrlab"],
                contributors: ["Romain Avouac"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Types de base et variables",
                            en: "Basic Types and Variables",
                        },
                        abstract: {
                            fr: "Découverte des types de base (nombres et chaînes de caractères) et des variables.",
                            en: "Introduction to basic types (numbers and strings) and variables.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20types-variables%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20types-variables%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20types-variables%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20types-variables%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Structures de données 1 : listes et tuples",
                            en: "Data Structures 1: Lists and Tuples",
                        },
                        abstract: {
                            fr: "Découverte des structures de données séquentielles : listes et tuples.",
                            en: "Introduction to sequential data structures: lists and tuples.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20data-structures1%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20data-structures1%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20data-structures1%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20data-structures1%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Structures de données 2 : dictionnaires et sets",
                            en: "Data Structures 2: Dictionaries and Sets",
                        },
                        abstract: {
                            fr: "Découverte des structures de données non-ordonnées : dictionnaires et sets.",
                            en: "Introduction to unordered data structures: dictionaries and sets.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20data-structures2%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20data-structures2%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20data-structures2%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20data-structures2%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Tests logiques et conditions",
                            en: "Tests and Conditions",
                        },
                        abstract: {
                            fr: "Découverte des tests et des structures conditionnelles, qui permettent à un programme de prendre des décisions de manière automatisée.",
                            en: "Introduction to tests and conditional structures, which allow a program to make automated decisions.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20tests%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20tests%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20tests%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20tests%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Boucles",
                            en: "Loops",
                        },
                        abstract: {
                            fr: "Automatisation d'opérations répétitives à l'aide des boucles for et des boucles while.",
                            en: "Automating repetitive operations using for loops and while loops.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20loops%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20loops%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20loops%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20loops%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Fonctions",
                            en: "Functions",
                        },
                        abstract: {
                            fr: "Rendre son code mieux structuré et plus lisible avec les fonctions.",
                            en: "Make your code more structured and readable with functions.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20functions%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20functions%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20functions%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20functions%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Notions de programmation orientée objet",
                            en: "Introduction to Object-Oriented Programming",
                        },
                        abstract: {
                            fr: "Un rapide tour dans le monde des objets, leurs attributs et leurs méthodes",
                            en: "A quick tour of the world of objects, their attributes, and their methods",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20oop%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20oop%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20fundamentals%20oop%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20fundamentals%20oop%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                ],
            },
            {
                name: {
                    fr: "Manipulation de données",
                    en: "Data Manipulation",
                },
                abstract: {
                    fr: "Exploration, manipulation et visualisation de données",
                    en: "Exploration, manipulation, and visualization of data",
                },
                authors: ["inseefrlab"],
                contributors: ["Romain Avouac"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Manipulation de fichiers",
                            en: "Manipulating Files",
                        },
                        abstract: {
                            fr: "Manipulation de fichiers externes : import de modules et lecture/écriture de fichiers texte.",
                            en: "Manipulation of external files: importing modules and reading/writing text files.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20modules-files%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20modules-files%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20modules-files%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20modules-files%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Travailler avec des fichiers CSV et JSON",
                            en: "Working with CSV and JSON Files",
                        },
                        abstract: {
                            fr: "Manipulation des fichiers CSV et JSON, deux types de fichiers très utilisés pour la diffusion de données.",
                            en: "Manipulation of CSV and JSON files, two types of files widely used for data dissemination.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20csv-json-files%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20csv-json-files%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20csv-json-files%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20csv-json-files%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Calcul numérique avec NumPy",
                            en: "Numerical Computation with NumPy",
                        },
                        abstract: {
                            fr: "Manipulation des arrays et des fonctions de NumPy, la librairie de référence pour le calcul numérique.",
                            en: "Manipulation of arrays and functions of NumPy, the reference library for numerical computation.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20numpy%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20numpy%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20numpy%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20numpy%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Traiter des données tabulaires avec Pandas",
                            en: "Processing Tabular Data with Pandas",
                        },
                        abstract: {
                            fr: "Découverte de Pandas, librairie de référence pour le traitement des données tabulaires en Python.",
                            en: "Introduction to Pandas, the reference library for processing tabular data in Python.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20pandas%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20pandas%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20pandas%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20pandas%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Introduction à la visualisation de données",
                            en: "Introduction to Data Visualization",
                        },
                        abstract: {
                            fr: "Exploration des bases de la visualisation de données avec Python : les graphiques simples de Pandas et les visualisations esthétiques de Seaborn.",
                            en: "Exploration of the basics of data visualization with Python: simple graphs with Pandas and aesthetic visualizations with Seaborn.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20dataviz%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20dataviz%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20manipulation%20dataviz%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20manipulation%20dataviz%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                ],
            },
            {
                name: {
                    fr: "Projets",
                    en: "Projects",
                },
                abstract: {
                    fr: "Des projets de code pour mettre en application les enseignements de la formation",
                    en: "Coding projects to apply the teachings of the training",
                },
                authors: ["inseefrlab"],
                contributors: ["Romain Avouac"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Projet 1 - Puissance 4",
                            en: "Project 1 - Connect Four",
                        },
                        abstract: {
                            fr: "Un projet de code pour mettre en pratique les éléments fondamentaux de Python : structures de données, boucles, fonctions, conditions.",
                            en: "A coding project to practice the fundamental elements of Python: data structures, loops, functions, conditions.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20projects%20puissance4%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20projects%20puissance4%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20projects%20puissance4%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20projects%20puissance4%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Projet 2 - Prédictions météorologiques",
                            en: "Project 2 - Wheather forecast",
                        },
                        abstract: {
                            fr: "Ce projet vise à introduire au requêtage d'API et à la manipulation de données qui en sont issues, en utilisant des fonctions afin de faciliter la reproductibilité des analyses.",
                            en: "This project aims to introduce API querying and the manipulation of resulting data, using functions to facilitate reproducibility of analyses.",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Romain Avouac"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20projects%20meteo%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20projects%20meteo%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20projects%20meteo%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20projects%20meteo%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Projet 3 - Estimations de population à partir du recensement",
                            en: "Project 3 - Population estimation from census data",
                        },
                        abstract: {
                            fr: "Ce projet propose de reproduire une analyse standard de statistique publique. Il repose sur l'utilisation de la librairie pandas et des librairies de visualisation usuelles (matplotlib, seaborn).",
                            en: "This project aims to reproduce a standard analysis from official statistics. It relies on the use of the Pandas library and common visualization libraries (matplotlib, seaborn).",
                        },
                        authors: ["inseefrlab"],
                        contributors: ["Thomas Faria"],
                        types: ["Notebook Python"],
                        tags: ["discover", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20projects%20RP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20projects%20RP%C2%BB&security.allowlist.enabled=false",
                            },
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABfr%20projects%20RP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=python-initiation&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABen%20projects%20RP%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                ],
            },
        ],
    },
    {
        name: "Python pour la data science",
        abstract: {
            fr: "Approfondissement de Python pour la data science : manipulation de données, visualisation, modélisation, traitement du langage naturel",
            en: "Consolidating skills in Python for data science: data manipulation, visualization, modeling, natural language processing",
        },
        authors: ["Lino Galiana"],
        types: ["Notebook Python"],
        tags: ["consolidate", "learn"],
        category: "training courses with python",
        imageUrl:
            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
        parts: [
            {
                name: "Introduction",
                abstract: {
                    fr: "Cette introduction présente l'objectif du cours, les partis-pris pédagogiques, le fil conducteur de cet enseignement ainsi que les modalités pratiques de celui-ci. Elle propose aussi une introduction aux enjeux scientifiques et opérationnels de la _data science_.",
                    en: "This introduction presents the course objective, pedagogical approach, the main theme of this of the course, as well as the practical practical details. It also provides an introduction to the scientific and operational challenges of data science.",
                },
                authors: ["Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["consolidate", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Introduction",
                            en: "Introduction",
                        },
                        abstract: {
                            fr: "Introduction du cours pour expliquer les modalités du cours et les outils utilisés.",
                            en: "Introduction to the course to explain how the course is run and the tools used.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 15,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/getting-started/",
                            en: "https://pythonds.linogaliana.fr/en/content/getting-started/",
                        },
                    },
                    {
                        name: {
                            fr: "Avoir un environnement Python fonctionnel pour la data science",
                            en: "A functional Python environment for data science",
                        },
                        abstract: {
                            fr: "Ce chapitre introduit les bases de l'environnement `Python` pour la _data science_ en mettant l'accent sur la modularité du langage et l'utilisation des _notebooks_ `Jupyter`. Il présente les éléments essentiels pour configurer un environnement Python fonctionnel, explique les avantages des IDE comme `VSCode`, et propose une prise en main des _notebooks_ interactifs. Ce chapitre aborde également la gestion des erreurs et l'importance de la formation continue en `Python`, en fournissant des ressources utiles pour rester à jour dans cet écosystème dynamique.",
                            en: "This chapter introduces the basics of the `Python` environment for _data science_, focusing on the modularity of the language and the use of `Jupyter` _notebooks_. It presents the essentials for setting up a functional Python environment, explains the advantages of IDEs such as `VSCode`, and offers a hands-on introduction to interactive _notebooks_. The chapter also discusses error handling and the importance of ongoing training in `Python`, providing useful resources for staying up to date in this dynamic ecosystem.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        timeRequired: 20,
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/getting-started/01_environment.html",
                            en: "https://pythonds.linogaliana.fr/en/content/getting-started/01_environment.html",
                        },
                    },
                    {
                        name: {
                            fr: "Démarche à adopter face à un jeu de données",
                            en: "How to deal with a data set",
                        },
                        abstract: {
                            fr: "Quelques éléments pour adopter une démarche scientifique et éthique face à un jeu de données.",
                            en: "A few guidelines for adopting a scientific and ethical approach to data sets.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        category: "training courses with python",
                        timeRequired: 25,
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/getting-started/02_data_analysis.html",
                            en: "https://pythonds.linogaliana.fr/en/content/getting-started/02_data_analysis.html",
                        },
                    },
                    {
                        name: {
                            fr: "Quelques exercices de rappels pour se remettre en selle",
                            en: "A few refresher exercises to get back in the saddle",
                        },
                        abstract: {
                            fr: "Un chapitre consacré à divers exercices pour réviser les principes de base de la syntaxe `Python` et des objets utilisés par le langage.",
                            en: "A chapter devoted to various exercises to review the basics of `Python` syntax and the objects used by the language.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 45,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/getting-started/03_revisions.html",
                            en: "https://pythonds.linogaliana.fr/en/content/getting-started/03_revisions.html",
                        },
                    },
                ],
            },
            {
                name: "Manipulation de données",
                abstract: {
                    fr: "Manipulation et récupération automatisée de données",
                    en: "Automated data wrangling and retrieval",
                },
                authors: ["Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["consolidate", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Introduction",
                            en: "Introduction",
                        },
                        abstract: {
                            fr: "`Python` s'est imposé comme une alternative très crédible à `R` dans la manipulation de données. L'écosystème `Pandas` a permis de démocratiser l'utilisation des DataFrames dans `Python` et faciliter la manipulation de données structurées grâce à la philosophie `SQL`. `Python` reste également le langage le plus pratique pour récupérer et manipuler des données moins structurées (_webscraping_, API). `Python` tend à devenir, grâce au développement d'API vers d'autres langages (`C`, `Spark`, `Postgres`, `ElasticSearch`...), le langage \"_one to rule them all_\"",
                            en: 'Python has established itself as a credible alternative to R for data manipulation. The `Pandas` ecosystem has made it possible to democratize the use of DataFrames in `Python` and make it easier to manipulate of structured data thanks to the `SQL` philosophy. `Python` is also the most practical language for retrieving and manipulating unstructured data (_webscraping_, APIs). Python is tending to become, thanks to the development of APIs for other languages (`C`, `Spark`, `Postgres`, `ElasticSearch`...), the _"one to rule them all_" language.',
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 5,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/manipulation/",
                            en: "https://pythonds.linogaliana.fr/en/content/manipulation/",
                        },
                    },
                    {
                        name: {
                            fr: "Numpy, la brique de base de la data science",
                            en: "Numpy, the foundation of data science",
                        },
                        abstract: {
                            fr: "`Numpy` constitue la brique de base de l'écosystème de la _data science_ en `Python`. Toutes les librairies de manipulation de données, de modélisation et de visualisation reposent, de manière plus ou moins directe, sur `Numpy`. Il est donc indispensable de revoir quelques notions sur ce package avant d'aller plus loin.",
                            en: "`Numpy` is the cornerstone of the _data science_ ecosystem in `Python`. All data manipulation, modeling, and visualization libraries rely, directly or indirectly, on `Numpy`. It is therefore essential to review some concepts of this package before moving forward.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB01_numpy%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2001_numpy%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB01_numpy%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2001_numpy%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB01_numpy%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2001_numpy%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?name=jupyter-python&shared=false&version=1.13.44&autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen%2Fmanipulation%2001_numpy%C2%BB",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Introduction à Pandas",
                            en: "Introduction to Pandas",
                        },
                        abstract: {
                            fr: "`Pandas` est l'élément central de l'écosystème `Python` pour la _data science_. Ce chapitre présente les premières manipulations de données qu'on peut faire grâce à `Pandas` pour explorer la structure de son jeu de données.",
                            en: "`Pandas` is the central piece of the `Python` ecosystem for data science. This chapter presents the first data exploration that can be performed with `Pandas` in order to explore the structure of a dataset.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 120,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002_pandas_intro%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2002_pandas_intro%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002_pandas_intro%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen%2Fmanipulation%2002_pandas_intro%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Statistiques par groupe et association de plusieurs jeux de données avec Pandas",
                            en: "Analyzing multiple datasets and producing summary statistics with Pandas",
                        },
                        abstract: {
                            fr: "Le chapitre d'introduction à `Pandas` a permis de présenter le principe de données organisées sous une forme de _DataFrame_ et la praticité de l'écosystème `Pandas` pour effectuer des opérations simples sur un jeu de données. Ce chapitre consolide ces principes en présentant deux types de traitements classiques de la boite à outil des _data scientists_ : statistiques par groupe et associations de données.",
                            en: "The introductory chapter to `Pandas` presented how data were organized as _DataFrames_ and how the `Pandas` ecosystem can be useful to perform simple operations on datasets. This chapter consolidates these principles by introducing two classic types of operations from the data scientist's toolbox: group statistics and data merging.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_suite%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002_pandas_suite%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_suite%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2002_pandas_suite%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_suite%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002_pandas_suite%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB02_pandas_suite%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen%2Fmanipulation%2002_pandas_suite%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Introduction aux données spatiales avec Geopandas",
                            en: "Introduction to spatial data with Geopandas",
                        },
                        abstract: {
                            fr: "Les données géolocalisées se sont multipliées depuis quelques années, qu’il s’agisse de données open-data ou de traces numériques géolocalisées de type _big-data_. Pour les données spatiales, le package `GeoPandas` étend les fonctionalités de l’écosystème `Pandas` afin de permettre de manipuler des données géographiques complexes de manière simple.",
                            en: "Geocoded data have been more and more used these recent years in research, public policies or business decisions. Data scientists use them a lot, whether they come from open data or geocoded digital traces. For spatial data, the `GeoPandas` package extends the functionalities of the `Pandas` ecosystem to enable handling complex geographical data in a simple manner. This chapter presents the challenge of handling spatial data with `Python`.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 180,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB03_geopandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2003_geopandas_intro%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB03_geopandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2003_geopandas_intro%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB03_geopandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2003_geopandas_intro%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB03_geopandas_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen%2Fmanipulation%2003_geopandas_intro%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Web scraping avec Python",
                            en: "Web scraping with Python",
                        },
                        abstract: {
                            fr: '`Python` permet de facilement récupérer une page web pour en extraire des données à restructurer. Le _web scraping_, que les Canadiens nomment _"moissonnage du web"_, est une manière de plus en plus utilisée de récupérer une grande masse d\'information en temps réel. Ce chapitre présente les deux principaux paradigmes par le biais de `BeautifulSoup` et `Selenium` et les principaux défis du _web scraping_.',
                            en: "`Python` allows for easy retrieval of a web page to extract and restructure data. Web scraping is an increasingly popular method for gathering large amounts of information in real-time. This chapter introduces the two main paradigms through `BeautifulSoup` and `Selenium` and discusses the key challenges of web scraping.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04a_webscraping_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004a_webscraping_TP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04a_webscraping_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2004a_webscraping_TP%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04a_webscraping_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004a_webscraping_TP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04a_webscraping_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004a_webscraping_TP%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Récupérer des données avec des API depuis Python",
                            en: "Retrieve data with APIs from Python",
                        },
                        abstract: {
                            fr: "Les __API__ (_Application Programming Interface_) sont un mode d'accès aux données en expansion. Grâce aux API, l'automatisation de scripts est facilitée puisqu'il n'est plus nécessaire de stocker un fichier, et gérer ses différentes versions, mais uniquement de requêter une base et laisser au producteur de données le soin de gérer les mises à jour de la base.",
                            en: "__APIs__ (_Application Programming Interface_) are an expanding way of accessing data. Thanks to APIs, script automation is facilitated since it is no longer necessary to store a file and manage its different versions, but only to query a database and let the data producer handle the updates.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04c_API_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004c_API_TP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04c_API_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2004c_API_TP%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04c_API_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004c_API_TP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04c_API_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004c_API_TP%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                    {
                        name: {
                            fr: "Maîtriser les expressions régulières",
                            en: "Mastering regular expressions",
                        },
                        abstract: {
                            fr: "Les expressions régulières fournissent un cadre très pratique pour manipuler de manière flexible des données textuelles. Elles sont très utiles notamment pour les tâches de traitement naturel du langage (__NLP__) ou le nettoyage de données textuelles.",
                            en: "Regular expressions provide a very practical framework for flexibly manipulating textual data. They are especially useful for natural language processing (__NLP__) tasks or cleaning textual data.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 60,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04b_regex_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004b_regex_TP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04b_regex_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2004b_regex_TP%C2%BB&security.allowlist.enabled=false",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04b_regex_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004b_regex_TP%C2%BB&security.allowlist.enabled=false",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%AB04b_regex_TP%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004b_regex_TP%C2%BB&security.allowlist.enabled=false",
                            },
                        },
                    },
                ],
            },
            {
                name: "Visualisation de données",
                abstract: "Graphiques, cartes, et visualisations interactives",
                authors: ["Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["consolidate", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Introduction",
                            en: "Introduction",
                        },
                        abstract: {
                            fr: "Les _data scientists_ doivent être en mesure de synthétiser l'information présente dans un jeu de données par le biais de la représentation graphique, car le cerveau humain comprend mieux les informations à travers des figures que des tableaux. La visualisation de données est importante à la fois dans une démarche exploratoire pour comprendre la structure des phénomènes étudiés mais aussi dans une phase de communication de résultats à des publics n'ayant pas forcément accès à la donnée brute et devant se contenter de synthèses. Cette partie du cours est une introduction à ce vaste sujet par le biais de la pratique à travers la construction de graphiques descriptifs et de cartes.",
                            en: "Data scientists need to be able to synthesize the information contained in a dataset through graphical representation, because the human brain understands information better through figures than through tables. Data visualization is important both as part of an exploratory approach to understanding the structure of the phenomena under study, but also as part of a phase of communicating results to audiences who don't necessarily have access to raw data and need to make do with summaries. This part of the course is an introduction to this vast subject through the practical construction of descriptive graphs and maps.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 5,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/visualisation/",
                            en: "https://pythonds.linogaliana.fr/en/content/visualisation/",
                        },
                    },
                    {
                        name: "Construire des graphiques avec Python",
                        abstract:
                            "Une partie essentielle du travail du  _data scientist_ est d'être en mesure de synthétiser une information dans des représentations graphiques percutantes. Ce chapitre permet de découvrir les enjeux de la représentation de données avec `Python`, l'écosystème pour faire ceci. Il ouvre également à la représentation interactive de données avec `Plotly`.",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%ABmatplotlib%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20matplotlib%20correction%C2%BB",
                            jupyter:
                                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%ABmatplotlib%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20matplotlib%20correction%C2%BB",
                        },
                    },
                    {
                        name: "De belles cartes avec python: mise en pratique",
                        abstract:
                            "La cartographie est un excellent moyen de diffuser de la connaissance sur les données, y compris à des publics peu familiers de la statistique. Ce chapitre permet de découvrir le défi de la cartographie et la manière dont on peut utiliser `Python` pour construire des cartes.",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%ABmaps%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20maps%20correction%C2%BB",
                            jupyter:
                                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%ABmaps%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20maps%20correction%C2%BB",
                        },
                    },
                ],
            },
            {
                name: {
                    fr: "Modélisation",
                    en: "Modeling",
                },
                abstract: {
                    fr: "La facilité à modéliser des processus très diverses a grandement  participé au succès de `Python` dans les années 2010. La popularité de `Python` est indissociable de l'essor du _machine learning_ comme technique de modélisation. Cette partie vise à introduire aux problématiques spécifiques en présentant principalement la librairie `Scikit Learn` qui permet d'avoir un _pipeline_ de _machine learning_ opérationnel très rapidement.",
                    en: "The ability to model a wide range of processes has been a major factor in the success of `Python` in the 2010s. The popularity of `Python` is inseparable from the rise of _machine learning_ as a modeling technique. This section aims to provide an introduction to the specific issues involved by presenting the `Scikit Learn` library, which provides a _pipeline_ of _machine learning_.  machine learning _pipeline_ up and running very quickly.",
                },
                authors: ["Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["consolidate", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: {
                            fr: "Introduction",
                            en: "Introduction",
                        },
                        abstract: {
                            fr: "La facilité à modéliser des processus très diverses a grandement  participé au succès de `Python` dans les années 2010. La popularité de `Python` est indissociable de l'essor du _machine learning_ comme technique de modélisation. Cette partie vise à introduire aux problématiques spécifiques en présentant principalement la librairie `Scikit Learn` qui permet d'avoir un _pipeline_ de _machine learning_ opérationnel très rapidement.",
                            en: "The ability to model a wide range of processes has been a major factor in the success of `Python` in the 2010s. The popularity of `Python` is inseparable from the rise of _machine learning_ as a modeling technique. This section aims to provide an introduction to the specific issues involved by presenting the `Scikit Learn` library, which provides a _pipeline_ of _machine learning_.  machine learning _pipeline_ up and running very quickly.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 15,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl: {
                            fr: "https://pythonds.linogaliana.fr/content/modelisation/",
                            en: "https://pythonds.linogaliana.fr/en/content/modelisation/",
                        },
                    },
                    {
                        name: {
                            fr: "Préparation des données pour construire un modèle",
                            en: "Preprocessing before building machine learning models",
                        },
                        abstract: {
                            fr: "Afin d'avoir des données cohérentes avec les hypothèses de modélisation, il est fondamental de prendre le temps de préparer les données à fournir à un modèle. La qualité de la prédiction dépend fortement de ce travail préalable qu'on appelle _preprocessing_. Ce chapitre présente les enjeux et les illustre par le biais de la librairie `Scikit Learn`, qui rend ce travail moins fastidieux et plus fiable.",
                            en: "In order to obtain data that is consistent with modeling assumptions, it is essential to take the time to prepare the data to be supplied to a model. The quality of the prediction depends heavily on this preliminary work, known as _preprocessing_. This chapter presents the issues involved and illustrates them using the `Scikit Learn` library, which makes this work less tedious and more reliable.",
                        },
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl: {
                            vscode: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%200_preprocessing%20correction%C2%BB",
                                en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%200_preprocessing%20correction%C2%BB",
                            },
                            jupyter: {
                                fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%200_preprocessing%20correction%C2%BB",
                                en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%200_preprocessing%20correction%C2%BB",
                            },
                        },
                    },
                    {
                        name: "Evaluer la qualité d'un modèle",
                        abstract:
                            "Faire preuve de méthode pour évaluer la qualité d'un modèle \npermet de proposer des prédictions plus robustes, ayant\nde meilleures performances sur un nouveau jeu de données\n(prédictions _out-of-sample_). Décomposer\nl'échantillon initial en sous-échantillons d'entraînement\net de tests, faire de la validation croisée, utiliser\nles bonnes mesures de performances \npeut se faire, grâce à scikit, de manière relativement standardisée.\nCette démarche scientifique est essentielle pour assurer la confiance\ndans la qualité d'un modèle, ce qu'a illustré récemment\nun [cycle de séminaire de Princeton](https://reproducible.cs.princeton.edu/)\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 60,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%201_modelevaluation%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Classification: premier modèle avec les SVM",
                        abstract:
                            "La classification permet d'attribuer une classe d'appartenance (_label_\ndans la terminologie du _machine learning_)\ndiscrète à des données à partir de certaines variables explicatives\n(_features_ dans la même terminologie).\nLes algorithmes de classification sont nombreux. L'un des plus intuitifs et\nles plus fréquemment rencontrés est le `SVM` (*support vector machine*).\nCe chapitre illustre les enjeux de la classification à partir de\nce modèle sur les données de vote aux élections présidentielles US de 2020.\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 120,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%202_SVM%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Régression: une introduction",
                        abstract:
                            "La régression linéaire est la première modélisation statistique\nqu'on découvre dans un cursus quantitatif. Il s'agit en effet d'une\nméthode très intuitive et très riche. Le _Machine Learning_ permet de\nl'appréhender d'une autre manière que l'économétrie. Avec `scikit` et\n`statsmodels`, on dispose de tous les outils pour satisfaire à la fois\ndata scientists et économistes. \n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%203_regression%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Sélection de variables : une introduction",
                        abstract:
                            "L'accès à des bases de données de plus en plus riches permet\ndes modélisations de plus en plus raffinées. Cependant,\nles modèles parcimonieux sont généralement préférables\naux modèles extrêmement riches pour obtenir de bonnes\nperformances sur un nouveau jeu de données (prédictions\n_out-of-sample_). Les méthodes de sélection de variables,\nnotamment le [`LASSO`](https://fr.wikipedia.org/wiki/Lasso_(statistiques)),\npermettent de sélectionner le signal le plus\npertinent dilué au milieu du bruit lorsqu'on a beaucoup d'information à\ntraiter.  \n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%204_featureselection%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Clustering",
                        abstract:
                            "Le _clustering_ consiste à répartir des observations dans des groupes,\ngénéralement non observés,\nen fonction de caractéristiques observables. Il s'agit d'une\napplication classique, en _machine learning_\nde méthodes non supervisées puisqu'on ne dispose généralement pas de l'information \nsur le groupe auquel apprartient réellement une observation. Les applications\nau monde réel sont nombreuses, notamment dans le domaine de la\nsegmentation tarifaire.\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%205_clustering%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Premier pas vers l'industrialisation avec les pipelines scikit",
                        abstract:
                            "Les _pipelines_ `scikit` permettent d'intégrer de manière très flexible\nun ensemble d'opérations de pre-processing et d'entraînement de modèles\ndans une chaîne d'opérations. Il s'agit d'une approche particulièrement\nappropriée pour réduire la difficulté à changer d'algorithme ou pour\nfaciliter la ré-application d'un code à de nouvelles données\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 120,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%206_pipeline%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                name: "Traitement du langage naturel",
                abstract: "Analyse et modélisation des données textuelles",
                authors: ["Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["consolidate", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: "Quelques éléments pour comprendre les enjeux",
                        abstract:
                            "Les corpus textuels étant des objets de très grande dimension\noù le ratio signal/bruit est faible, il est nécessaire de mettre\nen oeuvre une série d'étapes de nettoyage de texte. Ce chapitre va\nexplorer quelques méthodes classiques de nettoyage en s'appuyant\nsur le _Comte de Monte Cristo_ d'Alexandre Dumas. \n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2001_intro%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Nettoyer un texte: approche bag-of-words (exercices)",
                        abstract:
                            "Ce chapitre continue de présenter l'approche de __nettoyage de données__ \ndu `NLP` en s'appuyant sur le corpus de trois auteurs\nanglo-saxons : Mary Shelley, Edgar Allan Poe, H.P. Lovecraft.\nDans cette série d'exercice nous mettons en oeuvre de manière\nplus approfondie les différentes méthodes présentées\nprécedemment.\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2002_exoclean%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Latent Dirichlet Allocation (LDA)",
                        abstract:
                            'Le modèle [Latent Dirichlet Allocation (LDA)](https://fr.wikipedia.org/wiki/Allocation_de_Dirichlet_latente)\nest un modèle probabiliste génératif qui permet\nde décrire des collections de documents de texte ou d’autres types de données discrètes.\nLa `LDA` fait\npartie d’une catégorie de modèles appelés _"topic models"_, qui cherchent à découvrir des structures\nthématiques cachées dans des vastes archives de documents.\n',
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2003_lda%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Méthodes de vectorisation : comptages et word embeddings",
                        abstract:
                            "Pour pouvoir utiliser des données textuelles dans des algorithmes\nde _machine learning_, il faut les vectoriser, c'est à dire transformer\nle texte en données numériques. Dans ce TP, nous allons comparer\ndifférentes méthodes de vectorisation, à travers une tâche de prédiction :\n_peut-on prédire un auteur littéraire à partir d'extraits de ses textes ?_\nParmi ces méthodes, on va notamment explorer le modèle `Word2Vec`, qui\npermet d'exploiter les structures latentes d'un texte en construisant\ndes _word embeddings_ (plongements de mots).\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2004_word2vec%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        name: "Exercices supplémentaires",
                        abstract:
                            "Des exercices supplémentaires pour pratiquer les concepts du NLP\n",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2005_exo_supp%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                name: "Utiliser Git dans ses projets Python",
                abstract: "Introduction pratique à Git pour les projets Python",
                authors: ["Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["consolidate", "learn"],
                category: "training courses with python",
                imageUrl:
                    "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                parts: [
                    {
                        name: "Découvrir Git par la pratique: la gymnastique quotidienne",
                        abstract:
                            "`Git` est un système de contrôle de version qui facilite la sauvegarde, la gestion des évolutions et le partage d'un projet informatique. Il s'agit d'un élément devenu indispensable dans le domaine de la _data science_. Ce chapitre présente quelques concepts qui seront mis en pratique dans le suivant. ",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 90,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl:
                            "https://pythonds.linogaliana.fr/content/git/introgit.html",
                    },
                    {
                        name: "Un cadavre exquis pour découvrir le travail collaboratif avec Git",
                        abstract:
                            "Ce chapitre présente les enjeux liés à l'utilisation de `Git` dans des projets collectifs et propose une mise en pratique par le biais d'un cadavre exquis.",
                        authors: ["Lino Galiana"],
                        types: ["Notebook Python"],
                        tags: ["consolidate", "learn"],
                        timeRequired: 30,
                        category: "training courses with python",
                        imageUrl:
                            "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                        articleUrl:
                            "https://pythonds.linogaliana.fr/content/git/exogit.html",
                    },
                ],
            },
        ],
    },

    {
        name: "Tutoriels de cartographie avec cartiflette",
        abstract:
            "Une série de tutoriels pour découvrir la manière dont cartiflette simplifie la récupération de fonds de carte de l'IGN pour la cartographie en Python",
        imageUrl: cartifletteImgUrl,
        tags: ["consolidate", "deepen"],
        parts: [
            {
                name: "Créer une carte consolidée des arrondissements et des communes",
                abstract:
                    "Un tutoriel pas à pas pour construire une carte de la densité de Velib dans la région francilienne",
                authors: ["Lino Galiana"],
                category: "training courses in data science",
                imageUrl: cartifletteImgUrl,
                tags: ["consolidate", "deepen"],
                types: ["Tutoriel"],
                articleUrl:
                    "https://inseefrlab.github.io/cartiflette-website/use-case/usecase1.html",
            },
            {
                name: "Faire une carte avec les DROM rapprochés grâce à cartiflette",
                abstract:
                    "Un tutoriel pas à pas pour construire une carte comparant la taille des élevages à la population dans chaque département",
                authors: ["Lino Galiana"],
                category: "training courses in data science",
                imageUrl: cartifletteImgUrl,
                tags: ["consolidate", "deepen"],
                types: ["Tutoriel"],
                articleUrl:
                    "https://inseefrlab.github.io/cartiflette-website/use-case/usecase2.html",
            },
        ],
    },

    {
        name: {
            fr: "Initiation à Spark",
            en: "Getting Started with Spark",
        },
        abstract: {
            fr: "Parcours de formation au calcul distribué avec Spark pour du traitement de données à grande échelle.",
            en: "Training course on distributed computing with Spark for large-scale data processing.",
        },
        imageUrl: sparkImgUrl,
        tags: ["consolidate", "deepen"],
        parts: [
            {
                name: {
                    fr: "1. Introduction à Spark",
                    en: "1. Introduction to Spark",
                },
                abstract: {
                    fr: "Bases d'architecture et premiers exemples",
                    en: "Architecture basics and first examples",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: sparkImgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«1-introduction%201-introduction.ipynb»&name=1_Intro_spark",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«1-introduction%201-introduction-en.ipynb»&name=1_Intro_spark",
                },
            },
            {
                name: {
                    fr: "2. Datalake S3",
                    en: "2. S3 Datalake",
                },
                abstract: {
                    fr: "Faire du spark avec comme source et destination un système de fichier hadoop compatible : S3",
                    en: "Using Spark with an S3-Compatible Hadoop File System as Source and Destination",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: minioImgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2-datalake%202-datalake.ipynb»&name=2_Datalake",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2-datalake%202-datalake-en.ipynb»&name=2_Datalake",
                },
            },
            {
                name: {
                    fr: "2.2 Données chiffrées sur S3",
                    en: "2.2 Encrypted Data on S3",
                },
                abstract: {
                    fr: "Utiliser une donnée chiffrée sur S3, définir vos propres clés de chiffrement avec les clés de chiffrement fournies par Vault (SSE-C).",
                    en: "Using Encrypted Data on S3: Define Your Own Encryption Keys with Keys Provided by Vault (SSE-C)",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["deepen"],
                category: "training courses in data science",
                imageUrl: vaultSvgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2b-vault-s3-sseC%202b-vault-s3-sseC.ipynb»&vault.secret=«diffusion/spark-lab/2b-vault-s3-sseC»&vault.directory=«tm8enk»&name=2b_vault-s3-sseC",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«2b-vault-s3-sseC%202b-vault-s3-sseC-en.ipynb»&vault.secret=«diffusion/spark-lab/2b-vault-s3-sseC»&vault.directory=«tm8enk»&name=2b_vault-s3-sseC",
                },
            },
            {
                name: {
                    fr: "3. Spark et Kubernetes",
                    en: "3. Spark and Kubernetes",
                },
                abstract: {
                    fr: "Faire du Spark dans un cluster Kubernetes",
                    en: "Running Spark in a Kubernetes Cluster",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: kubImgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3-spark-kubernetes%203-spark-kubernetes.ipynb»&name=3_Spark_Kubernetes",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3-spark-kubernetes%203-spark-kubernetes-en.ipynb»&name=3_Spark_Kubernetes",
                },
            },
            {
                name: {
                    fr: "3.2 Bases de spark",
                    en: "3.2 Basics of Spark",
                },
                abstract: {
                    fr: "Lazy evaluation, actions, transformations et cache",
                    en: "Lazy evaluation, actions, transformations et cache",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: kubImgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3b-bases-spark%203b-bases-spark.ipynb»&name=3_Spark_bases",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«3b-bases-spark%203b-bases-spark-en.ipynb»&name=3_Spark_basics",
                },
            },
            {
                name: {
                    fr: "4. Le format de données parquet",
                    en: "4. The Parquet Data Format",
                },
                abstract: {
                    fr: "Notion de partitions et format parquet",
                    en: "Concept of Partitions and Parquet Format",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: sparkImgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«4-format-parquet%204-format-parquet.ipynb»&name=4_parquet",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«4-format-parquet%204-format-parquet-en.ipynb»&name=4_parquet",
                },
            },
            {
                name: {
                    fr: "5. Hive-metastore et metadonnées",
                    en: "5. Hive-metastore and metadata",
                },
                abstract: {
                    fr: "Metadonnées des tables d'un datalake",
                    en: "Table Metadata in a Data Lake",
                },
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: hiveSvgUrl,
                timeRequired: 60,
                deploymentUrl: {
                    fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«5-hive-metastore%205-hive-metastore.ipynb»&name=5_Metastore",
                    en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&init.personalInitArgs=«5-hive-metastore%205-hive-metastore-en.ipynb»&name=5_Metastore",
                },
            },
            {
                name: "6. Spark-thrift et redash",
                abstract:
                    "Et si on faisait simplement du SQL en externalisant le driver spark et un outil de visualisation : redash",
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: redashSvgUrl,
                timeRequired: 60,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/6-spark-thrift-server»&vault.directory=«tm8enk»&name=6_spark_thrift_server",
            },
            {
                name: "7. Spark streaming",
                abstract:
                    "Analyse de tweets. Notions de batch, micro-batch, streaming tout dépend de la vélocité recherchée.",
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: sparkImgUrl,
                timeRequired: 60,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/7-spark-streaming»&vault.directory=«tm8enk»&name=7_spark_streaming",
            },
            {
                name: "8. Spark Graphx",
                abstract: "Analyse de tweets avec l'utilisation de graph Spark",
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: sparkImgUrl,
                timeRequired: 60,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/8-spark-graphx»&vault.directory=«tm8enk»&name=8_spark_graphx",
            },
            {
                name: "9. Spark GPU",
                abstract: "A la découverte des GPUs avec spark",
                authors: ["Inseefrlab"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: sparkImgUrl,
                timeRequired: 60,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark-gpu?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/9-spark-gpu»&vault.directory=«tm8enk»&name=9_spark_gpu",
            },
            {
                name: "10. SparkR",
                abstract: "R pour de gros volumes",
                authors: ["Inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses in data science",
                imageUrl: sparkImgUrl,
                timeRequired: 60,
                articleUrl: "https://minio.lab.sspcloud.fr/projet-spark-lab/SparkR.html",
            },
            {
                name: "Virtualisation des données sur Onyxia",
                abstract: "Pré-requis : avoir lancé hive-metastore",
                authors: ["Inseefrlab"],
                contributors: ["Frédéric Comte"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Fopenlab%2F-%2Fraw%2Fmain%2Finit-notebook.sh%C2%BB&name=openlab",
            },
        ],
    },

    {
        name: "Carroyage et lissage spatial sur R",
        abstract:
            "Apprendre à carroyer les informations, réaliser des lissages spatiaux et calculer des indicateurs à partir des données carroyées sur R",
        imageUrl: btbImgUrl,
        authors: ["Kim Antunez", "Julien Pramil"],
        tags: ["consolidate"],
        parts: [
            {
                name: "Introduction",
                abstract:
                    "Présentation générale de la formation et ressources additionnelles",
                authors: ["Kim Antunez", "Julien Pramil"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses in data science",
                imageUrl: btbImgUrl,
                articleUrl: "https://inseefrlab.github.io/formation-r-lissage-spatial/",
            },
            {
                name: "Tutoriel",
                abstract:
                    "Tutoriel de formation au carroyage et au lissage spatial sur R",
                authors: ["Kim Antunez", "Julien Pramil"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses in data science",
                imageUrl: btbImgUrl,
                articleUrl:
                    "https://inseefrlab.github.io/formation-r-lissage-spatial/tuto.html",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&service.image.custom.enabled=true&service.image.custom.version=«inseefrlab%2Fformation-r-lissage-spatial%3Alatest»&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh»",
            },
            {
                name: "Exercices",
                abstract:
                    "Mise en pratique des techniques présentées dans le tutoriel à partir de nouveaux jeux de données",
                authors: ["Kim Antunez", "Julien Pramil"],
                types: ["Tutoriel R"],
                tags: ["consolidate"],
                category: "training courses in data science",
                imageUrl: btbImgUrl,
                articleUrl:
                    "https://inseefrlab.github.io/formation-r-lissage-spatial/exo.html",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&service.image.custom.enabled=true&service.image.custom.version=«inseefrlab%2Fformation-r-lissage-spatial%3Alatest»&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh»",
            },
        ],
    },

    {
        name: "Tutoriels ML",
        abstract: "Tutoriels de Machine learning",
        imageUrl: jupyterImgUrl,
        parts: [
            {
                name: "Random forest",
                abstract: "Initiation au random forest sur les données du Titanic",
                authors: ["Alexis Dondon"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: jupyterImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Falexisdondon%2Fformation%2F-%2Fraw%2Fmaster%2FTitanic-randomForest.sh%C2%BB&name=Random_forest",
            },
        ],
    },

    {
        name: "Introduction à R pour les sciences sociales",
        abstract:
            "Cours d'introduction à R pour des étudiants en sciences sociales quantitatives (économie, géographie, sociologie, etc.) de niveau L3 ou Master.",
        authors: ["Lino Galiana"],
        types: ["Tutoriel R"],
        tags: ["discover", "learn"],
        imageUrl: rSvgUrl,
        category: "training courses with R",
        parts: [
            {
                name: "Introduction aux objets de base de R",
                abstract:
                    "Une introduction à la logique du langage R, à ses principes et aux objets de base",
                authors: ["Lino Galiana"],
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                category: "training courses with R",
                timeRequired: 90,
                imageUrl: rSvgUrl,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/r-base.html",
            },
            {
                name: "Manipuler des données avec le tidyverse",
                abstract:
                    "Une introduction à dplyr pour découvrir comment travailler sur un _dataframe_ avec `R`. Les exemples utilisent les données d'inventaire carbone de l'Ademe et les données Filosofi, une base sur les revenus au niveau communal.",
                authors: ["Lino Galiana"],
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/r-wrangling.html",
            },
            {
                name: "Manipuler des données spatiales avec sf",
                abstract:
                    "Un chapitre consacré à la présentation de l'écosystème pour travailler sur des données spatiales avec `R` et aux concepts nécessaires pour cela. Les illustrations s'appuient sur les données d'implantation du Vélib dans l'agglomération parisienne.",
                authors: ["Lino Galiana"],
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://rgeo.linogaliana.fr/exercises/geospatial-wrangling.html",
            },
            {
                name: "Produire des représentations graphiques avec R",
                abstract:
                    "Un chapitre consacré à la présentation de ggplot, l'incontournable pour faire des graphiques avec `R`. Les exercices d'application s'appuient sur les données de fréquentation des pistes cyclables parisiennes.",
                authors: ["Lino Galiana"],
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/ggplot.html",
            },
            {
                name: "Produire des cartes avec R",
                abstract:
                    "Un chapitre consacré à la cartographie, statique (ggplot, mapsf) et réactive (leaflet). Les exemples permettent de produire des cartes de population à plusieurs échelles",
                authors: ["Lino Galiana"],
                timeRequired: 180,
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                category: "training courses with R",
                imageUrl: rSvgUrl,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/cartography.html",
            },
            {
                name: "Introduction aux publications reproductives avec R et Quarto",
                abstract:
                    "Un chapitre consacré à Quarto, l'écosystème permettant des publications reproductibles mélant de manière harmonieuse code et analyse des résultats.",
                authors: ["Lino Galiana"],
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                timeRequired: 180,
                category: "training courses with R",
                imageUrl: rSvgUrl,
                articleUrl: "https://rgeo.linogaliana.fr/exercises/quarto.html",
            },
        ],
    },

    {
        name: "Parcours de consolidation à R",
        abstract:
            "Formation avancée à l'utilisation de R pour des étudiants et professionnels des sciences sociales (économie, géographie, sociologie, etc.). Les séquences visent à consolider les compétences sur des aspects avancés du langage R.",
        authors: ["inseefrlab"],
        types: ["Tutoriel R"],
        tags: ["consolidate", "learn"],
        imageUrl: rSvgUrl,
        category: "training courses with R",
        parts: [
            {
                name: "Devenir autonome en R",
                abstract:
                    "Ce module vise à renforcer les compétences nécessaires pour devenir autonome avec R, y compris la compréhension des fonctions, la résolution des erreurs et l'auto-apprentissage à travers des ressources en ligne.",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence1/Sequence_1_Devenir_autonome_en_R.html",
            },
            {
                name: "Se familiariser avec les objets R",
                abstract:
                    "Une introduction approfondie aux différents objets R, tels que les vecteurs, les matrices, les dataframes, et les listes, et leur utilisation pour des analyses complexes.",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence2/Sequence_2_Manipuler_des_donnees_simples.html",
            },
            {
                name: "Manipuler des données",
                abstract:
                    "Techniques avancées pour manipuler des données avec `dplyr` et autres packages du tidyverse, permettant de nettoyer, filtrer, et transformer des jeux de données.",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence3/Sequence_3_Manipuler_des_donnees_complexes.html",
            },
            {
                name: "Produire et exporter des résultats",
                abstract:
                    "Comment générer et exporter des résultats d'analyse, sous forme de tableaux et de graphiques.",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence3/Sequence_3_Manipuler_des_donnees_complexes.html",
            },
            {
                name: "Lire des données aux formats variés",
                abstract:
                    "Cette séquence permettra de se pencher plus en détail sur les formats les plus courants et sur la façon de lire ces fichiers avec `R`",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence5/Sequence_5_Lire_des_donnees_aux_formats_varies.html",
            },
            {
                name: "Modulariser les analyses",
                abstract:
                    "Introduction aux bonnes pratiques pour structurer et modulariser les analyses avec `R`, en utilisant des fonctions et scripts réutilisables.",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence6/Sequence_6_modulariser_les_analyses.html",
            },
            {
                name: "Projet statistique : structurer ses analyses",
                abstract:
                    "Ce module offre des conseils sur la structuration d'un projet statistique complet, en abordant la collecte des données, le nettoyage, l'analyse et la communication des résultats.",
                authors: ["inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["consolidate", "learn"],
                category: "training courses with R",
                timeRequired: 180,
                imageUrl: rSvgUrl,
                articleUrl:
                    "https://sortie-sas.pages.lab.sspcloud.fr/formations/r_consolidation/support_cours/sequence7/Sequence_7_projet_statistique_structurer_ses_analyses.html",
            },
        ],
    },

    {
        name: {
            fr: "Traitement des données volumineuses avec R",
            en: "Processing large data sets with R",
        },
        abstract: {
            fr: "Introduction à l'utilisation des outils pour le traitement des données volumineuses avec R : format Parquet, Arrow, DuckDB et Spark.",
            en: "Introduction to the use of tools for processing big data with R: Parquet format, Arrow, DuckDB and Spark.",
        },
        authors: ["Romain Avouac", "Thomas Faria", "Olivier Meslin"],
        types: ["Tutoriel R"],
        tags: ["discover", "learn"],
        category: "training courses with R",
        imageUrl: rSvgUrl,
        deploymentUrl: {
            fr: "https://datalab.sspcloud.fr/launcher/ide/rstudio-sparkr?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-bceao%2Fmain%2Ftp%2Finit-tp.sh%C2%BB&resources.limits.memory=%C2%AB100Gi%C2%BB&persistence.size=%C2%AB40Gi%C2%BB&init.personalInitArgs=%C2%ABfr%C2%BB",
            en: "https://datalab.sspcloud.fr/launcher/ide/rstudio-sparkr?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-bceao%2Fmain%2Ftp%2Finit-tp.sh%C2%BB&resources.limits.memory=%C2%AB100Gi%C2%BB&persistence.size=%C2%AB40Gi%C2%BB&init.personalInitArgs=%C2%ABen%C2%BB",
        },
    },

    {
        name: "Documentation UtilitR",
        abstract:
            "Une documentation collaborative et open source sur R, destinée en premier lieu aux agents de l’Insee.",
        authors: ["UtilitR"],
        types: ["Tutoriel R"],
        tags: ["discover", "learn"],
        category: "training courses with R",
        imageUrl: utilitrImgUrl,
        articleUrl: "https://www.book.utilitr.org/",
        deploymentUrl:
            "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&name=utilitr&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.9.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
    },

    {
        name: "Polars",
        abstract:
            "Des tutoriels R et Python pour prendre en main Polars, une librairie Rust qui offre des performances exceptionnelles sur les DataFrames",
        imageUrl: rpolarsImgUrl,
        parts: [
            {
                name: "Cookbook de Polars pour R",
                abstract:
                    "Une documentation pour apprendre à utiliser Polars avec R (en anglais)",
                authors: ["Damien Dotta"],
                types: ["Tutoriel R"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: rpolarsImgUrl,
                articleUrl: "https://ddotta.github.io/cookbook-rpolars/",
            },
            {
                name: "Prise en main de Polars en Python",
                abstract:
                    "Un tutoriel pour prendre en main le package Python Polars, une alternative directe et très performante à Pandas",
                authors: ["Romain Tailhurat", "Lino Galiana"],
                types: ["Notebook Python"],
                tags: ["learn", "consolidate"],
                category: "training courses in data science",
                imageUrl: jupyterImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?version=1.13.22&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fssphub%2Fmain%2Fpost%2Fpolars%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABpolars-tuto%C2%BB&onyxia.friendlyName=%C2%ABTutoriel%20Polars%C2%BB",
                articleUrl: "https://ssphub.netlify.app/post/polars/",
            },
        ],
    },

    {
        name: "Ateliers AMI IA",
        abstract:
            "L'objectif de cet atelier est de vous faire découvrir le déroulement d'un projet de data science à travers trois cas d'études.",
        authors: ["LabIA-Etalab"],
        contributors: ["LabIA-Etalab"],
        types: ["Notebook Python"],
        tags: ["consolidate", "learn"],
        category: "training courses in data science",
        imageUrl: pythonImgUrl,
        parts: [
            {
                name: "Introduction",
                abstract: "Introduction aux outils de datascience",
                authors: ["LabIA-Etalab"],
                contributors: ["LabIA-Etalab"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Foutils_du_datascientist.ipynb»&name=outils&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
            },
            {
                name: "Atelier 1",
                abstract: "Introduction à la data visualisation",
                authors: ["LabIA-Etalab"],
                contributors: ["LabIA-Etalab"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_a_la_data_visualisation.ipynb»&name=data%2520visualisation&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
            },
            {
                name: "Atelier 2",
                abstract: "Introduction au traîtement du langage naturel",
                authors: ["LabIA-Etalab"],
                contributors: ["LabIA-Etalab"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_au_NLP.ipynb»&name=NLP&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
            },
            {
                name: "Atelier 3",
                abstract: "Introduction au machine learning",
                authors: ["LabIA-Etalab"],
                contributors: ["LabIA-Etalab"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_au_machine_learning.ipynb»&name=ML&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
            },
        ],
    },

    {
        name: "Bonnes pratiques de développement avec Git et R",
        abstract:
            "Formation au travail collaboratif et au contrôle de version à l'aide des logiciels Git et RStudio",
        imageUrl: gitImgUrl,
        parts: [
            {
                name: "Version courte",
                abstract:
                    "Version 1 jour de la formation aux bonnes pratiques avec Git et R, axée autour de l'apprentissage de Git, de la qualité du code et de la structure des projets statistiques.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel R"],
                tags: ["discover", "consolidate"],
                category: "best practices",
                imageUrl: gitImgUrl,
                articleUrl:
                    "https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/slides/light.html",
            },
            {
                name: "Version complète",
                abstract:
                    "Version 2 jours de la formation aux bonnes pratiques avec Git et R, axée autour des notions de reproductibilité et de collaboration.",
                authors: ["Lino Galiana", "Romain Avouac"],
                types: ["Tutoriel R"],
                tags: ["discover", "consolidate"],
                category: "best practices",
                imageUrl: gitImgUrl,
                articleUrl:
                    "https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/slides/complete.html",
            },
        ],
    },

    {
        name: {
            fr: "Introduction au MLOps avec MLflow",
            en: "Introduction to MLOps with MLflow",
        },
        abstract: {
            fr: "Un tutoriel pour prendre en main MLflow, un outil permettant de gérer le cycle de vie d'un projet de machine learning de bout en bout",
            en: "A hands-on tutorial on MLflow, a tool for managing the end-to-end lifecycle of a machine learning project",
        },
        authors: ["Romain Avouac", "Thomas Faria", "Tom Seimandi"],
        types: ["Slides"],
        tags: ["learn", "consolidate"],
        category: "best practices",
        imageUrl: mlflowImgUrl,
        articleUrl: {
            fr: "https://inseefrlab.github.io/formation-mlops/slides/fr/index.html",
            en: "https://inseefrlab.github.io/formation-mlops/slides/en/index.html",
        },
    },

    {
        name: "Déploiement d'applications",
        abstract:
            "Une série de tutoriels pour se former au déploiement d'applications sur le SSP Cloud.",
        imageUrl: kubImgUrl,
        parts: [
            {
                name: "Déploiement d'une application R Shiny",
                abstract:
                    "Un tutoriel détaillé pour packager une application R Shiny sous forme de chart Helm et la déployer sur le SSP Cloud.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel R"],
                tags: ["learn", "consolidate"],
                category: "best practices",
                imageUrl: shinyImgUrl,
                articleUrl:
                    "https://github.com/InseeFrLab/sspcloud-tutorials/blob/main/deployment/shiny-app.md",
            },
        ],
    },

    {
        name: "Mise en production de projets de data science",
        abstract:
            "Un cours de 3e année de l'ENSAE pour découvrir les enjeux du passage d'un projet expérimental vers sa prochaine étape: la mise en production",
        imageUrl: pythonImgUrl,
        parts: [
            {
                name: "Introduction",
                abstract:
                    "Présentation des principales notions développées dans ce cours, de la raison d'être des bonnes pratiques et des enjeux de la mise en production.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: pythonImgUrl,
                articleUrl:
                    "https://ensae-reproductibilite.github.io/website/chapters/introduction.html",
            },
            {
                name: "Révision des bases pour bien commencer",
                abstract:
                    "Des rappels sur les bases du terminal Linux, sur Git et sur le format de données YAML pour bien démarrer",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: pythonImgUrl,
                parts: [
                    {
                        name: "Linux 101",
                        abstract:
                            "Introduction à l'utilisation du terminal Linux, un outil essentiel pour le data scientist qui s'intéresse à la mise en production.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/linux-101.html",
                    },
                    {
                        name: "Versionner son code et travailler collaborativement avec Git",
                        abstract:
                            "Présentation des principes du contrôle de version et du travail collaboratif avec Git et son écosystème.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/git.html",
                    },
                    {
                        name: "YAML 101",
                        abstract:
                            "Le format de fichiers YAML est extrêmement utilisé pour déclarer des paramètres à considérer pour une application. Ce chapitre rappelle quelques bases sur le sujet",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/yaml-101.html",
                    },
                ],
            },
            {
                name: "Des bonnes pratiques de développement utiles pour faciliter la mise en production",
                abstract:
                    "Cette partie du cours présente un ensemble de conseils et conventions utiles pour simplifier la mise en production de projets de data science",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: pythonImgUrl,
                parts: [
                    {
                        name: "Qualité du code",
                        abstract:
                            "Présentation des standards permettant de produire du code lisible et maintenable, et d’outils pour faciliter leur adoption.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/code-quality.html",
                    },
                    {
                        name: "Structure des projets",
                        abstract:
                            "Présentation des principes d'architecture permettant de produire des projets modulaires et maintenables, et d'outils pour faciliter leur adoption.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/projects-architecture.html",
                    },
                    {
                        name: "Traitement des données volumineuses",
                        abstract:
                            "Présentation des architectures informatiques et des outils logiciels permettant de faciliter le traitement de données volumineuses.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/big-data.html",
                    },
                    {
                        name: "Portabilité",
                        abstract:
                            "Présentation des principes et des techniques permettant de rendre un projet exécutable sur différents environnements.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/portability.html",
                    },
                ],
            },
            {
                name: "Mettre en production avec la philosophie du MLOps",
                abstract:
                    "Cette partie du cours présente les enjeux et la démarche à adopter pour mettre en production une application",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: pythonImgUrl,
                parts: [
                    {
                        name: "Déploiement",
                        abstract:
                            "Principes de valorisation et de déploiement d'une application dans un environnement de production.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/deployment.html",
                    },
                    {
                        name: "Introduction aux enjeux du MLOps",
                        abstract:
                            "Introduction aux principes du MLOps pour le passage en production des applications de machine learning.",
                        authors: ["Romain Avouac", "Lino Galiana"],
                        types: ["Tutoriel"],
                        tags: ["consolidate", "deepen"],
                        category: "best practices",
                        imageUrl: pythonImgUrl,
                        articleUrl:
                            "https://ensae-reproductibilite.github.io/website/chapters/mlops.html",
                    },
                ],
            },
            {
                name: "Application fil rouge pour s'exercer à la mise en production",
                abstract:
                    "Une application fil rouge pour illustrer l'intérêt d'appliquer graduellement les bonnes pratiques dans une optique de mise en production d'une application de data science.",
                authors: ["Romain Avouac", "Lino Galiana"],
                types: ["Tutoriel"],
                tags: ["consolidate", "deepen"],
                category: "best practices",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://ensae-reproductibilite.github.io/website/chapters/application.html",
            },
        ],
    },

    {
        name: "Funathon 2024",
        abstract:
            "Des tutoriels pour découvrir et pratiquer la data science autour du thème _'Décollage imminent pour la data science'_",
        imageUrl: dsImgUrl,
        types: ["Tutoriel"],
        tags: ["discover", "consolidate"],
        authors: ["inseefrlab"],
        parts: [
            {
                name: "Sujet 1: Visualisation des émissions de CO2 de liaisons aériennes",
                abstract:
                    "Visualiser les émissions de $CO_2$ liées à une mesure de restriction de liaison aérienne relativement à des durées de trajets ferroviaires.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: rSvgUrl,
                articleUrl: "https://inseefrlab.github.io/funathon2024_sujet1/",
            },
            {
                name: "Sujet 2: Un tableau de bord du trafic aérien avec R ou Python",
                abstract:
                    "Amener, pas à pas, à la conception voire à la mise à disposition d’un tableau de bord du trafic aérien avec R ou Python.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: rSvgUrl,
                articleUrl: "https://inseefrlab.github.io/funathon2024_sujet2/",
            },
            {
                name: "Sujet 3: Créer un nouveau FlightRadar avec Python",
                abstract:
                    "Reconstruction de l'interface de FlightRadar24 avec Python en récupérant les données par le biais de l'API.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: pythonImgUrl,
                articleUrl: "https://github.com/InseeFrLab/funathon2024_sujet3",
            },
            {
                name: "Sujet 4: Analyse textuelle de commentaires clients",
                abstract:
                    "Découverte des enjeux du nettoyage de champs textuels et de l’analyse de sentiments à partir de données scrapées sur Trustpilot.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: pythonImgUrl,
                articleUrl: "https://github.com/InseeFrLab/funathon2024_sujet4",
            },
        ],
    },

    {
        name: "Funathon 2023",
        abstract:
            "Des tutoriels pour découvrir et pratiquer la data science autour du thème _'Du champ à l'assiette'_",
        imageUrl: dsImgUrl,
        types: ["Tutoriel"],
        tags: ["discover", "consolidate"],
        authors: ["inseefrlab"],
        parts: [
            {
                name: "150 ans d'agriculture en France",
                abstract: "Initiation à la dataviz sur séries longues avec Observable.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: observableImgUrl,
                articleUrl: "https://github.com/InseeFrLab/funathon2023_sujet1/tree/main",
                deploymentUrl:
                    "https://observablehq.com/@francoissemecurbe/le-recensement-agricole-de-1852",
            },
            {
                name: "Explorer la géographie des cultures agricoles françaises",
                abstract:
                    "Initiation à l'analyse spatiale et à la dataviz avec R et PostGIS",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: rSvgUrl,
                articleUrl: "https://inseefrlab.github.io/funathon2023_sujet2/",
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet2%2Fmain%2Finit.sh%C2%BB&onyxia.friendlyName=%C2%ABSujet%202%20Funathon%C2%BB",
            },
            {
                name: "Explorer les habitudes alimentaires de nos compatriotes",
                abstract:
                    "Initiation à l'analyse exploratoire de données, au clustering et au machine learning avec R ou Python",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: dsImgUrl,
                parts: [
                    {
                        name: "Tutoriel en Python",
                        abstract: "",
                        authors: ["Inseefrlab"],
                        types: ["Tutoriel"],
                        tags: ["discover", "consolidate"],
                        category: "funathon",
                        imageUrl: pythonImgUrl,
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet3%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABPython%C2%BB",
                    },
                    {
                        name: "Tutoriel en R",
                        abstract: "",
                        authors: ["Inseefrlab"],
                        types: ["Tutoriel"],
                        tags: ["discover", "consolidate"],
                        category: "funathon",
                        imageUrl: rSvgUrl,
                        deploymentUrl:
                            "https://datalab.sspcloud.fr/launcher/ide/jupyter-r?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet3%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABR%C2%BB",
                    },
                ],
            },
            {
                name: "Mon application Yuka",
                abstract:
                    "Un parcours guidé pour créer une application de lecture de code barre à la manière de Yuka avec Python.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=false&kubernetes.role=%C2%ABadmin%C2%BB&networking.user.enabled=true&git.cache=%C2%AB36000%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet4%2Fmain%2Finit.sh%C2%BB&git.token=%C2%AB%C2%BB&git.repository=%C2%ABhttps%3A%2F%2Fgithub.com%2FInseeFrLab%2Ffunathon2023_sujet4.git%C2%BB",
            },
            {
                name: "Analyse textuelle des commentaires clients de restaurants",
                abstract:
                    "Analyse de sentiments à partir de commentaires clients scrapés sur Trustpilot avec Python.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet5%2Fmain%2Finit.sh%C2%BB",
            },
            {
                name: "A la recherche de l'alimentation perdue",
                abstract:
                    "Traitement du langage naturel : rechercher toutes les références à des aliments dans l'oeuvre de Proust.",
                authors: ["Inseefrlab"],
                types: ["Tutoriel"],
                tags: ["discover", "consolidate"],
                category: "funathon",
                imageUrl: pythonImgUrl,
                articleUrl: "https://github.com/InseeFrLab/funathon2023_sujet6",
            },
        ],
    },

    {
        name: "Appariement de données individuelles",
        abstract:
            "Des tutoriels en Python et en R pour s'initier à l'appariement de données individuelles.",
        authors: ["Lucas Malherbe"],
        contributors: ["Lucas Malherbe"],
        types: ["Notebook Python"],
        tags: ["consolidate", "learn"],
        category: "training courses in data science",
        imageUrl: pythonImgUrl,
        parts: [
            {
                name: "Package Record Linkage (Python)",
                abstract:
                    "Appariement de données individuelles en Python avec le package Record Linkage",
                authors: ["Lucas Malherbe"],
                contributors: ["Lucas Malherbe"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABrecordLinkage%C2%BB",
            },
            {
                name: "Package dedupe (Python)",
                abstract:
                    "Appariement de données individuelles en Python avec le package dedupe",
                authors: ["Lucas Malherbe"],
                contributors: ["Lucas Malherbe"],
                types: ["Notebook Python"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: pythonImgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABdedupe%C2%BB",
            },
            {
                name: "Package reclin2 (R)",
                abstract:
                    "Appariement de données individuelles en R avec le package reclin2",
                authors: ["Lucas Malherbe"],
                contributors: ["Lucas Malherbe"],
                types: ["Notebook R"],
                tags: ["discover", "learn"],
                category: "training courses in data science",
                imageUrl: rSvgUrl,
                deploymentUrl:
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-r?autoLaunch=true&init.personalInitArgs=%C2%ABreclin2%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB",
            },
        ],
    },
];
