import type { EducationalResource } from "./_index";
import python_jpg_url from "./_assets/python.jpg";

export const introduction_to_python: EducationalResource.Collection = {
    name: {
        fr: "Initiation à Python",
        en: "Introduction to Python",
    },
    abstract: {
        fr: "Cours introductif à Python : fondamentaux du langage et premières manipulations de données",
        en: "Introductory course to Python: language fundamentals and initial data manipulations",
    },
    imageUrl: python_jpg_url,
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
            authors: ["inseefrlab", "Romain Avouac"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: python_jpg_url,
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
            authors: ["inseefrlab", "Romain Avouac"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
            authors: ["inseefrlab", "Romain Avouac"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
            authors: ["inseefrlab", "Romain Avouac"],
            tags: ["discover", "learn", "Notebook", "Python", "Data Science Training"],
            imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Romain Avouac"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
                    authors: ["inseefrlab", "Thomas Faria"],
                    tags: [
                        "discover",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
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
};
