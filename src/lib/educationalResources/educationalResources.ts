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

export type EducationalResourceCategory =
    | "training courses with R"
    | "training courses with python"
    | "trainings of data science"
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
            "fr": "FuncampR - Grimoire (FR)",
            "en": "FuncampR - Spellbook (EN - WIP)",
        },
        "abstract": {
            "fr": "Une aventure d'apprentissage vid??oludique pour le langage statistique R, ?? partager au sein du SSP (et du royaume de Statis). Pour en savoir plus, consulter le site https://funcamp.sspcloud.fr/",
            "en": "A serious game to learn statistical language R, dedicated to beginners - and gamers :-p. For more information, see https://funcamp.sspcloud.fr/",
        },
        "imageUrl": gameControllerImgUrl,
        "parts": [
            {
                "name": "icaRius",
                "abstract": {
                    "fr": "La partie vid??oludique du FuncampR. Jeux de r??le inspir?? d'un c??l??bre jeu vid??o des ann??es 1990...",
                    "en": "The video game part of FuncampR. A RPG inspired by a famous video game from the 1990s ...",
                },
                "authors": [
                    "A. Degorre",
                    {
                        "fr": "communaut?? Solarus",
                        "en": "Solarus Community",
                    },
                ],
                "contributors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                    {
                        "fr": "communaut?? Solarus",
                        "en": "Solarus Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Jeu vid??o",
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
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 1 : la maison d???icaRius. D??couverture du grimoire IgoR et de la langue des Runes",
                    "en": "Educational part of FuncampR. Chapter 1: icaRius' home. Discovery of the IgoR Spellbook and the Runes' language",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["discover"],
                "category": "training courses with R",
                "imageUrl": grimoire01ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre1??&onyxia.friendlyName=??Grimoire-Chap1??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter1??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=Spellbook-Chap1??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 2",
                    "en": "IgoR Spellbook - Chapter 2",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 2 : la poule pondeuse. Dans le village de Kokoro, icaRius aide la fermi??re ?? recomposer le livre des pontes...",
                    "en": "FuncampR educational part. Chapter 2: the laying hen. In the village of Kokoro, icaRius helps the farmer to recompose the egg-laying book...",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire02ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre2??&onyxia.friendlyName=??Grimoire-Chap2??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter2??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap2??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 3",
                    "en": "IgoR Spellbook - Chapter 3",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 3 :  le village de GrissGrass. Le chef du village demande ?? icaRius de trouver quelle est l???exploitation la plus productive en herbe de Mandragore.",
                    "en": "FuncampR educational part. Chapter 3: the village of GrissGrass. The village chief asks icaRius to find the most productive Mandrake farm.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire03ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre3??&onyxia.friendlyName=??Grimoire-Chap3??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter3??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap3??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 4",
                    "en": "IgoR Spellbook - Chapter 4",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 4 :  le secret de la culture de Mandragore. IcaRius doit retrouver la recette de la culture de la Mandragore.",
                    "en": "FuncampR educational part. Chapter 4: The Secret of Mandrake Culture. IcaRius must find the recipe for the culture of the Mandrake.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire04ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre4??&onyxia.friendlyName=??Grimoire-Chap4??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter4??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap4??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 5",
                    "en": "IgoR Spellbook - Chapter 5",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 5 :  le cuistot Batreb. Pour lib??rer Essesp??us dans le ch??teau de Statis, icaRius doit d???abord obtenir la confiance du cuistot Batreb.",
                    "en": "FuncampR educational part. Chapter 5: the cook Batreb. To free Essespeus in Statis Castle, icaRius must first gain the trust of cook Batreb.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire05ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre5??&onyxia.friendlyName=??Grimoire-Chap5??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter5??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap5??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 6",
                    "en": "IgoR Spellbook - Chapter 6",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 6 : la fake news. Essesp??us et icaRius vont cr??er une Fake News pour tromper les arm??es de SaSSoS.",
                    "en": "FuncampR educational part. Chapter 6: fake news. Essesp??us and icaRius create a Fake News to deceive the armies of SaSSoS.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire06ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre6??&onyxia.friendlyName=??Grimoire-Chap6??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter6??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap6??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 7",
                    "en": "IgoR Spellbook - Chapter 7",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 7 (optionnel): le labyrinthe. Le Mage Delagarde propose ?? icaRius un d??fi pour obtenir les bonnes directions dans le labyrinthe.",
                    "en": "FuncampR educational part. Chapter 7 (optional): the labyrinth. Mage Delagarde offers icaRius a challenge to get the right directions in the labyrinth.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire07ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre7??&onyxia.friendlyName=??Grimoire-Chap7??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter7??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap7??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 8",
                    "en": "IgoR Spellbook - Chapter 8",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 8: la plume d???IgoR. Pour soulever la pierre qui bloque le passage, icaRius doit apprendre de nouveaux sortil??ges.",
                    "en": "FuncampR educational part. Chapter 8: IgoR's Feather. To lift the stone blocking the passage, icaRius must learn new spells.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire08ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre8??&onyxia.friendlyName=??Grimoire-Chap8??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter8??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap8??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 9",
                    "en": "IgoR Spellbook - Chapter 9",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 9: le village de Sandia. Mam???Grouxi narre les innombrables naissances qu???elle a vu au fil des ans (des si??cles?).",
                    "en": "FuncampR educational part. Chapter 9: the village of Sandia. Mam???Grouxi recounts the countless births she has seen over the years.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire09ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre9??&onyxia.friendlyName=??Grimoire-Chap9??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter9??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap9??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 10",
                    "en": "IgoR Spellbook - Chapter 10",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 10: La porte de sortie - Save Me. Dans ses p??r??grinations, icaRius se trouve pris au pi??ge dans une salle de l'impossible",
                    "en": "FuncampR educational part. Chapter 10: Exit Door - Save Me. In his wanderings, icaRius finds himself trapped in an Impossible Room.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire10ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre10??&onyxia.friendlyName=??Grimoire-Chap10??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter10??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap10??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 11",
                    "en": "IgoR Spellbook - Chapter 11",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 11: Codez-le une fois. L'automate TeoC enseigne ?? icaRius la Voie du Reproductible",
                    "en": "FuncampR educational part. Chapter 11: Code It Once. The TeoC automaton teaches icaRius the Way of the Reproducible.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire11ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre11??&onyxia.friendlyName=??Grimoire-Chap11??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter11??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap11??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 12",
                    "en": "IgoR Spellbook - Chapter 12",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 12: De l???oxyg??ne documentaire. Rencontre d'un dr??le d???oiseau, FebeleR, f??ru de litt??rature statisienne et de grimoires...",
                    "en": "FuncampR educational part. Chapter 12: Breathe and document. Meeting with a strange bird, FebeleR, fond of Statisian literature and grimoires ...",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire12ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapitre12??&onyxia.friendlyName=??Grimoire-Chap12??",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=??chapter12??&grimoire.quete=??Spellbook_IGoR??&onyxia.friendlyName=??Spellbook-Chap12??",
                },
            },
            {
                "name": {
                    "fr": "Grimoire IgoR - Chapitre 13",
                    "en": "IgoR Spellbook - Chapter 13",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Chapitre 13: l'histoire sans fin. La gueRnouille Asa apprend ?? icaRius ?? ??crire lui-m??me la fin de l'histoire",
                    "en": "FuncampR educational part. Chapter 13: The NeveRending Story. Asa fRog teaches icaRius to write himself the end of the story",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel R",
                        "en": "R Tutorial",
                    },
                ],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": grimoire13ImgUrl,
                "deploymentUrl": {
                    "fr": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapitre13&onyxia.friendlyName=Grimoire-Chap13",
                    "en": "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=chapter13&grimoire.quete=Spellbook_IGoR&onyxia.friendlyName=Spellbook-Chap13",
                },
            },
            {
                "name": {
                    "fr": "Grimoire - Neverending",
                    "en": "Spellbook - Neverending",
                },
                "abstract": {
                    "fr": "Partie p??dagogique du FuncampR. Le parchemin pour ??crire soi-m??me le chapitre 13 et la fin de l'histoire d'icaRius.",
                    "en": "FuncampR educational part. The scroll on which icaRius writes chapter 13 and the end of the  story.",
                },
                "authors": [
                    {
                        "fr": "Communaut?? FuncampR",
                        "en": "FuncampR Community",
                    },
                ],
                "types": [
                    {
                        "fr": "Tutoriel Rstudio",
                        "en": "Rstudio Tutorial",
                    },
                ],
                "tags": ["discover", "learn"],
                "category": "training courses with R",
                "imageUrl": neverendingImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/neverending?onyxia.friendlyName=neveRending",
            },
        ],
    },
    {
        "name": "Parcours R",
        "abstract": "Parcours de formation ?? R du p??le minist??riel MTES-MCTRCT",
        "imageUrl": rSvgUrl,
        "parts": [
            {
                "name": "1. D??couvrir R et RStudio",
                "abstract":
                    "D??couvrir le fonctionnement de R, Aborder la dimension modulaire du logiciel, S???approprier l???interface graphique du logiciel, ??tre en capacit?? d???importer dans R un fichier CSV et de r??aliser des calculs statistiques simples (somme, moyenne, table des fr??quences)",
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
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M1%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_introduction-4.0.4%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_script_formation.sh%C2%BB",
                "articleUrl": "https://mtes-mct.github.io/parcours_r_socle_introduction/",
            },
            {
                "name": "2. Pr??parer ses donn??es avec R et le Tidyverse",
                "abstract":
                    "??tre en capacit?? d???explorer les donn??es, de les comprendre, de les structurer, de les croiser et les enrichir avec des donn??es externes pour les pr??parer ?? des traitements statistiques. La pr??paration des donn??es est une ??tape fondamentale pour faciliter la r??alisation des analyses statistiques",
                "authors": ["Ma??l Theuli??re", "Bruno Terseur"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": coverImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M2%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_socle_preparation_des_donnees-4.0.4%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_socle_preparation_des_donnees/",
            },
            {
                "name": "3. Statistiques descriptives avec R",
                "abstract":
                    "Rappels th??oriques sur les m??thodes usuelles de statistiques uni- et bi-vari??es, mise en ??uvre avec R, interpr??tation",
                "authors": ["Sol??ne Colin", "Vivien Roussez", "Pascal Irz"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "training courses with R",
                "imageUrl": pollinisateurImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M3%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_statistiques_descriptives-4.0.4%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_statistiques_descriptives/",
            },
            {
                "name": "4. Analyse des donn??es multi-dimensionnelles avec R",
                "abstract":
                    "M??thodologie pour ??valuer, en fonction des caract??ristiques des donn??es, la pertinence des m??thodes usuelles d'analyse multidimensionnelle (ACP, AFC, ACM, CAH). Mise en ??uvre avec le package factoMiner. Sorties graphiques avec le package factoextra. Interpr??tation",
                "authors": ["Vivien Roussez", "Pascal Irz"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses with R",
                "imageUrl": crabeImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M4%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_multi_dimensionnelles-4.0.4%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_analyse_multi_dimensionnelles/",
            },
            {
                "name": "5. Valoriser ses donn??es avec R",
                "abstract":
                    "Utiliser les outils R pour produire des graphiques avec le package ggplot2. Produire des cartes en utilisant ggplot2 et sf. Produire des tableaux interactifs. Rendre interactifs des graphiques et des cartes",
                "authors": ["Murielle Lethrosne", "Ma??l Theuli??re"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses with R",
                "imageUrl": renardImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M5%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_datavisualisation-4.0.4%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_datavisualisation/",
            },
            {
                "name": "7. Analyse spatiale",
                "abstract":
                    "Introduction aux donn??es spatiales, lire et ??crire des donn??es spatiales, manipuler des donn??s spatiales, cr??er des cartes.",
                "authors": ["Murielle Lethrosne", "Ma??l Theuli??re"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "training courses with R",
                "imageUrl": odonateImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%ABParcoursR_M7%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABghcr.io%2Fmtes-mct%2Fparcours_r_module_analyse_spatiale-4.0.4%C2%BB&security.allowlist.enabled=false&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FMTES-MCT%2Fparcours-r%2Fmaster%2Finit_script_formation.sh%C2%BB",
                "articleUrl":
                    "https://mtes-mct.github.io/parcours_r_module_analyse_spatiale/",
            },
        ],
    },
    {
        "name": "Initiation ?? Python",
        "abstract":
            "Cours introductif ?? Python : fondamentaux du langage et premi??res manipulations de donn??es",
        "authors": ["inseefrlab"],
        "contributors": ["Romain Avouac"],
        "types": ["Notebook Python"],
        "tags": ["discover", "learn"],
        "category": "training courses with python",
        "imageUrl":
            pythonImgUrl,
        "parts": [
            {
                "name": "Introduction",
                "abstract":
                    'Introduction de l\'auto-formation "Initiation ?? Python" du SSP Cloud',
                "authors": ["inseefrlab"],
                "contributors": ["Romain Avouac"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [],
            },
            {
                "name": "Fondamentaux du langage",
                "abstract": "Pr??sentation de la syntaxe et des objets de base en Python",
                "authors": ["inseefrlab"],
                "contributors": ["Romain Avouac"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [
                    {
                        "name": "Types de base et variables",
                        "abstract":
                            "D??couverte des types de base (nombres et cha??nes de caract??res) et des variables.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20types-variables%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Structures de donn??es 1 : listes et tuples",
                        "abstract":
                            "D??couverte des structures de donn??es s??quentielles : listes et tuples.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20data-structures1%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Structures de donn??es 2 : dictionnaires et sets",
                        "abstract":
                            "D??couverte des structures de donn??es non-ordonn??es : dictionnaires et sets.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20data-structures2%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Tests",
                        "abstract":
                            "D??couverte des tests et des structures conditionnelles, qui permettent ?? un programme de prendre des d??cisions de mani??re automatis??e.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20tests%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Boucles",
                        "abstract":
                            "Automatisation d'op??rations r??p??titives ?? l'aide des boucles for et des boucles while.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20loops%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Fonctions",
                        "abstract":
                            "Rendre son code mieux structur?? et plus lisible avec les fonctions.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20functions%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Notions de programmation orient??e objet",
                        "abstract":
                            "Un rapide tour dans le monde des objets, leurs attributs et leurs m??thodes",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABfundamentals%20oop%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                "name": "Manipulation de donn??es",
                "abstract": "Exploration, manipulation et visualisation de donn??es",
                "authors": ["inseefrlab"],
                "contributors": ["Romain Avouac"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [
                    {
                        "name": "Manipulation de fichiers",
                        "abstract":
                            "Manipulation de fichiers externes : import de modules et lecture/??criture de fichiers texte.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%20modules-files%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Travailler avec des fichiers CSV et JSON",
                        "abstract":
                            "Manipulation des fichiers CSV et JSON, deux types de fichiers tr??s utilis??s pour la diffusion de donn??es.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%20csv-json-files%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Calcul num??rique avec NumPy",
                        "abstract":
                            "Manipulation des arrays et des fonctions de NumPy, la librairie de r??f??rence pour le calcul num??rique.",
                        "authors": ["inseefrlab"],
                        "contributors": ["Romain Avouac"],
                        "types": ["Notebook Python"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-initiation%C2%BB&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/InseeFrLab/formation-python-initiation/main/utils/init-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%20numpy%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                "name": "Mener un projet statistique avec Python",
                "abstract":
                    "Bonnes pratiques pour mener des projets statistiques avec Python",
                "authors": ["inseefrlab"],
                "contributors": ["Romain Avouac"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [],
            },
            {
                "name": "Projet final",
                "abstract":
                    'Projet final validant l\'auto-formation "Initiation ?? Python" du SSP Cloud',
                "authors": ["inseefrlab"],
                "contributors": ["Romain Avouac"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [],
            },
        ],
    },
    {
        "name": "Python pour la data science",
        "abstract":
            "Approfondissement de Python pour la data science : manipulation de donn??es, visualisation, mod??lisation, traitement du langage naturel",
        "authors": ["Lino Galiana"],
        "types": ["Notebook Python"],
        "tags": ["consolidate", "learn"],
        "category": "training courses with python",
        "imageUrl":
            pythonImgUrl,
        "parts": [
            {
                "name": "Manipulation de donn??es",
                "abstract": "Manipulation et r??cup??ration automatis??e de donn??es",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["consolidate", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [
                    {
                        "name": "Retour sur numpy",
                        "abstract":
                            "numpy constitue la brique de base de l'??cosyst??me de la data-science en\nPython. Toutes les librairies de manipulation de donn??es, de mod??lisation\net de visualisation reposent, de mani??re plus ou moins directe, sur numpy.\nIl est donc indispensable d'avoir quelques notions sur ce package avant\nd'aller plus loin.\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2001_numpy.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Introduction ?? pandas",
                        "abstract":
                            "pandas est l'??l??ment central de l'??cosyst??me Python pour la data-science. \nLe succ??s de Python tient beaucoup ?? pandas qui a permis d'importer la\nlogique SQL dans le langage Python. pandas embarque ??norm??ment de\nfonctionalit??s qui permettent d'avoir des pipelines efficaces pour\ntraiter des donn??es de volum??trie moyenne (jusqu'?? quelques Gigas). Au-del??\nde cette volum??trie, il faudra se tourner vers d'autres solutions\n(PostgresQL, Dask, Spark...).\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002a_pandas_tutorial.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Pratique de pandas: un exemple complet",
                        "abstract":
                            "Apr??s avoir pr??sent?? la logique de pandas dans le chapitre pr??c??dent, \nce chapitre vise ?? illustrer les fonctionalit??s du package \n?? partir de donn??es d'??missions de gaz ?? effet de serre\nde l'Ademe. \n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2002b_pandas_TP.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Donn??es spatiales: d??couverte de geopandas",
                        "abstract":
                            "Les donn??es g??olocalis??es se sont multipli??es depuis quelques ann??es, qu'il\ns'agisse de donn??es open-data ou de traces num??riques g??olocalis??es de\ntype big-data. Pour les donn??es spatiales, le package geopandas\n??tend les fonctionalit??s de l'??cosyst??me pandas afin de permettre\nde manipuler des donn??es g??ographiques complexe de mani??re simple.\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2003_geopandas_tutorial.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Webscraping avec python",
                        "abstract":
                            'Python permet de facilement r??cup??rer une page web pour en extraire des\ndonn??es ?? restructurer. Le webscraping, que les Canadiens nomment\n"moissonnage du web", est une mani??re de plus en plus utilis??e de\nr??cup??rer des donn??es en temps r??el. \n',
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004a_webscraping_TP.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Requ??ter via des API avec Python",
                        "abstract":
                            "Les API (Application Programming Interface) sont un mode d'acc??s aux\ndonn??es en expansion. Gr??ce aux API, l'automatisation de scripts\nest facilit??e puisqu'il n'est plus n??cessaire de stocker un fichier,\net g??rer ses diff??rentes versions, mais uniquement de requ??ter une base\net laisser au producteur de donn??es le soin de g??rer les mises ?? jour de\nla base. \n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2004c_API_TP.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                "name": "Visualisation de donn??es",
                "abstract": "Graphiques, cartes, et visualisations interactives",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["consolidate", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [
                    {
                        "name": "De beaux graphiques avec python: mise en pratique",
                        "abstract":
                            "Une d??couverte des fonctionalit??s graphiques de matplotlib,\nseaborn et plotly pour repr??senter des statistiques\nsur les d??comptes de v??lo ?? Paris\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20matplotlib.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "De belles cartes avec python: mise en pratique",
                        "abstract":
                            "Une d??couverte de la cartographie, ?? travers\ngeopandas, geoplot et folium\npour visualiser la fr??quentation par les\nv??los des routes parisiennes\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20maps.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                "name": "Mod??lisation",
                "abstract":
                    "Preprocessing, apprentissage supervis?? et non supervis??, ??valuation de mod??les",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["consolidate", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [
                    {
                        "name": "Pr??paration des donn??es pour construire un mod??le",
                        "abstract":
                            "Afin d'avoir des donn??es coh??rentes avec les hypoth??ses de mod??lisation,\nil est absolument fondamental de prendre le temps de\npr??parer les donn??es ?? fournir ?? un mod??le. La qualit?? de la pr??diction\nd??pend fortement de ce travail pr??alable de preprocessing.\nBeaucoup de m??thodes sont disponibles dans scikit, ce qui rend ce travail\nmoins fastidieux. \n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%200_preprocessing.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Evaluer la qualit?? d'un mod??le",
                        "abstract":
                            "Faire preuve de m??thode pour ??valuer la qualit?? d'un mod??le \npermet de proposer des pr??dictions plus robustes, ayant\nde meilleures performances out-of-sample. D??composer\nl'??chantillon initial en sous-??chantillons d'entra??nement\net de tests, faire de la validation crois??e, utiliser\nles bonnes mesures de performances \npeut se faire, gr??ce ?? scikit, de mani??re relativement standardis??e\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%201_modelevaluation.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Classification: premier mod??le avec les SVM",
                        "abstract":
                            "La classification permet d'attribuer une classe d'appartenance (label)\ndiscr??te ?? des donn??es ?? partir de certaines variables explicatives\n(features). Les algorithmes sont nombreux. L'un des plus intuitifs et\nles plus fr??quemment rencontr??s est le SVM (*support vector machine*).\nCe chapitre illustre les enjeux de la classification ?? partir de\nce mod??le.\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%202_SVM.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "R??gression: une introduction",
                        "abstract":
                            "La r??gression lin??aire est la premi??re mod??lisation statistique\nqu'on d??couvre dans un cursus quantitatif. Il s'agit en effet d'une\nm??thode tr??s intuitive et tr??s riche. Le Machine Learning permet de\nl'appr??hender d'une autre mani??re que l'??conom??trie. Avec scikit et\nstatsmodels, on dispose de tous les outils pour satisfaire ?? la fois\ndata scientists et ??conomistes. \n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%203_regression.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "S??lection de variables : une introduction",
                        "abstract":
                            "L'acc??s ?? des bases de donn??es de plus en plus riches permet\ndes mod??lisations de plus en plus raffin??es. Cependant,\nles mod??les parcimonieux sont g??n??ralement pr??f??rables\naux mod??les extr??mement riches pour obtenir de bonnes\nperformances out-of-sample. Les m??thodes de s??lection de variables,\nnotamment le LASSO, permettent de s??lectionner le signal le plus\npertinent dilu?? dans une information riche. \n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%204_featureselection.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Clustering",
                        "abstract":
                            "Le clustering consiste ?? r??partir des observations dans des groupes,\ng??n??ralement non observ??s,\nen fonction de caract??ristiques observables. Il s'agit d'une\napplication classique des m??thodes non supervis??es. Les applications\nau monde r??el sont nombreuses, notamment dans le domaine de la\nsegmentation tarifaire.\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%205_clustering.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Premier pas vers l'industrialisation avec les pipelines scikit",
                        "abstract":
                            "Les pipelines scikit permettent d'int??grer de mani??re tr??s flexible\nun ensemble d'op??rations de pre-processing et d'entra??nement de mod??les\ndans une cha??ne d'op??rations. Il s'agit d'une approche particuli??rement\nappropri??e pour r??duire la difficult?? ?? changer d'algorithme ou pour\nfaciliter la r??-application d'un code ?? de nouvelles donn??es\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%206_pipeline.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
            {
                "name": "Traitement du langage naturel",
                "abstract": "Analyse et mod??lisation des donn??es textuelles",
                "authors": ["Lino Galiana"],
                "types": ["Notebook Python"],
                "tags": ["consolidate", "learn"],
                "category": "training courses with python",
                "imageUrl":
                    pythonImgUrl,
                "parts": [
                    {
                        "name": "Quelques ??l??ments pour comprendre les enjeux",
                        "abstract":
                            "Les corpus textuels ??tant des objets de tr??s grande dimension\no?? le ratio signal/bruit est faible, il est n??cessaire de mettre\nen oeuvre une s??rie d'??tapes de nettoyage de texte. Ce chapitre va\nexplorer quelques m??thodes classiques de nettoyage en s'appuyant\nsur le Comte de Monte Cristo. \n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2001_intro.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Nettoyer un texte: approche bag-of-words (exercices)",
                        "abstract":
                            "Ce chapitre continue de pr??senter l'approche de data-cleaning\ndu NLP en s'appuyant sur le corpus de trois auteurs\nanglo-saxons : Mary Shelley, Edgar Allan Poe, H.P. Lovecraft.\nDans cette s??rie d'exercice nous mettons en oeuvre de mani??re\nplus approfondie les diff??rentes m??thodes pr??sent??es\npr??cedemment\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2002_exoclean.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Latent Dirichlet Allocation (LDA)",
                        "abstract":
                            "Le mod??le Latent Dirichlet Allocation (LDA) est un mod??le probabiliste g??n??ratif qui permet\nde d??crire des collections de documents de texte ou d???autres types de donn??es discr??tes. LDA fait\npartie d???une cat??gorie de mod??les appel??s ???topic models???, qui cherchent ?? d??couvrir des structures\nth??matiques cach??es dans des vastes archives de documents.\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2003_lda.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "M??thodes de vectorisation : comptages et word embeddings",
                        "abstract":
                            "Pour pouvoir utiliser des donn??es textuelles dans des algorithmes\nde machine learning, il faut les vectoriser, c'est ?? dire transformer\nle texte en donn??es num??riques. Dans ce TP, nous allons comparer\ndiff??rentes m??thodes de vectorisation, ?? travers une t??che de pr??diction :\npeut-on pr??dire un auteur litt??raire ?? partir d'extraits de ses textes ?\nParmi ces m??thodes, on va notamment explorer le mod??le Word2Vec, qui\npermet d'exploiter les structures latentes d'un texte en construisant\ndes word embeddings (plongements de mots).\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2004_word2vec.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                    {
                        "name": "Exercices suppl??mentaires",
                        "abstract":
                            "Des exercices suppl??mentaires pour pratiquer les concepts du NLP\n",
                        "authors": ["Lino Galiana"],
                        "types": ["Notebook Python"],
                        "tags": ["consolidate", "learn"],
                        "category": "training courses with python",
                        "imageUrl":
                            pythonImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABpython-datascience%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2005_exo_supp.ipynb%C2%BB&security.allowlist.enabled=false",
                    },
                ],
            },
        ],
    },
    {
        "name": "Initiation ?? Spark",
        "abstract":
            "Parcours de formation au calcul distribu?? avec Spark pour du traitement de donn??es ?? grande ??chelle.",
        "imageUrl": sparkImgUrl,
        "parts": [
            {
                "name": "1. Introduction ?? Spark",
                "abstract": "Bases d'architecture et premiers exemples",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "trainings of data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh&vault.secret=??diffusion/spark-lab/1-introduction??&vault.directory=??tm8enk??&onyxia.friendlyName=??1_Intro_spark??",
            },
            {
                "name": "2. Datalake S3",
                "abstract":
                    "Faire du spark avec comme source et destination un syst??me de fichier hadoop compatible : S3",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": minioImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/2-datalake??&vault.directory=??tm8enk&onyxia.friendlyName=??2_Datalake??",
            },
            {
                "name": "2.2 Donn??es chiffr??es sur S3",
                "abstract":
                    "Utiliser une donn??e chiffr??e sur S3, d??finir vos propres cl??s de chiffrement avec les cl??s de chiffrement fournies par Vault (SSE-C).",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": vaultSvgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/2b-vault-s3-sseC??&vault.directory=??tm8enk??&onyxia.friendlyName=??2b_vault-s3-sseC??",
            },
            {
                "name": "3. Spark et Kubernetes",
                "abstract":
                    "Faire du Spark avec un cluster Spark sur Kubernetes et notion de lazy evaluation, transformation et action",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": kubImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/3-spark-kubernetes??&vault.directory=??tm8enk??&onyxia.friendlyName=??3_Spark_Kubernetes??",
            },
            {
                "name": "3.2 Allocation Dynamique Kubernetes",
                "abstract":
                    "Faire du spark avec un nombre d'executeur variable en fonction de votre besoin",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": kubImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/3b-dynamic-allocation??&vault.directory=??tm8enk??&onyxia.friendlyName=??3_Dynamic_allocation??",
            },
            {
                "name": "4. Le format de donn??es parquet",
                "abstract": "Notion de partitions et format parquet",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/4-format-parquet??&vault.directory=??tm8enk??&onyxia.friendlyName=??4_format_parquet??",
            },
            {
                "name": "5. Hive-metastore et metadonn??es",
                "abstract": "Metadonn??es des tables d'un datalake",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": hiveSvgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/5-hive-metastore??&vault.directory=??tm8enk??&onyxia.friendlyName=??5_hive_metastore??",
            },
            {
                "name": "6. Spark-thrift et redash",
                "abstract":
                    "Et si on faisait simplement du SQL en externalisant le driver spark et un outil de visualisation : redash",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": redashSvgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/6-spark-thrift-server??&vault.directory=??tm8enk??&onyxia.friendlyName=??6_spark_thrift_server??",
            },
            {
                "name": "7. Spark streaming",
                "abstract":
                    "Analyse de tweets. Notions de batch, micro-batch, streaming tout d??pend de la v??locit?? recherch??e.",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/7-spark-streaming??&vault.directory=??tm8enk??&onyxia.friendlyName=??7_spark_streaming??",
            },
            {
                "name": "8. Spark Graphx",
                "abstract": "Analyse de tweets avec l'utilisation de graph Spark",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/8-spark-graphx??&vault.directory=??tm8enk??&onyxia.friendlyName=??8_spark_graphx??",
            },
            {
                "name": "9. Spark GPU",
                "abstract": "A la d??couverte des GPUs avec spark",
                "authors": ["Inseefrlab"],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": sparkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rapidsai?autoLaunch=true&spark.sparkui=true&kubernetes.role=??edit??&init.personalInit=??https://raw.githubusercontent.com/InseeFrLab/spark-formation/main/init-notebook.sh??&vault.secret=??diffusion/spark-lab/9-spark-gpu??&vault.directory=??tm8enk??&onyxia.friendlyName=??9_spark_gpu??",
            },
            {
                "name": "10. SparkR",
                "abstract": "R pour de gros volumes",
                "authors": ["Inseefrlab"],
                "types": ["Tutoriel R"],
                "tags": ["consolidate"],
                "category": "trainings of data science",
                "imageUrl": sparkImgUrl,
                "articleUrl":
                    "https://minio.lab.sspcloud.fr/projet-spark-lab/SparkR.html",
            },
        ],
    },
    {
        "name": "Analyse Textuelle",
        "abstract": "Initiation ?? l'analyse textuelle",
        "authors": ["SSPLAB"],
        "contributors": [
            "St??phanie Himpens, Milena Suarez Castillo, St??phanie Combes, Benjamin Sakarovitch",
        ],
        "imageUrl": bookImgUrl,
        "parts": [
            {
                "name": "Analyse d'article avec R",
                "abstract":
                    "Analyser un corpus d'articles du journal Le Monde. Pr??traiter (nettoyer, normaliser) les donn??es afin de pouvoir en extraire de l'information, description du vocabulaire, identifier des th??mes ou la polarit?? du texte (n??gatif, positif)",
                "authors": ["SSPLAB"],
                "contributors": [
                    "St??phanie Himpens, Milena Suarez Castillo, St??phanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Tutoriel R"],
                "tags": ["discover", "learn"],
                "category": "trainings of data science",
                "imageUrl": bookImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=??https://git.lab.sspcloud.fr/ssplab/formation_text_mining_public/-/raw/master/installR.sh??&onyxia.friendlyName=??Text_Mining_R??",
            },
            {
                "name": "Analyse d'article avec Python",
                "abstract":
                    "Analyser un corpus d'articles du journal Le Monde. Pr??traiter (nettoyer, normaliser) les donn??es afin de pouvoir en extraire de l'information, description du vocabulaire, identifier des th??mes ou la polarit?? du texte (n??gatif, positif)",
                "authors": ["SSPLAB"],
                "contributors": [
                    "St??phanie Himpens, Milena Suarez Castillo, St??phanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "trainings of data science",
                "imageUrl": pythonImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&init.personalInit=??https://git.lab.sspcloud.fr/ssplab/formation_text_mining_public/-/raw/master/installPy.sh??&onyxia.friendlyName=??Text_Mining_Python??",
            },
            {
                "name": "Appariemment flou avec Elastic Search",
                "abstract":
                    "Calculer les calories d'une recette de cuisine en cherchant les produits dans Elastic",
                "authors": ["SSPLAB"],
                "contributors": [
                    "St??phanie Himpens, Milena Suarez Castillo, St??phanie Combes, Benjamin Sakarovitch",
                ],
                "types": ["Notebook Python"],
                "tags": ["learn", "consolidate"],
                "category": "trainings of data science",
                "imageUrl": elkImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&onyxia.friendlyName=%C2%ABFuzzyMatchElasticInitiation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fgit.lab.sspcloud.fr%2Fhby7ih%2Fhandsonelastic%2F-%2Fraw%2Fmaster%2Finit.sh%C2%BB&resources.requests.memory=%C2%AB10512Mi%C2%BB&security.allowlist.enabled=false&persistence.enabled=false&discovery.hive=false",
            },
        ],
    },
    {
        "name": "Carroyage et lissage spatial sur R",
        "abstract":
            "Apprendre ?? carroyer les informations, r??aliser des lissages spatiaux et calculer des indicateurs ?? partir des donn??es carroy??es sur R",
        "imageUrl": btbImgUrl,
        "parts": [
            {
                "name": "Introduction",
                "abstract":
                    "Pr??sentation g??n??rale de la formation et ressources additionnelles",
                "authors": ["Kim Antunez", "Julien Pramil"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "trainings of data science",
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
                "category": "trainings of data science",
                "imageUrl": btbImgUrl,
                "articleUrl":
                    "https://inseefrlab.github.io/formation-r-lissage-spatial/tuto.html",
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABinseefrlab%2Fformation-r-lissage-spatial%3Alatest%C2%BB",
            },
            {
                "name": "Exercices",
                "abstract":
                    "Mise en pratique des techniques pr??sent??es dans le tutoriel ?? partir de nouveaux jeux de donn??es",
                "authors": ["Kim Antunez", "Julien Pramil"],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "trainings of data science",
                "imageUrl": btbImgUrl,
                "articleUrl":
                    "https://inseefrlab.github.io/formation-r-lissage-spatial/exo.html",
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2FInseeFrLab%2Fformation-r-lissage-spatial%2Fmain%2Futils%2Finit.sh%C2%BB&service.image.custom.enabled=true&service.image.custom.version=%C2%ABinseefrlab%2Fformation-r-lissage-spatial%3Alatest%C2%BB",
            },
        ],
    },
    {
        "name": "Tutoriels ML",
        "abstract": "Tutoriels de Machine learning",
        "imageUrl": jupyterImgUrl,
        "parts": [
            {
                "name": "Random forest",
                "abstract": "Initiation au random forest sur les donn??es du Titanic",
                "authors": ["Alexis Dondon"],
                "types": ["Notebook Python"],
                "tags": ["discover", "learn"],
                "category": "trainings of data science",
                "imageUrl": jupyterImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/jupyter?autoLaunch=true&init.personalInit=https://git.lab.sspcloud.fr/alexisdondon/formation/-/raw/master/Titanic-randomForest.sh&onyxia.friendlyName=??Random_forest??",
            },
        ],
    },
    {
        "name": "Documentation UtilitR",
        "abstract":
            "Une documentation collaborative et open source sur R, destin??e en premier lieu aux agents de l???Insee.",
        "imageUrl": utilitrImgUrl,
        "parts": [
            {
                "name": "Comment utiliser la documentation utilitR",
                "abstract":
                    "Le projet utilitR vise ?? produire une documentation collaborative et open source sur R, destin??e en premier lieu aux agents de l???Insee. ",
                "authors": ["UtilitR"],
                "types": ["Tutoriel R"],
                "tags": ["discover"],
                "category": "training courses with R",
                "imageUrl": utilitrImgUrl,
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                "articleUrl": "https://www.book.utilitr.org/presentation-utilitr.html",
            },
            {
                "name": "Utiliser R ?? l???Insee",
                "abstract":
                    "Les environnement de r??f??rence de l???Insee pour r??aliser des t??ches de production statistique et des ??tudes avec R et RStudio.",
                "imageUrl": utilitrImgUrl,
                "parts": [
                    {
                        "name": "Utiliser RStudio sur l???environnement AUSv3",
                        "abstract":
                            "Les collections AUSv3 sont les environnements de r??f??rence pour r??aliser des t??ches de production statistique et des ??tudes avec R et RStudio ?? l???Insee.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/ausv3",
                    },
                    {
                        "name": "Utiliser RStudio sur l???environnement SSP Cloud",
                        "abstract":
                            "Utiliser R et RStudio sur le datalab du SSP Cloud pour mener des exp??rimentations sur donn??es ouvertes.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/sspcloud.html",
                    },
                    {
                        "name": "Configurer Git sur son poste de travail",
                        "abstract":
                            "Versionner son projet depuis son poste de travail en ayant recours ?? un d??p??t distant, disponible sur GitLab ou GitHub.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/git-config.html",
                    },
                    {
                        "name": "Personnaliser la configuration de R",
                        "abstract":
                            "D??finir certaines actions ou valeurs qui seront effectu??es automatiquement ?? l???ouverture d???une session R.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/personnaliser.html",
                    },
                    {
                        "name": " Superviser sa session R",
                        "abstract":
                            "Les bonnes pratiques pour faire un bon usage de ces ressources er ne pas g??ner le travail des autres applications ou utilisateurs.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/personnaliser.html",
                    },
                ],
            },
            {
                "name": "Mener un projet statistique avec R",
                "abstract":
                    "Mener des projets de traitement statistique reproductible, collaboratif et avec une bonne organisation du travail.",
                "imageUrl": utilitrImgUrl,
                "parts": [
                    {
                        "name": "Utiliser les projets RStudio",
                        "abstract":
                            "Rassembler tous les ??l??ments de contexte propres ?? un projet : espace de travail, historique de commandes, variables d???environnement, options de R, etc.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/rproject.html",
                    },
                    {
                        "name": "Utiliser Git avec RStudio",
                        "abstract":
                            "Collaborer, suivre les modifications et contr??ler les versions d???un projet RStudio.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/git.html",
                    },
                    {
                        "name": "Utiliser des packages R",
                        "abstract":
                            "Ajouter des fonctions d??velopp??es par des utilisateurs de R sous forme de package.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl":
                            "https://www.book.utilitr.org/utiliser-packages.html",
                    },
                    {
                        "name": "Comment choisir un package?",
                        "abstract":
                            "D??terminer si un package d??j?? existant r??pond ?? votre besoin et si vous pouvez l???utiliser.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/choisir-package.html",
                    },
                    {
                        "name": "G??rer les d??pendances",
                        "abstract":
                            "M??thodes pour d??clarer et g??rer les d??pendances avec R lorsqu???on partage ses programmes.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl":
                            "https://www.book.utilitr.org/gerer-dependances.html",
                    },
                    {
                        "name": "Se documenter sur R",
                        "abstract":
                            "Recommandations pour se retrouver dans la documentation luxuriante de R.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl":
                            "https://www.book.utilitr.org/se-documenter-sur-r.html",
                    },
                    {
                        "name": "R??soudre un probl??me avec R",
                        "abstract":
                            "Comment isoler le probl??me et comment demander de l???aide.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl":
                            "https://www.book.utilitr.org/r%C3%A9soudre-un-probl%C3%A8me-avec-r.html",
                    },
                ],
            },
            {
                "name": "Importer des donn??es avec R",
                "abstract": "Quelques techniques d???importation de donn??es dans R.",
                "imageUrl": utilitrImgUrl,
                "parts": [
                    {
                        "name": "Importer des fichiers plats",
                        "abstract":
                            "Importer dans R des donn??es stock??es sous forme de fichiers plats (formats .txt, .csv, .tsv).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["discover", "learn"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/importcsv.html",
                    },
                    {
                        "name": "Importer des tables SAS??",
                        "abstract":
                            "M??thodes d???importation dans R de donn??es stock??es sous forme de tables SAS.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/importsas.html",
                    },
                    {
                        "name": "Importer des fichiers issus de tableurs (Excel, Calc)",
                        "abstract":
                            "Importer dans R des donn??es issues de tableurs (extension type xls, xlsx ou ods).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/importxl.html",
                    },
                    {
                        "name": "Travailler avec des API",
                        "abstract": "Acc??der ?? des donn??es via une API.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/api.html",
                    },
                    {
                        "name": "Se connecter ?? une base de donn??es",
                        "abstract":
                            "Acc??der ?? des donn??es stock??es dans une base de donn??es (sous forme Oracle, PostgreSQL, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/bdd.html",
                    },
                ],
            },
            {
                "name": "Manipuler des donn??es avec R",
                "abstract":
                    "Manipuler des donn??es stuctur??es sous forme de data.frame.L???utilisateur souhaite manipuler des donn??es stuctur??es sous forme de data.frame.",
                "imageUrl": utilitrImgUrl,
                "parts": [
                    {
                        "name": "Manipuler des donn??es avec le tidyverse",
                        "abstract":
                            "Manipuler des donn??es stuctur??es sous forme de data.frame avec tidyverse.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/tidyverse.html",
                    },
                    {
                        "name": "Manipuler des donn??es avec data.table",
                        "abstract":
                            "Manipuler des donn??es stuctur??es sous forme de data.frame avec data.table.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/datatable.html",
                    },
                    {
                        "name": "Joindre des tables de donn??es",
                        "abstract":
                            "Apparier deux tables de donn??es selon une ou plusieurs variables de jointure.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/jointures.html",
                    },
                    {
                        "name": "Manipuler des donn??es textuelles",
                        "abstract":
                            "Manipuler du texte (rep??rer et extraire une cha??ne de caract??res, concat??ner, remplacer une cha??ne par une autre, modifier la casse, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/textdata.html",
                    },
                    {
                        "name": "Utiliser des donn??es d???enqu??tes",
                        "abstract":
                            "Exploiter des donn??es d???enqu??te pour calculer des indicateurs.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/surveydata.html",
                    },
                    {
                        "name": "Manipuler des donn??es spatiales",
                        "abstract":
                            "Traiter avec R des donn??es spatiales (donn??es g??olocalis??es, polygones, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/spatdata.html",
                    },
                    {
                        "name": "L???analyse de donn??es (ACP, ACM, ACF???)",
                        "abstract":
                            "M??thodes classiques d???analyse de donn??es (composantes principales, correspondances multiples, l???analyse factorielle des correspondance, etc.)",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/acp.html",
                    },
                ],
            },
            {
                "name": "Superviser sa session R",
                "abstract":
                    "Les bonnes pratiques pour faire un bon usage de ces ressources er ne pas g??ner le travail des autres applications ou utilisateurs.",
                "imageUrl": utilitrImgUrl,
                "parts": [
                    {
                        "name": "Faire des graphiques avec ggplot2",
                        "abstract":
                            "R??aliser des graphiques (nuages de points, histogrammes, densit??, etc.) et les personnaliser (l??gendes, titres, ??chelles, etc.).",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/ggplot2.html",
                    },
                    {
                        "name": "Produire des documents avec R Markdown",
                        "abstract":
                            "Produire avec R des documents contenant ?? la fois du texte, des extraits de code R et les r??sultats de l???ex??cution de programmes.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/rmarkdown.html",
                    },
                    {
                        "name": "Rapports automatis??s avec R Markdown",
                        "abstract":
                            "Produire un ou plusieurs rapports automatis??s, reproductibles, faciles ?? actualiser en cas de modification des donn??es et en faisant varier des param??tres.",
                        "authors": ["UtilitR"],
                        "types": ["Tutoriel R"],
                        "tags": ["learn", "consolidate"],
                        "category": "training courses with R",
                        "imageUrl": utilitrImgUrl,
                        "deploymentUrl":
                            "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true&onyxia.friendlyName=%C2%AButilitr%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fminio.lab.sspcloud.fr%2Fpierrelamarche%2Futilitr%2Finit_utilitr.sh%C2%BB&service.image.version=%C2%ABinseefrlab%2Futilitr%3A0.7.0%C2%BB&vault.secret=%C2%AButilitr%2Futilitr%C2%BB",
                        "articleUrl": "https://www.book.utilitr.org/rapports-auto.html",
                    },
                ],
            },
        ],
    },
    {
        "name": "Travail collaboratif avec Git et RStudio",
        "abstract":
            "Formation au travail collaboratif et au contr??le de version ?? l'aide des logiciels Git et RStudio",
        "imageUrl": gitImgUrl,
        "parts": [
            {
                "name": "Introduction",
                "abstract":
                    "Pr??sentation g??n??rale de la formation et ressources additionnelles",
                "authors": [
                    "Lino Galiana",
                    "Mathias Andr??",
                    "Romain Lesur",
                    "Annie Moineau",
                    "Olivier Meslin",
                ],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "best practices",
                "imageUrl": gitImgUrl,
                "articleUrl":
                    "https://collaboratif-git-formation-insee.netlify.index.html",
            },
            {
                "name": "Pourquoi utiliser le contr??le de version ?",
                "abstract":
                    "Pr??sentation des avantages individuels et collectifs ?? impl??menter le contr??le de version pour les projets de code",
                "authors": [
                    "Lino Galiana",
                    "Mathias Andr??",
                    "Romain Lesur",
                    "Annie Moineau",
                    "Olivier Meslin",
                ],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "best practices",
                "imageUrl": gitImgUrl,
                "articleUrl":
                    "https://collaboratif-git-formation-insee.netlify.pourquoi-utiliser-la-gestion-de-version.html",
            },
            {
                "name": "Utiliser Git avec RStudio",
                "abstract": "Configurer un projet Git avec RStudio",
                "authors": [
                    "Lino Galiana",
                    "Mathias Andr??",
                    "Romain Lesur",
                    "Annie Moineau",
                    "Olivier Meslin",
                ],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "best practices",
                "imageUrl": gitImgUrl,
                "articleUrl":
                    "https://collaboratif-git-formation-insee.netlify.configurer-un-projet-git-avec-rstudio.html",
                "deploymentUrl":
                    "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-datascience/rstudio?autoLaunch=true",
            },
            {
                "name": "Des bases de Git",
                "abstract": "Concepts essentiels de Git et exercices pratiques",
                "authors": [
                    "Lino Galiana",
                    "Mathias Andr??",
                    "Romain Lesur",
                    "Annie Moineau",
                    "Olivier Meslin",
                ],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "best practices",
                "imageUrl": gitImgUrl,
                "articleUrl":
                    "https://collaboratif-git-formation-insee.netlify.des-bases-de-git.html",
            },
            {
                "name": "GitLab",
                "abstract":
                    "Aper??u d'une des plateformes majeures de partage de code : GitLab",
                "authors": [
                    "Lino Galiana",
                    "Mathias Andr??",
                    "Romain Lesur",
                    "Annie Moineau",
                    "Olivier Meslin",
                ],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "best practices",
                "imageUrl": gitImgUrl,
                "articleUrl":
                    "https://collaboratif-git-formation-insee.netlify.gitlab.html",
            },
            {
                "name": "Organiser le travail collaboratif",
                "abstract":
                    "Collaborer efficacement ?? l'aide des branches et des merge requests",
                "authors": [
                    "Lino Galiana",
                    "Mathias Andr??",
                    "Romain Lesur",
                    "Annie Moineau",
                    "Olivier Meslin",
                ],
                "types": ["Tutoriel R"],
                "tags": ["learn"],
                "category": "best practices",
                "imageUrl": gitImgUrl,
                "articleUrl":
                    "https://collaboratif-git-formation-insee.netlify.orgagit.html",
            },
        ],
    },
];
