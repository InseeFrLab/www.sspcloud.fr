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
import neverendingImgUrl from "assets/img/neverending.png";
import grenouilleImgUrl from "assets/img/grenouille.jpg";
import coverImgUrl from "assets/img/cover.jpg";
import pollinisateurImgUrl from "assets/img/pollinisateur.jpg";
import crabeImgUrl from "assets/img/crabe.jpg";
import renardImgUrl from "assets/img/renard.jpg";
import odonateImgUrl from "assets/img/odonate.jpg";
import kubImgUrl from "assets/img/kub.png";
import elkImgUrl from "assets/img/elk.png";
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
import bookImgUrl from "assets/img/book.png";
import btbImgUrl from "assets/img/btb.png";
import mlflowImgUrl from "assets/img/mlflow.png";
import shinyImgUrl from "assets/img/shiny.png";
import dsImgUrl from "assets/img/data-science.png";
import observableImgUrl from "assets/img/observable.png";
import onyxiaImgUrl from "assets/img/onyxia.svg";
import rpolarsImgUrl from "assets/img/rpolars.png";


export type EducationalResourceCategory =
    | "discover the datalab"
    | "training courses with R"
    | "training courses with python"
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
    deploymentUrl?: LocalizedString;
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
      "name": {
        "fr": "Principes du Datalab",
        "it": "Principi del Datalab",
        "en": "Principles of the Datalab",
      },
      "abstract": {
          "fr": "Présentation des grands principes du Datalab",
          "it": "Presentazione dei grandi principi del Datalab",
          "en": "Introducing the main principles of the Datalab",
      },
      "authors": ["Inseefrlab"],
      "types": ["Tutoriel"],
      "tags": ["discover", "learn"],
      "category": "discover the datalab",
      "imageUrl": onyxiaImgUrl,
      "articleUrl": {
          "fr": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/fr/principles.html",
          "it": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/principles.html",
          "en": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/principles.html"
      }
    },
    {
      "name": {
        "fr": "Premiers pas avec le Datalab",
        "it": "Primi passi con il Datalab",
        "en": "Getting started with the Datalab",
      },
      "abstract": {
          "fr": "Visite guidée du Datalab",
          "it": "Visita guidata del Datalab",
          "en": "A guided tour of the Datalab",
      },
      "authors": ["Inseefrlab"],
      "types": ["Tutoriel"],
      "tags": ["discover", "learn"],
      "category": "discover the datalab",
      "imageUrl": onyxiaImgUrl,
      "articleUrl": {
          "fr": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/fr/discover.html",
          "it": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/discover.html",
          "en": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/discover.html"
      }
    },
    {
      "name": {
        "fr": "Contrôle de version",
        "it": "Controllo di versione",
        "en": "Version control",
      },
      "abstract": {
          "fr": "Versionner son code avec Git sur le Datalab",
          "it": "Versionare il tuo codice con il Datalab",
          "en": "Version your code with Git on the Datalab",
      },
      "authors": ["Inseefrlab"],
      "types": ["Tutoriel"],
      "tags": ["discover", "learn"],
      "category": "discover the datalab",
      "imageUrl": onyxiaImgUrl,
      "articleUrl": {
          "fr": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/fr/version-control.html",
          "it": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/version-control.html",
          "en": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/version-control.html"
      }
    },
    {
      "name": {
        "fr": "Stockage de données",
        "it": "Archivazione dei dati",
        "en": "Data storage",
      },
      "abstract": {
          "fr": "Stocker des données sur MinIO et les utiliser dans des services sur le Datalab",
          "it": "Archiviare dati su MinIO e utilizzarli nei servizi del Datalab",
          "en": "Store data on MinIO and use it in services on the Datalab",
      },
      "authors": ["Inseefrlab"],
      "types": ["Tutoriel"],
      "tags": ["discover", "learn"],
      "category": "discover the datalab",
      "imageUrl": onyxiaImgUrl,
      "articleUrl": {
          "fr": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/fr/storage.html",
          "it": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/storage.html",
          "en": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/storage.html"
      }
    },
    {
      "name": {
        "fr": "Gestion des secrets",
        "it": "Gestione dei segreti",
        "en": "Managing secrets",
      },
      "abstract": {
          "fr": "Utiliser des secrets comme variables d’environnement dans les services du Datalab",
          "it": "Utilizzare segreti come variabili d'ambiente nei servizi del Datalab",
          "en": "Use secrets as environment variables in services on the Datalab",
      },
      "authors": ["Inseefrlab"],
      "types": ["Tutoriel"],
      "tags": ["discover", "learn"],
      "category": "discover the datalab",
      "imageUrl": onyxiaImgUrl,
      "articleUrl": {
          "fr": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/fr/secrets.html",
          "it": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/secrets.html",
          "en": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/secrets.html"
      }
    },
    {
      "name": {
        "fr": "Configuration des services (WIP)",
        "it": "Configurazione dei servizi (WIP)",
        "en": "Services configuration (WIP)",
      },
      "abstract": {
          "fr": "Documentation des différents paramètres de configuration d'un service",
          "it": "Documentazione dei vari parametri di configurazione di un servizio",
          "en": "Documentation of service configuration parameters",
      },
      "authors": ["Inseefrlab"],
      "types": ["Tutoriel"],
      "tags": ["discover", "learn"],
      "category": "discover the datalab",
      "imageUrl": onyxiaImgUrl,
      "articleUrl": {
          "fr": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/fr/configure.html",
          "it": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/configure.html",
          "en": "https://inseefrlab.github.io/docs.sspcloud.fr/docs/en/configure.html"
      }
    },
    {
        "name": {
            "fr": "FuncampR - Grimoire (FR)",
            "it": "FuncampR - Spellbook (EN - WIP)",
            "en": "FuncampR - Spellbook (EN - WIP)",
        },
        "abstract": {
            "fr": "Une aventure d'apprentissage vidéoludique pour le langage statistique R, à partager au sein du SSP (et du royaume de Statis). Pour en savoir plus, consulter le site https://funcamp.sspcloud.fr/",
            "it": "Un'avventura di apprendimento videoludico per il linguaggio statistico R, da condividere all'interno del SSP (e del regno di Statis). Per saperne di più, visita il sito https://funcamp.sspcloud.fr/",
            "en": "A serious game to learn statistical language R, dedicated to beginners - and gamers :-p. For more information, see https://funcamp.sspcloud.fr/",
        },
        "imageUrl": gameControllerImgUrl,
        "parts": [
            {
                "name": "icaRius",
                "abstract": {
                    "fr": "La partie vidéoludique du FuncampR. Un jeu de rôle inspiré d'un célèbre jeu vidéo des années 1990...",
                    "it": "La parte videoludica di FuncampR. Un gioco di ruolo ispirato a un famoso videogioco degli anni '90...",
                    "en": "The video game part of FuncampR. A RPG inspired by a famous video game from the 1990s ...",
                },
                "authors": [
                    "A. Degorre",
                    {
                        "fr": "communauté Solarus",
                        "it": "Comunità Solarus",
                        "en": "Solarus Community",
                    },
                ],
                "contributors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FuncampR",
                        "en": "FuncampR Community",
                    },
                    {
                        "fr": "communauté Solarus",
                        "it": "Comunità Solarus",
                        "en": "Solarus Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Jeu vidéo",
                        "it": "Videogioco",
                        "en": "Video Game",
                    },
                ],
                "tags": ["discover", "learn"],
                "category": "training courses with R",
                "imageUrl": gameControllerImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/icarius?autoLaunch=true",
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 1",
                    "en": "IgoR Spellbook - Chapter 1",
                    "it": "Grimorio IgoR - Capitolo 1",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 1 : la maison d’icaRius. Découverture du grimoire IgoR et de la langue des Runes",
                    "en": "Educational part of FuncampR. Chapter 1: icaRius' home. Discovery of the IgoR Spellbook and the Runes' language",
                    "it": "Parte educativa di FuncampR. Capitolo 1: la casa di IcaRius. Scoperta del grimorio IgoR e della lingua delle Rune",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["discover"],
                "category": "training courses with R",
                "imageUrl": grimoire01ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre1»&onyxia.friendlyName=«Grimoire-Chap1»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter1»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=Spellbook-Chap1»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter1»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=Spellbook-Chap1»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 2",
                    "en": "IgoR Spellbook - Chapter 2",
                    "it": "Grimorio IgoR - Capitolo 2",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 2 : la poule pondeuse. Dans le village de Kokoro, icaRius aide la fermière à recomposer le livre des pontes...",
                    "it": "Parte educativa di FuncampR. Capitolo 2: la gallina delle uova d'oro. Nel villaggio di Kokoro, IcaRius aiuta la contadina a ricomporre il libro delle uova...",
                    "en": "FuncampR educational part. Chapter 2: the laying hen. In the village of Kokoro, icaRius helps the farmer to recompose the egg-laying book...",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire02ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre2»&onyxia.friendlyName=«Grimoire-Chap2»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter2»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap2»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter2»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap2»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 3",
                    "en": "IgoR Spellbook - Chapter 3",
                    "it": "Grimorio IgoR - Capitolo 3",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 3 :  le village de GrissGrass. Le chef du village demande à icaRius de trouver quelle est l’exploitation la plus productive en herbe de Mandragore.",
                    "en": "FuncampR educational part. Chapter 3: the village of GrissGrass. The village chief asks icaRius to find the most productive Mandrake farm.",
                    "it": "Parte educativa di FuncampR. Capitolo 3: il villaggio di GrissGrass. Il capo del villaggio chiede a IcaRius di scoprire quale sia l'azienda più produttiva nell'erba di Mandragora.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire03ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre3»&onyxia.friendlyName=«Grimoire-Chap3»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter3»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap3»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter3»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap3»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 4",
                    "en": "IgoR Spellbook - Chapter 4",
                    "it": "Grimorio IgoR - Capitolo 4",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 4 : le secret de la culture de Mandragore. IcaRius doit retrouver la recette de la culture de la Mandragore.",
                    "en": "FuncampR educational part. Chapter 4: The Secret of Mandrake Culture. IcaRius must find the recipe for the culture of the Mandrake.",
                    "it": "Parte educativa di FuncampR. Capitolo 4: il segreto della coltivazione della Mandragora. IcaRius deve trovare la ricetta per la coltivazione della Mandragora.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire04ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre4»&onyxia.friendlyName=«Grimoire-Chap4»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter4»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap4»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter4»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap4»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 5",
                    "en": "IgoR Spellbook - Chapter 5",
                    "it": "Grimorio IgoR - Capitolo 5",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 5 :  le cuistot Batreb. Pour libérer Essespéus dans le château de Statis, icaRius doit d’abord obtenir la confiance du cuistot Batreb.",
                    "en": "FuncampR educational part. Chapter 5: the cook Batreb. To free Essespeus in Statis Castle, icaRius must first gain the trust of cook Batreb.",
                    "it": "Parte educativa di FuncampR. Capitolo 5: lo chef Batreb. Per liberare Essespéus nel castello di Statis, IcaRius deve prima guadagnare la fiducia dello chef Batreb.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire05ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre5»&onyxia.friendlyName=«Grimoire-Chap5»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter5»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap5»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter5»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap5»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 6",
                    "en": "IgoR Spellbook - Chapter 6",
                    "it": "Grimorio IgoR - Capitolo 6",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 6 : la fake news. Essespéus et icaRius vont créer une Fake News pour tromper les armées de SaSSoS.",
                    "en": "FuncampR educational part. Chapter 6: fake news. Essespéus and icaRius create a Fake News to deceive the armies of SaSSoS.",
                    "it": "Parte educativa di FuncampR. Capitolo 6: la fake news. Essespéus e IcaRius creeranno una fake news per ingannare le armate di SaSSoS.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire06ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre6»&onyxia.friendlyName=«Grimoire-Chap6»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter6»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap6»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter6»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap6»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 7",
                    "en": "IgoR Spellbook - Chapter 7",
                    "it": "Grimorio IgoR - Capitolo 7",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 7 (optionnel): le labyrinthe. Le Mage Delagarde propose à icaRius un défi pour obtenir les bonnes directions dans le labyrinthe.",
                    "en": "FuncampR educational part. Chapter 7 (optional): the labyrinth. Mage Delagarde offers icaRius a challenge to get the right directions in the labyrinth.",
                    "it": "Parte educativa di FuncampR. Capitolo 7 (opzionale): il labirinto. Il Mago Delagarde propone a IcaRius una sfida per ottenere le giuste direzioni nel labirinto",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire07ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre7»&onyxia.friendlyName=«Grimoire-Chap7»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter7»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap7»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter7»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap7»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 8",
                    "en": "IgoR Spellbook - Chapter 8",
                    "it": "Grimorio IgoR - Capitolo 8",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 8: la plume d’IgoR. Pour soulever la pierre qui bloque le passage, icaRius doit apprendre de nouveaux sortilèges.",
                    "en": "FuncampR educational part. Chapter 8: IgoR's Feather. To lift the stone blocking the passage, icaRius must learn new spells.",
                    "it": "Parte educativa di FuncampR. Capitolo 8: la piuma di IgoR. Per sollevare la pietra che blocca il passaggio, IcaRius deve imparare nuovi incantesimi.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire08ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre8»&onyxia.friendlyName=«Grimoire-Chap8»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter8»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap8»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter8»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap8»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 9",
                    "en": "IgoR Spellbook - Chapter 9",
                    "it": "Grimorio IgoR - Capitolo 9",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 9: le village de Sandia. Mam’Grouxi narre les innombrables naissances qu’elle a vu au fil des ans (des siècles?).",
                    "en": "FuncampR educational part. Chapter 9: the village of Sandia. Mam’Grouxi recounts the countless births she has seen over the years.",
                    "it": "Parte educativa di FuncampR. Capitolo 9: il villaggio di Sandia. Mam'Grouxi racconta le innumerevoli nascite che ha visto nel corso degli anni (secoli?).",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire09ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre9»&onyxia.friendlyName=«Grimoire-Chap9»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter9»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap9»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter9»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap9»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 10",
                    "en": "IgoR Spellbook - Chapter 10",
                    "it": "Grimorio IgoR - Capitolo 10",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 10: La porte de sortie - Save Me. Dans ses pérégrinations, icaRius se trouve pris au piège dans une salle de l'impossible",
                    "en": "FuncampR educational part. Chapter 10: Exit Door - Save Me. In his wanderings, icaRius finds himself trapped in an Impossible Room.",
                    "it": "Parte educativa di FuncampR. Capitolo 10: La porta d'uscita - Salvami. Nelle sue avventure, IcaRius si trova intrappolato in una stanza dell'impossibile",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire10ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre10»&onyxia.friendlyName=«Grimoire-Chap10»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter10»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap10»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter10»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap10»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 11",
                    "en": "IgoR Spellbook - Chapter 11",
                    "it": "Grimorio IgoR - Capitolo 11",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 11: Codez-le une fois. L'automate TeoC enseigne à icaRius la Voie du Reproductible",
                    "en": "FuncampR educational part. Chapter 11: Code It Once. The TeoC automaton teaches icaRius the Way of the Reproducible.",
                    "it": "Parte educativa di FuncampR. Capitolo 11: Codificalo una volta. L'automate TeoC insegna a IcaRius la Via del Riproducibile.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire11ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre11»&onyxia.friendlyName=«Grimoire-Chap11»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter11»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap11»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter11»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap11»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 12",
                    "en": "IgoR Spellbook - Chapter 12",
                    "it": "Grimorio IgoR - Capitolo 12",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 12: De l’oxygène documentaire. Rencontre d'un drôle d’oiseau, FebeleR, féru de littérature statisienne et de grimoires...",
                    "en": "FuncampR educational part. Chapter 12: Breathe and document. Meeting with a strange bird, FebeleR, fond of Statisian literature and grimoires ...",
                    "it": "Parte educativa di FuncampR. Capitolo 12: Di ossigeno documentario. Incontro con un uccello strano, FebeleR, appassionato di letteratura statistica e grimori...",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire12ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre12»&onyxia.friendlyName=«Grimoire-Chap12»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter12»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap12»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter12»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap12»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 13",
                    "en": "IgoR Spellbook - Chapter 13",
                    "it": "Grimorio IgoR - Capitolo 13",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Chapitre 13: l'histoire sans fin. La gueRnouille Asa apprend à icaRius à écrire lui-même la fin de l'histoire",
                    "en": "FuncampR educational part. Chapter 13: The NeveRending Story. Asa fRog teaches icaRius to write himself the end of the story",
                    "it": "Parte educativa di FuncampR. Capitolo 13: la storia senza fine. La rana Asa insegna a IcaRius a scrivere da solo la fine della storia.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "it": "Tutorial R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire13ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre13»&onyxia.friendlyName=«Grimoire-Chap13»",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter13»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap13»",
                    "it": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter13»&grimoire.quete=«Spellbook_IGoR»&onyxia.friendlyName=«Spellbook-Chap13»",
                },
            },
            {
                "name": {
                    "fr": "Grimoire - Neverending",
                    "en": "Spellbook - Neverending",
                    "it": "Grimorio - Neverending",
                },
                "abstract": {
                    "fr": "Partie pédagogique du FuncampR. Le parchemin pour écrire soi-même le chapitre 13 et la fin de l'histoire d'icaRius.",
                    "en": "FuncampR educational part. The scroll on which icaRius writes chapter 13 and the end of the  story.",
                    "it": "Parte educativa di FuncampR. Il pergamino per scrivere da soli il capitolo 13 e la fine della storia di IcaRius.",
                },
                "authors": [
                    {
                        "fr": "Communauté FuncampR",
                        "it": "Comunità FunCampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel Rstudio",
                        "en": "Rstudio Tutorial",
                        "it": "Tutorial RStudio",
                    },
                ],
                "tags": ["discover", "learn"],
                "category": "training courses with R",
                "imageUrl": neverendingImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/neverending?autoLaunch=true&onyxia.friendlyName=«neveRending»",
            },
        ],
    },
    {
        "name": "Parcours R",
        "abstract": "Parcours de formation à R du pôle ministériel MTES-MCTRCT",
        "imageUrl": rSvgUrl,
        "parts": [
            {
                "name": "1. Découvrir R et RStudio",
                "abstract":
                    "Découvrir le fonctionnement de R, Aborder la dimension modulaire du logiciel, S’approprier l’interface graphique du logiciel, Être en capacité d’importer dans R un fichier CSV et de réaliser des calculs statistiques simples (somme, moyenne, table des fréquences)",
                "authors": [
                    "Thierry Zorn",
                    "Murielle Lethrosne",
                    "Vivien Roussez",
                    "Pascal Irz",
                ],
                "types": ["Tutoriel R"],
                "tags": ["discover"],
                "category": "training courses with R",
                "imageUrl": grenouilleImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M1%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_introduction-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_socle_introduction/",
            },
            {
                "name": "2. Préparer ses données avec R et le Tidyverse",
                "abstract":
                    "Être en capacité d’explorer les données, de les comprendre, de les structurer, de les croiser et les enrichir avec des données externes pour les préparer à des traitements statistiques. La préparation des données est une étape fondamentale pour faciliter la réalisation des analyses statistiques",
                "authors": ["Maël Theulière", "Bruno Terseur"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": coverImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M2%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_preparation_des_donnees-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_socle_preparation_des_donnees/",
            },
            {
                "name": "3. Statistiques descriptives avec R",
                "abstract":
                    "Rappels théoriques sur les méthodes usuelles de statistiques uni- et bi-variées, mise en œuvre avec R, interprétation",
                "authors": ["Solène Colin", "Vivien Roussez", "Pascal Irz"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": pollinisateurImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M3%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_statistiques_descriptives-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_statistiques_descriptives/",
            },
            {
                "name": "4. Analyse des données multi-dimensionnelles avec R",
                "abstract":
                    "Méthodologie pour évaluer, en fonction des caractéristiques des données, la pertinence des méthodes usuelles d'analyse multidimensionnelle (ACP, AFC, ACM, CAH). Mise en œuvre avec le package factoMiner. Sorties graphiques avec le package factoextra. Interprétation",
                "authors": ["Vivien Roussez", "Pascal Irz"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses with R",
                "imageUrl": crabeImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M4%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_multi_dimensionnelles-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_analyse_multi_dimensionnelles/",
            },
            {
                "name": "5. Valoriser ses données avec R",
                "abstract":
                    "Utiliser les outils R pour produire des graphiques avec le package ggplot2. Produire des cartes en utilisant ggplot2 et sf. Produire des tableaux interactifs. Rendre interactifs des graphiques et des cartes",
                "authors": ["Murielle Lethrosne", "Maël Theulière"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses with R",
                "imageUrl": renardImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M5%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_datavisualisation-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_datavisualisation/",
            },
            {
                "name": "7. Analyse spatiale",
                "abstract":
                    "Introduction aux données spatiales, lire et écrire des données spatiales, manipuler des donnés spatiales, créer des cartes.",
                "authors": ["Murielle Lethrosne", "Maël Theulière"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses with R",
                "imageUrl": odonateImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M7%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_spatiale-4.2.1%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_scripts%2Fformation%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_analyse_spatiale/",
            },
        ],
    },
    {
        "name": "Initiation à Python",
        "abstract": "Cours introductif à Python : fondamentaux du langage et premières manipulations de données",
        "authors": [
          "inseefrlab"
        ],
        "contributors": [
          "Romain Avouac",
          "Shiraz Adamaly"
        ],
        "types": [
          "Notebook Python"
        ],
        "tags": [
          "discover",
          "learn"
        ],
        "category": "training courses with python",
        "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
        "parts": [
          {
            "name": "Introduction",
            "abstract": "Introduction de l'auto-formation \"Initiation à Python\" du SSP Cloud",
            "authors": [
              "inseefrlab"
            ],
            "contributors": [
              "Romain Avouac",
              "Shiraz Adamaly"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "discover",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": []
          },
          {
            "name": "Fondamentaux du langage",
            "abstract": "Présentation de la syntaxe et des objets de base en Python",
            "authors": [
              "inseefrlab"
            ],
            "contributors": [
              "Romain Avouac",
              "Shiraz Adamaly"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "discover",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "Types de base et variables",
                "abstract": "Découverte des types de base (nombres et chaînes de caractères) et des variables.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20types-variables%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Structures de données 1 : listes et tuples",
                "abstract": "Découverte des structures de données séquentielles : listes et tuples.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20data-structures1%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Structures de données 2 : dictionnaires et sets",
                "abstract": "Découverte des structures de données non-ordonnées : dictionnaires et sets.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20data-structures2%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Tests",
                "abstract": "Découverte des tests et des structures conditionnelles, qui permettent à un programme de prendre des décisions de manière automatisée.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20tests%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Boucles",
                "abstract": "Automatisation d'opérations répétitives à l'aide des boucles for et des boucles while.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20loops%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Fonctions",
                "abstract": "Rendre son code mieux structuré et plus lisible avec les fonctions.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20functions%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Notions de programmation orientée objet",
                "abstract": "Un rapide tour dans le monde des objets, leurs attributs et leurs méthodes",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20oop%C2%BB&security.allowlist.enabled=false"
              }
            ]
          },
          {
            "name": "Manipulation de données",
            "abstract": "Exploration, manipulation et visualisation de données",
            "authors": [
              "inseefrlab"
            ],
            "contributors": [
              "Romain Avouac",
              "Shiraz Adamaly"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "discover",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "Manipulation de fichiers",
                "abstract": "Manipulation de fichiers externes : import de modules et lecture/écriture de fichiers texte.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%20modules-files%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Travailler avec des fichiers CSV et JSON",
                "abstract": "Manipulation des fichiers CSV et JSON, deux types de fichiers très utilisés pour la diffusion de données.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%20csv-json-files%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Calcul numérique avec NumPy",
                "abstract": "Manipulation des arrays et des fonctions de NumPy, la librairie de référence pour le calcul numérique.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%20numpy%C2%BB&security.allowlist.enabled=false"
              }
            ]
          },
          {
            "name": "Projets",
            "abstract": "Des projets de code pour mettre en application les enseignements de la formation",
            "authors": [
              "inseefrlab"
            ],
            "contributors": [
              "Romain Avouac",
              "Shiraz Adamaly"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "discover",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "Projet 1 - Puissance 4",
                "abstract": "Un projet de code pour mettre en pratique les éléments fondamentaux de Python : structures de données, boucles, fonctions, conditions.",
                "authors": [
                  "inseefrlab"
                ],
                "contributors": [
                  "Romain Avouac",
                  "Shiraz Adamaly"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "discover",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init_jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABprojects%20puissance4%C2%BB&security.allowlist.enabled=false"
              }
            ]
          }
        ]
      },
    {
        "name": "Python pour la data science",
        "abstract": "Approfondissement de Python pour la data science : manipulation de données, visualisation, modélisation, traitement du langage naturel",
        "authors": [
          "Lino Galiana"
        ],
        "types": [
          "Notebook Python"
        ],
        "tags": [
          "consolidate",
          "learn"
        ],
        "category": "training courses with python",
        "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
        "parts": [
          {
            "name": "Manipulation de données",
            "abstract": "Manipulation et récupération automatisée de données",
            "authors": [
              "Lino Galiana"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "consolidate",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "Retour sur numpy",
                "abstract": "`numpy` constitue la brique de base de l'écosystème de la _data-science_ en\n`Python`. Toutes les librairies de manipulation de données, de modélisation\net de visualisation reposent, de manière plus ou moins directe, sur `numpy`.\nIl est donc indispensable de revoir quelques notions sur ce package avant\nd'aller plus loin.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2001_numpy%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Introduction à pandas",
                "abstract": "`pandas` est l'élément central de l'écosystème `Python` pour la _data-science_. \nLe succès récent de `Python` dans l'analyse de données tient beaucoup à `pandas` qui a permis d'importer la\nlogique `SQL` dans le langage `Python`. `pandas` embarque énormément de\nfonctionalités qui permettent d'avoir des _pipelines_ efficaces pour\ntraiter des données de volumétrie moyenne (jusqu'à quelques Gigas). Au-delà\nde cette volumétrie, il faudra se tourner vers d'autres solutions\n(`PostgresQL`, `Dask`, `Spark`...).\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002a_pandas_tutorial%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Pratique de pandas: un exemple complet",
                "abstract": "Après avoir présenté la logique de `pandas` dans le chapitre précédent, \nce chapitre vise à illustrer les fonctionalités du package \nà partir de données d'émissions de gaz à effet de serre\nde l'[`Ademe`](https://data.ademe.fr/). \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002b_pandas_TP%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Données spatiales: découverte de geopandas",
                "abstract": "Les données géolocalisées se sont multipliées depuis quelques années, qu'il\ns'agisse de données open-data ou de traces numériques géolocalisées de\ntype _big-data_. Pour les données spatiales, le package `geopandas`\nétend les fonctionalités de l'écosystème `pandas` afin de permettre\nde manipuler des données géographiques complexe de manière simple.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2003_geopandas_tutorial%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Pratique de geopandas: données vélib",
                "abstract": "Ce chapitre illustre les fonctionalités de `geopandas` à partir des\ndécomptes de vélo fournis par la ville de Paris\nen [opendata](https://opendata.paris.fr/explore/dataset/comptage-velo-donnees-compteurs/map/?disjunctive.id_compteur&disjunctive.nom_compteur&disjunctive.id&disjunctive.name&basemap=jawg.dark&location=12,48.85855,2.33754).\nIl prolonge\nle chapitre précédent avec des données un petit peu plus complexes\nà manipuler.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2003_geopandas_TP%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Webscraping avec python",
                "abstract": "`Python` permet de facilement récupérer une page web pour en extraire des\ndonnées à restructurer. Le webscraping, que les Canadiens nomment\n_\"moissonnage du web\"_, est une manière de plus en plus utilisée de\nrécupérer une grande masse d'information en temps réel. \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004a_webscraping_TP%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Maîtriser les expressions régulières",
                "abstract": "Les expressions régulières fournissent un cadre très pratique pour manipuler\nde manière flexible des données textuelles. Elles sont très utiles\nnotamment pour les tâches de traitement naturel du langage (__NLP__)\nou le nettoyage de données textuelles.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004b_regex_TP%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Requêter via des API avec Python",
                "abstract": "Les __API__ (_Application Programming Interface_) sont un mode d'accès aux\ndonnées en expansion. Grâce aux API, l'automatisation de scripts\nest facilitée puisqu'il n'est plus nécessaire de stocker un fichier,\net gérer ses différentes versions, mais uniquement de requêter une base\net laisser au producteur de données le soin de gérer les mises à jour de\nla base.  \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004c_API_TP%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Exercices supplémentaires de webscraping",
                "abstract": "Un exercice supplémentaire de _webscraping_,\noù l'on construit de manière automatique sa liste de courses à partir des données\nde [`Marmiton`](https://www.marmiton.org/).\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2006a_exo_supp_webscraping%C2%BB&security.allowlist.enabled=false"
              }
            ]
          },
          {
            "name": "Visualisation de données",
            "abstract": "Graphiques, cartes, et visualisations interactives",
            "authors": [
              "Lino Galiana"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "consolidate",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "De beaux graphiques avec python: mise en pratique",
                "abstract": "Une partie essentielle du travail du \n_data-scientist_ est d'être en mesure\nde synthétiser une information dans des\nreprésentations graphiques percutantes. Ce\nchapitre permet de découvrir\nles fonctionalités graphiques de `matplotlib`,\n`seaborn` et `plotly` pour représenter des statistiques\nsur les décomptes de vélo à Paris.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20matplotlib%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "De belles cartes avec python: mise en pratique",
                "abstract": "La cartographie est un excellent moyen de diffuser\nune connaissance, y compris à des publics peu\nfamiliers de la statistique. Ce chapitre permet\nde découvrir la manière dont on peut\nutiliser `Python` pour construire des \ncartes standards (avec `geopandas`) ou \nréactives (`folium`). Cela se fera\nà travers un exercice permettant\nde visualiser la fréquentation par les\nvélos des routes parisiennes.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20maps%C2%BB&security.allowlist.enabled=false"
              }
            ]
          },
          {
            "name": "Modélisation",
            "abstract": "Preprocessing, apprentissage supervisé et non supervisé, évaluation de modèles",
            "authors": [
              "Lino Galiana"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "consolidate",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "Préparation des données pour construire un modèle",
                "abstract": "Afin d'avoir des données cohérentes avec les hypothèses de modélisation,\nil est absolument fondamental de prendre le temps de\npréparer les données à fournir à un modèle. La qualité de la prédiction\ndépend fortement de ce travail préalable qu'on appelle _preprocessing_.\nBeaucoup de méthodes sont disponibles dans `scikit`, ce qui rend ce travail\nmoins fastidieux et plus fiable. \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%200_preprocessing%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Evaluer la qualité d'un modèle",
                "abstract": "Faire preuve de méthode pour évaluer la qualité d'un modèle \npermet de proposer des prédictions plus robustes, ayant\nde meilleures performances sur un nouveau jeu de données\n(prédictions _out-of-sample_). Décomposer\nl'échantillon initial en sous-échantillons d'entraînement\net de tests, faire de la validation croisée, utiliser\nles bonnes mesures de performances \npeut se faire, grâce à scikit, de manière relativement standardisée.\nCette démarche scientifique est essentielle pour assurer la confiance\ndans la qualité d'un modèle, ce qu'a illustré récemment\nun [cycle de séminaire de Princeton](https://reproducible.cs.princeton.edu/)\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%201_modelevaluation%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Classification: premier modèle avec les SVM",
                "abstract": "La classification permet d'attribuer une classe d'appartenance (_label_\ndans la terminologie du _machine learning_)\ndiscrète à des données à partir de certaines variables explicatives\n(_features_ dans la même terminologie).\nLes algorithmes de classification sont nombreux. L'un des plus intuitifs et\nles plus fréquemment rencontrés est le `SVM` (*support vector machine*).\nCe chapitre illustre les enjeux de la classification à partir de\nce modèle sur les données de vote aux élections présidentielles US de 2020.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%202_SVM%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Régression: une introduction",
                "abstract": "La régression linéaire est la première modélisation statistique\nqu'on découvre dans un cursus quantitatif. Il s'agit en effet d'une\nméthode très intuitive et très riche. Le _Machine Learning_ permet de\nl'appréhender d'une autre manière que l'économétrie. Avec `scikit` et\n`statsmodels`, on dispose de tous les outils pour satisfaire à la fois\ndata scientists et économistes. \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%203_regression%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Sélection de variables : une introduction",
                "abstract": "L'accès à des bases de données de plus en plus riches permet\ndes modélisations de plus en plus raffinées. Cependant,\nles modèles parcimonieux sont généralement préférables\naux modèles extrêmement riches pour obtenir de bonnes\nperformances sur un nouveau jeu de données (prédictions\n_out-of-sample_). Les méthodes de sélection de variables,\nnotamment le [`LASSO`](https://fr.wikipedia.org/wiki/Lasso_(statistiques)),\npermettent de sélectionner le signal le plus\npertinent dilué au milieu du bruit lorsqu'on a beaucoup d'information à\ntraiter.  \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%204_featureselection%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Clustering",
                "abstract": "Le _clustering_ consiste à répartir des observations dans des groupes,\ngénéralement non observés,\nen fonction de caractéristiques observables. Il s'agit d'une\napplication classique, en _machine learning_\nde méthodes non supervisées puisqu'on ne dispose généralement pas de l'information \nsur le groupe auquel apprartient réellement une observation. Les applications\nau monde réel sont nombreuses, notamment dans le domaine de la\nsegmentation tarifaire.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%205_clustering%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Premier pas vers l'industrialisation avec les pipelines scikit",
                "abstract": "Les _pipelines_ `scikit` permettent d'intégrer de manière très flexible\nun ensemble d'opérations de pre-processing et d'entraînement de modèles\ndans une chaîne d'opérations. Il s'agit d'une approche particulièrement\nappropriée pour réduire la difficulté à changer d'algorithme ou pour\nfaciliter la ré-application d'un code à de nouvelles données\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%206_pipeline%C2%BB&security.allowlist.enabled=false"
              }
            ]
          },
          {
            "name": "Traitement du langage naturel",
            "abstract": "Analyse et modélisation des données textuelles",
            "authors": [
              "Lino Galiana"
            ],
            "types": [
              "Notebook Python"
            ],
            "tags": [
              "consolidate",
              "learn"
            ],
            "category": "training courses with python",
            "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
            "parts": [
              {
                "name": "Quelques éléments pour comprendre les enjeux",
                "abstract": "Les corpus textuels étant des objets de très grande dimension\noù le ratio signal/bruit est faible, il est nécessaire de mettre\nen oeuvre une série d'étapes de nettoyage de texte. Ce chapitre va\nexplorer quelques méthodes classiques de nettoyage en s'appuyant\nsur le _Comte de Monte Cristo_ d'Alexandre Dumas. \n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2001_intro%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Nettoyer un texte: approche bag-of-words (exercices)",
                "abstract": "Ce chapitre continue de présenter l'approche de __nettoyage de données__ \ndu `NLP` en s'appuyant sur le corpus de trois auteurs\nanglo-saxons : Mary Shelley, Edgar Allan Poe, H.P. Lovecraft.\nDans cette série d'exercice nous mettons en oeuvre de manière\nplus approfondie les différentes méthodes présentées\nprécedemment.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2002_exoclean%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Latent Dirichlet Allocation (LDA)",
                "abstract": "Le modèle [Latent Dirichlet Allocation (LDA)](https://fr.wikipedia.org/wiki/Allocation_de_Dirichlet_latente)\nest un modèle probabiliste génératif qui permet\nde décrire des collections de documents de texte ou d’autres types de données discrètes.\nLa `LDA` fait\npartie d’une catégorie de modèles appelés _\"topic models\"_, qui cherchent à découvrir des structures\nthématiques cachées dans des vastes archives de documents.\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2003_lda%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Méthodes de vectorisation : comptages et word embeddings",
                "abstract": "Pour pouvoir utiliser des données textuelles dans des algorithmes\nde _machine learning_, il faut les vectoriser, c'est à dire transformer\nle texte en données numériques. Dans ce TP, nous allons comparer\ndifférentes méthodes de vectorisation, à travers une tâche de prédiction :\n_peut-on prédire un auteur littéraire à partir d'extraits de ses textes ?_\nParmi ces méthodes, on va notamment explorer le modèle `Word2Vec`, qui\npermet d'exploiter les structures latentes d'un texte en construisant\ndes _word embeddings_ (plongements de mots).\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2004_word2vec%C2%BB&security.allowlist.enabled=false"
              },
              {
                "name": "Exercices supplémentaires",
                "abstract": "Des exercices supplémentaires pour pratiquer les concepts du NLP\n",
                "authors": [
                  "Lino Galiana"
                ],
                "types": [
                  "Notebook Python"
                ],
                "tags": [
                  "consolidate",
                  "learn"
                ],
                "category": "training courses with python",
                "imageUrl": "https://raw.githubusercontent.com/InseeFrLab/www.sspcloud.fr/main/src/assets/img/python.jpg",
                "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2005_exo_supp%C2%BB&security.allowlist.enabled=false"
              }
            ]
          }
        ]
      },
    {
        "name": "Initiation à Spark",
        "abstract":
            "Parcours de formation au calcul distribué avec Spark pour du traitement de données à grande échelle.",
        "imageUrl": sparkImgUrl,
        "parts": [
            {
                "name": "1. Introduction à Spark",
                "abstract": "Bases d'architecture et premiers exemples",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses in data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=«diffusion/spark-lab/1-introduction»&vault.directory=«tm8enk»&onyxia.friendlyName=«1_Intro_spark»",
            },
            {
                "name": "2. Datalake S3",
                "abstract":
                    "Faire du spark avec comme source et destination un système de fichier hadoop compatible : S3",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": minioImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/2-datalake»&vault.directory=«tm8enk&onyxia.friendlyName=«2_Datalake»",
            },
            {
                "name": "2.2 Données chiffrées sur S3",
                "abstract":
                    "Utiliser une donnée chiffrée sur S3, définir vos propres clés de chiffrement avec les clés de chiffrement fournies par Vault (SSE-C).",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": vaultSvgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/2b-vault-s3-sseC»&vault.directory=«tm8enk»&onyxia.friendlyName=«2b_vault-s3-sseC»",
            },
            {
                "name": "3. Spark et Kubernetes",
                "abstract":
                    "Faire du Spark avec un cluster Spark sur Kubernetes",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": kubImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/3-spark-kubernetes»&vault.directory=«tm8enk»&onyxia.friendlyName=«3_Spark_Kubernetes»",
            },
            {
                "name": "3.2 Bases de spark",
                "abstract":
                    "Lazy evaluation, actions, transformations et cache",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": kubImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/3b-dynamic-allocation»&vault.directory=«tm8enk»&onyxia.friendlyName=«3_bases_spark»",
            },
            {
                "name": "4. Le format de données parquet",
                "abstract": "Notion de partitions et format parquet",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/4-format-parquet»&vault.directory=«tm8enk»&onyxia.friendlyName=«4_format_parquet»",
            },
            {
                "name": "5. Hive-metastore et metadonnées",
                "abstract": "Metadonnées des tables d'un datalake",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": hiveSvgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/5-hive-metastore»&vault.directory=«tm8enk»&onyxia.friendlyName=«5_hive_metastore»",
            },
            {
                "name": "6. Spark-thrift et redash",
                "abstract":
                    "Et si on faisait simplement du SQL en externalisant le driver spark et un outil de visualisation : redash",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": redashSvgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/6-spark-thrift-server»&vault.directory=«tm8enk»&onyxia.friendlyName=«6_spark_thrift_server»",
            },
            {
                "name": "7. Spark streaming",
                "abstract":
                    "Analyse de tweets. Notions de batch, micro-batch, streaming tout dépend de la vélocité recherchée.",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/7-spark-streaming»&vault.directory=«tm8enk»&onyxia.friendlyName=«7_spark_streaming»",
            },
            {
                "name": "8. Spark Graphx",
                "abstract": "Analyse de tweets avec l'utilisation de graph Spark",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/8-spark-graphx»&vault.directory=«tm8enk»&onyxia.friendlyName=«8_spark_graphx»",
            },
            {
                "name": "9. Spark GPU",
                "abstract": "A la découverte des GPUs avec spark",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark-gpu?autoLaunch=true&init.personalInit=«https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh»&vault.secret=«diffusion/spark-lab/9-spark-gpu»&vault.directory=«tm8enk»&onyxia.friendlyName=«9_spark_gpu»",
            },
            {
                "name": "10. SparkR",
                "abstract": "R pour de gros volumes",
                "authors": ["Inseefrlab"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses in data science",
                "imageUrl": sparkImgUrl,
                "articleUrl":
                    "https://minio.lab.sspcloud.fr/projet-spark-lab/SparkR.html",
            },
        ],
    },
    {
        "name": "Analyse Textuelle",
        "abstract": "Initiation à l'analyse textuelle",
        "authors": ["SSPLAB"],
        "contributors": [
            "Stéphanie Himpens, Milena Suarez Castillo, Stéphanie Combes, Benjamin Sakarovitch",
        ],
        "imageUrl": bookImgUrl,
        "parts": [
            {
                "name": "Analyse d'article avec R",
                "abstract":
                    "Analyser un corpus d'articles du journal Le Monde. Prétraiter (nettoyer, normaliser) les données afin de pouvoir en extraire de l'information, description du vocabulaire, identifier des thèmes ou la polarité du texte (négatif, positif)",
                "authors": ["SSPLAB"],
                "contributors": [
                    "Stéphanie Himpens, Milena Suarez Castillo, Stéphanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Tutoriel R"],
                "tags": ["discover", "learn"],
                "category": "training courses in data science",
                "imageUrl": bookImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&init.personalInit=«https://git.lab.sspcloud.fr/ssplab/formation_text_mining_public/-/raw/master/installR.sh»&onyxia.friendlyName=«Text_Mining_R»",
            },
            {
                "name": "Analyse d'article avec Python",
                "abstract":
                    "Analyser un corpus d'articles du journal Le Monde. Prétraiter (nettoyer, normaliser) les données afin de pouvoir en extraire de l'information, description du vocabulaire, identifier des thèmes ou la polarité du texte (négatif, positif)",
                "authors": ["SSPLAB"],
                "contributors": [
                    "Stéphanie Himpens, Milena Suarez Castillo, Stéphanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses in data science",
                "imageUrl": pythonImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https://git.lab.sspcloud.fr/ssplab/formation_text_mining_public/-/raw/master/installPy.sh»&onyxia.friendlyName=«Text_Mining_Python»",
            },
            {
                "name": "Appariemment flou avec Elastic Search",
                "abstract":
                    "Calculer les calories d'une recette de cuisine en cherchant les produits dans Elastic",
                "authors": ["SSPLAB"],
                "contributors": [
                    "Stéphanie Himpens, Milena Suarez Castillo, Stéphanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "training courses in data science",
                "imageUrl": elkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&onyxia.friendlyName=%C2%ABFuzzyMatchElasticInitiation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Fhby7ih%2Fhandsonelastic%2F-%2Fraw%2Fmaster%2Finit.sh%C2%BB&resources.requests.memory=%C2%AB10512Mi%C2%BB&security.allowlist.enabled=false&persistence.enabled=false&discovery.hive=false",
            },
        ],
    },
    {
        "name": "Carroyage et lissage spatial sur R",
        "abstract":
            "Apprendre à carroyer les informations, réaliser des lissages spatiaux et calculer des indicateurs à partir des données carroyées sur R",
        "imageUrl": btbImgUrl,
        "parts": [
            {
                "name": "Introduction",
                "abstract":
                    "Présentation générale de la formation et ressources additionnelles",
                "authors": ["Kim Antunez", "Julien Pramil"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses in data science",
                "imageUrl": btbImgUrl,
                "articleUrl": "https://inseefrlab.github.io/formation-r-lissage-spatial/",
            },
            {
                "name": "Tutoriel",
                "abstract":
                    "Tutoriel de formation au carroyage et au lissage spatial sur R",
                "authors": ["Kim Antunez", "Julien Pramil"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses in data science",
                "imageUrl": btbImgUrl,
                "articleUrl":
                    "https://inseefrlab.github.io/formation-r-lissage-spatial/tuto.html",
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&service.image.custom.enabled=true&service.image.custom.version=«inseefrlab%2Fformation-r-lissage-spatial%3Alatest»&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh»",
            },
            {
                "name": "Exercices",
                "abstract":
                    "Mise en pratique des techniques présentées dans le tutoriel à partir de nouveaux jeux de données",
                "authors": ["Kim Antunez", "Julien Pramil"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses in data science",
                "imageUrl": btbImgUrl,
                "articleUrl":
                    "https://inseefrlab.github.io/formation-r-lissage-spatial/exo.html",
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&service.image.custom.enabled=true&service.image.custom.version=«inseefrlab%2Fformation-r-lissage-spatial%3Alatest»&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh»",
            },
        ],
    },
    {
        "name": "Virtualisation des données",
        "abstract": "De l'utilisation simple de S3 à la reconstruction d'une bdd distribuée par morceau sur Onyxia",
        "authors": ["Inseefrlab"],
        "contributors": [
            "Frédéric Comte",
        ],
        "imageUrl": pythonImgUrl,
        "parts": [
            {
                "name": "Virtualisation des données sur Onyxia",
                "abstract":
                    "Pré-requis : avoir lancé hive-metastore",
                "authors": ["Inseefrlab"],
                "contributors": [
                    "Frédéric Comte",
                ],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses in data science",
                "imageUrl": pythonImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-pyspark?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Fopenlab%2F-%2Fraw%2Fmain%2Finit-notebook.sh%C2%BB&onyxia.friendlyName=%C2%ABopenlab%C2%BB",
            }
        ],
    },
    {
        "name": "Tutoriels ML",
        "abstract": "Tutoriels de Machine learning",
        "imageUrl": jupyterImgUrl,
        "parts": [
            {
                "name": "Random forest",
                "abstract": "Initiation au random forest sur les données du Titanic",
                "authors": ["Alexis Dondon"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses in data science",
                "imageUrl": jupyterImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Falexisdondon%2Fformation%2F-%2Fraw%2Fmaster%2FTitanic-randomForest.sh%C2%BB&onyxia.friendlyName=%C2%ABRandom_forest%C2%BB",
            },
        ],
    },
    {
        "name": "Documentation UtilitR",
        "abstract": "Une documentation collaborative et open source sur R, destinée en premier lieu aux agents de l’Insee.",
        "authors": ["UtilitR"],
        "types": ["Tutoriel R"],
        "tags": ["discover", "learn"],
        "category": "training courses with R",
        "imageUrl": utilitrImgUrl,
        "articleUrl": "https://www.book.utilitr.org/",
        "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.9.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB"
    },
    {
      "name": "Polars",
      "abstract": "Des tutoriels R et Python pour prendre en main Polars, une librairie Rust qui offre des performances exceptionnelles sur les DataFrames",
      "imageUrl": rpolarsImgUrl,
      "parts": [
        {
          "name": "Cookbook de Polars pour R",
          "abstract": "Une documentation pour apprendre à utiliser Polars avec R (en anglais)",
          "authors": ["Damien Dotta"],
          "types": ["Tutoriel R"],
          "tags": ["discover", "learn"],
          "category": "training courses in data science",
          "imageUrl": rpolarsImgUrl,
          "articleUrl": "https://ddotta.github.io/cookbook-rpolars/"
        },
        {
          "name": "Prise en main de Polars en Python",
          "abstract":
              "Un tutoriel pour prendre en main le package Python Polars, une alternative directe et très performante à Pandas",
          "authors": ["Romain Tailhurat", "Lino Galiana"],
          "types": ["Notebook Python"],
          "tags": ["learn", "consolidate"],
          "category": "training courses in data science",
          "imageUrl": jupyterImgUrl,
          "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fssphub%2Fmain%2Fcontent%2Fnotebooks%2Finit.sh»&init.personalInitArgs=«polars-tuto»",
          "articleUrl": "https://ssphub.netlify.app/post/polars/"
      }
      ]
    },
  {
    "name": "Ateliers AMI IA",
    "abstract":
        "L'objectif de cet atelier est de vous faire découvrir le déroulement d'un projet de data science à travers trois cas d'études.",
    "authors": ["LabIA-Etalab"],
    "contributors": ["LabIA-Etalab"],
    "types": ["Notebook Python"],
    "tags": ["consolidate", "learn"],
    "category": "training courses in data science",
    "imageUrl": pythonImgUrl,
    "parts": [
        {
            "name": "Introduction",
            "abstract": "Introduction aux outils de datascience",
            "authors": ["LabIA-Etalab"],
            "contributors": ["LabIA-Etalab"],
            "types": ["Notebook Python"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": pythonImgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Foutils_du_datascientist.ipynb»&onyxia.friendlyName=«outils»&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
        {
            "name": "Atelier 1",
            "abstract": "Introduction à la data visualisation",
            "authors": ["LabIA-Etalab"],
            "contributors": ["LabIA-Etalab"],
            "types": ["Notebook Python"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": pythonImgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_a_la_data_visualisation.ipynb»&onyxia.friendlyName=«data%20visualisation»&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
        {
            "name": "Atelier 2",
            "abstract": "Introduction au traîtement du langage naturel",
            "authors": ["LabIA-Etalab"],
            "contributors": ["LabIA-Etalab"],
            "types": ["Notebook Python"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": pythonImgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_au_NLP.ipynb»&onyxia.friendlyName=«NLP»&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
        {
            "name": "Atelier 3",
            "abstract": "Introduction au machine learning",
            "authors": ["LabIA-Etalab"],
            "contributors": ["LabIA-Etalab"],
            "types": ["Notebook Python"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": pythonImgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=«https%3A%2F%2Fgit.lab.sspcloud.fr%2Ftm8enk%2Finit%2F-%2Fraw%2Fmain%2Finit.sh»&init.personalInitArgs=«https%3A%2F%2Fgithub.com%2Fetalab-ia%2Fami-ia%20session2%2Fintroduction_au_machine_learning.ipynb»&onyxia.friendlyName=«ML»&git.enabled=false&s3.enabled=false&discovery.hive=false&discovery.mlflow=false&vault.enabled=false",
        },
    ],
  },
  {
    "name": "Bonnes pratiques de développement avec Git et R",
    "abstract":
        "Formation au travail collaboratif et au contrôle de version à l'aide des logiciels Git et RStudio",
    "imageUrl": gitImgUrl,
    "parts": [
        {
            "name": "Version courte",
            "abstract":
                "Version 1 jour de la formation aux bonnes pratiques avec Git et R, axée autour de l'apprentissage de Git, de la qualité du code et de la structure des projets statistiques.",
            "authors": [
                "Lino Galiana",
                "Romain Avouac"
            ],
            "types": ["Tutoriel R"],
            "tags": ["learn"],
            "category": "best practices",
            "imageUrl": gitImgUrl,
            "articleUrl": "https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/slides/light.html",
            "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=false&git.cache=%C2%AB36000%C2%BB"
        },
        {
            "name": "Version complète",
            "abstract":
                "Version 2 jours de la formation aux bonnes pratiques avec Git et R, axée autour des notions de reproductibilité et de collaboration.",
            "authors": [
                "Lino Galiana",
                "Romain Avouac"
            ],
            "types": ["Tutoriel R"],
            "tags": ["learn"],
            "category": "best practices",
            "imageUrl": gitImgUrl,
            "articleUrl": "https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/slides/complete.html",
            "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=false&git.cache=%C2%AB36000%C2%BB"
        },
    ],
  },
  {
    "name": "Introduction au MLOps avec MLflow",
    "abstract": "Un tutoriel pour prendre en main MLflow, un outil permettant de gérer le cycle de vie d'un projet de machine learning de bout en bout.",
    "authors": ["Romain Avouac", "Thomas Faria", "Tom Seimandi"],
    "types": ["Slides"],
    "tags": ["learn", "consolidate"],
    "category": "best practices",
    "imageUrl": mlflowImgUrl,
    "articleUrl": "https://inseefrlab.github.io/formation-mlops/slides/index.html"
  },
  {
    "name": "Déploiement d'applications",
    "abstract":
        "Une série de tutoriels pour se former au déploiement d'applications sur le SSP Cloud.",
    "imageUrl": kubImgUrl,
    "parts": [
        {
            "name": "Déploiement d'une application R Shiny",
            "abstract":
                "Un tutoriel détaillé pour packager une application R Shiny sous forme de chart Helm et la déployer sur le SSP Cloud.",
            "authors": ["Inseefrlab"],
            "types": ["Tutoriel R"],
            "tags": ["learn", "consolidate"],
            "category": "best practices",
            "imageUrl": shinyImgUrl,
            "articleUrl": "https://github.com/InseeFrLab/sspcloud-tutorials/blob/main/deployment/shiny-app.md",
        },
    ],
  },
  {
    "name": "Funathon 2023",
    "abstract": "Des tutoriels pour découvrir et pratiquer la data science autour du thème 'Du champ à l'assiette'",
    "imageUrl": dsImgUrl,
    "parts": [
        {
            "name": "150 ans d'agriculture en France",
            "abstract":
                "Initiation à la dataviz sur séries longues avec Observable.",
            "authors": ["Inseefrlab"],
            "types": ["Tutoriel"],
            "tags": ["learn"],
            "category": "training courses in data science",
            "imageUrl": observableImgUrl,
            "articleUrl": "https://github.com/InseeFrLab/funathon2023_sujet1/tree/main",
            "deploymentUrl": "https://observablehq.com/@francoissemecurbe/le-recensement-agricole-de-1852"
        },
        {
            "name": "Explorer la géographie des cultures agricoles françaises",
            "abstract":
                "Initiation à l'analyse spatiale et à la dataviz avec R et PostGIS",
            "authors": ["Inseefrlab"],
            "types": ["Tutoriel"],
            "tags": ["learn"],
            "category": "training courses in data science",
            "imageUrl": rSvgUrl,
            "articleUrl": "https://inseefrlab.github.io/funathon2023_sujet2/",
            "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/rstudio?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet2%2Fmain%2Finit.sh%C2%BB&onyxia.friendlyName=%C2%ABSujet%202%20Funathon%C2%BB"
        },
        {
          "name": "Explorer les habitudes alimentaires de nos compatriotes",
          "abstract":
              "Initiation à l'analyse exploratoire de données, au clustering et au machine learning avec R ou Python",
          "authors": ["Inseefrlab"],
          "types": ["Tutoriel"],
          "tags": ["learn"],
          "category": "training courses in data science",
          "imageUrl": dsImgUrl,
          "parts": [
            {
              "name": "Tutoriel en Python",
              "abstract": "",
              "authors": ["Inseefrlab"],
              "types": ["Tutoriel"],
              "tags": ["learn"],
              "category": "training courses in data science",
              "imageUrl": pythonImgUrl,
              "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet3%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABPython%C2%BB"
            },
            {
              "name": "Tutoriel en R",
              "abstract": "",
              "authors": ["Inseefrlab"],
              "types": ["Tutoriel"],
              "tags": ["learn"],
              "category": "training courses in data science",
              "imageUrl": rSvgUrl,
              "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-r?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet3%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABR%C2%BB"
            },
          ]
        },
        {
          "name": "Mon application Yuka",
          "abstract":
              "Un parcours guidé pour créer une application de lecture de code barre à la manière de Yuka avec Python.",
          "authors": ["Inseefrlab"],
          "types": ["Tutoriel"],
          "tags": ["learn"],
          "category": "training courses in data science",
          "imageUrl": pythonImgUrl,
          "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=false&kubernetes.role=%C2%ABadmin%C2%BB&networking.user.enabled=true&git.cache=%C2%AB36000%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet4%2Fmain%2Finit.sh%C2%BB&git.token=%C2%AB%C2%BB&git.repository=%C2%ABhttps%3A%2F%2Fgithub.com%2FInseeFrLab%2Ffunathon2023_sujet4.git%C2%BB"
        },
        {
          "name": "Analyse textuelle des commentaires clients de restaurants",
          "abstract":
              "Analyse de sentiments à partir de commentaires clients scrapés sur Trustpilot avec Python.",
          "authors": ["Inseefrlab"],
          "types": ["Tutoriel"],
          "tags": ["learn"],
          "category": "training courses in data science",
          "imageUrl": pythonImgUrl,
          "deploymentUrl": "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Ffunathon2023_sujet5%2Fmain%2Finit.sh%C2%BB"
        },
        {
          "name": "A la recherche de l'alimentation perdue",
          "abstract":
              "Traitement du langage naturel : rechercher toutes les références à des aliments dans l'oeuvre de Proust.",
          "authors": ["Inseefrlab"],
          "types": ["Tutoriel"],
          "tags": ["learn"],
          "category": "training courses in data science",
          "imageUrl": pythonImgUrl,
          "articleUrl": "https://github.com/InseeFrLab/funathon2023_sujet6"
      },
    ],
  },
  {
    "name": "Appariement de données individuelles",
    "abstract":
        "Des tutoriels en Python et en R pour s'initier à l'appariement de données individuelles.",
    "authors": ["Lucas Malherbe"],
    "contributors": ["Lucas Malherbe"],
    "types": ["Notebook Python"],
    "tags": ["consolidate", "learn"],
    "category": "training courses in data science",
    "imageUrl": pythonImgUrl,
    "parts": [
        {
            "name": "Package Record Linkage (Python)",
            "abstract": "Appariement de données individuelles en Python avec le package Record Linkage",
            "authors": ["Lucas Malherbe"],
            "contributors": ["Lucas Malherbe"],
            "types": ["Notebook Python"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": pythonImgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABrecordLinkage%C2%BB",
        },
        {
            "name": "Package dedupe (Python)",
            "abstract": "Appariement de données individuelles en Python avec le package dedupe",
            "authors": ["Lucas Malherbe"],
            "contributors": ["Lucas Malherbe"],
            "types": ["Notebook Python"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": pythonImgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB&init.personalInitArgs=%C2%ABdedupe%C2%BB",
        },
        {
            "name": "Package reclin2 (R)",
            "abstract": "Appariement de données individuelles en R avec le package reclin2",
            "authors": ["Lucas Malherbe"],
            "contributors": ["Lucas Malherbe"],
            "types": ["Notebook R"],
            "tags": ["discover", "learn"],
            "category": "training courses in data science",
            "imageUrl": rSvgUrl,
            "deploymentUrl":
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-r?autoLaunch=true&init.personalInitArgs=%C2%ABreclin2%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fappariement%2Fmain%2Finit.sh%C2%BB",
        },
    ],
  },
];
