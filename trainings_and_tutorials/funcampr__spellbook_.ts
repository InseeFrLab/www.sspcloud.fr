import type { EducationalResourceDirectory } from "./__index";
import gameController_png_url from "./_assets/gameController.png";
import grimoire01_png_url from "./_assets/grimoire01.png";
import grimoire02_png_url from "./_assets/grimoire02.png";
import grimoire03_png_url from "./_assets/grimoire03.png";
import grimoire04_png_url from "./_assets/grimoire04.png";
import grimoire05_png_url from "./_assets/grimoire05.png";
import grimoire06_png_url from "./_assets/grimoire06.png";
import grimoire07_png_url from "./_assets/grimoire07.png";
import grimoire08_png_url from "./_assets/grimoire08.png";
import grimoire09_png_url from "./_assets/grimoire09.png";
import grimoire10_png_url from "./_assets/grimoire10.png";
import grimoire11_png_url from "./_assets/grimoire11.png";
import grimoire12_png_url from "./_assets/grimoire12.png";
import grimoire13_png_url from "./_assets/grimoire13.png";
import neverending_png_url from "./_assets/neverending.png";
import grimoire14_png_url from "./_assets/grimoire14.png";

export const funcampr__spellbook_: EducationalResourceDirectory = {
    name: {
        fr: "FuncampR - Grimoire (FR)",
        en: "FuncampR - Spellbook (EN - WIP)",
    },
    abstract: {
        fr: "Une aventure d'apprentissage vidéoludique pour le langage statistique R, à partager au sein du SSP (et du royaume de Statis). Pour en savoir plus, consulter le site https://funcamp.sspcloud.fr/",
        en: "A serious game to learn statistical language R, dedicated to beginners - and gamers :-p. For more information, see https://funcamp.sspcloud.fr/",
    },
    imageUrl: gameController_png_url,
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
            imageUrl: gameController_png_url,
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
            imageUrl: grimoire01_png_url,
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
            imageUrl: grimoire02_png_url,
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
            imageUrl: grimoire03_png_url,
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
            imageUrl: grimoire04_png_url,
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
            imageUrl: grimoire05_png_url,
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
            imageUrl: grimoire06_png_url,
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
            imageUrl: grimoire07_png_url,
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
            imageUrl: grimoire08_png_url,
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
            imageUrl: grimoire09_png_url,
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
            imageUrl: grimoire10_png_url,
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
            imageUrl: grimoire11_png_url,
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
            imageUrl: grimoire12_png_url,
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
            imageUrl: grimoire13_png_url,
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
            imageUrl: neverending_png_url,
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
            imageUrl: grimoire14_png_url,
            deploymentUrl: {
                fr: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapitre14»&name=Grimoire-ChapBonus",
                en: "https://datalab.sspcloud.fr/launcher/inseefrlab-helm-charts-trainings/grimoire?autoLaunch=true&grimoire.chapitre=«chapter14»&grimoire.quete=«Spellbook_IGoR»&name=Spellbook-ChapBonus",
            },
        },
    ],
};
