import type { EducationalResource } from "./-index";
import python_jpg_url from "./-assets/python.jpg";

export const python_pour_la_data_science: EducationalResource.Collection = {
    name: "Python pour la data science",
    abstract: {
        fr: "Approfondissement de Python pour la data science : manipulation de données, visualisation, modélisation, traitement du langage naturel",
        en: "Consolidating skills in Python for data science: data manipulation, visualization, modeling, natural language processing",
    },
    imageUrl: python_jpg_url,
    parts: [
        {
            name: "Introduction",
            abstract: {
                fr: "Cette introduction présente l'objectif du cours, les partis-pris pédagogiques, le fil conducteur de cet enseignement ainsi que les modalités pratiques de celui-ci. Elle propose aussi une introduction aux enjeux scientifiques et opérationnels de la _data science_.",
                en: "This introduction presents the course objective, pedagogical approach, the main theme of this of the course, as well as the practical practical details. It also provides an introduction to the scientific and operational challenges of data science.",
            },
            imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 15,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
                    timeRequiredInMinutes: 20,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 25,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 45,
                    imageUrl: python_jpg_url,
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
            imageUrl: python_jpg_url,
            parts: [
                {
                    name: {
                        fr: "Introduction",
                        en: "Introduction",
                    },
                    abstract: {
                        fr: "`Python` s'est imposé comme une alternative très crédible à `R` dans la manipulation de données. L'écosystème `Pandas` a permis de démocratiser l'utilisation des DataFrames dans `Python` et faciliter la manipulation de données structurées grâce à la philosophie `SQL`. `Python` reste également le langage le plus pratique pour récupérer et manipuler des données moins structurées (_webscraping_, API). `Python` tend à devenir, grâce à son écosystème dynamique, le langage *\"one to rule them all\"*.",
                        en: '`Python` has established itself as a credible alternative to R for data manipulation. The `Pandas` ecosystem has made it possible to democratize the use of DataFrames in `Python` and make it easier to manipulate of structured data thanks to the `SQL` philosophy. `Python` is also the most practical language for retrieving and manipulating unstructured data (_webscraping_, APIs). Python is tending to become, thanks to its dynamic ecosystem, the _"one to rule them all "_ language.',
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 5,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 120,
                    imageUrl: python_jpg_url,
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
                        fr: "Manipuler des données avec Pandas",
                        en: "Data wrangling with Pandas",
                    },
                    abstract: {
                        fr: "Le chapitre d'introduction à `Pandas` a permis de présenter le principe de données organisées sous une forme de _DataFrame_ et la praticité de l'écosystème `Pandas` pour effectuer des opérations simples sur un jeu de données. Ce chapitre consolide ces principes en présentant deux types de traitements classiques de la boite à outil des _data scientists_ : statistiques par groupe et associations de données.",
                        en: "The introductory chapter to `Pandas` presented how data were organized as _DataFrames_ and how the `Pandas` ecosystem can be useful to perform simple operations on datasets. This chapter consolidates these principles by introducing two classic types of operations from the data scientist's toolbox: group statistics and data merging.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 180,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 60,
                    imageUrl: python_jpg_url,
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
                {
                    name: {
                        fr: "Les nouveaux modes d'accès aux données: le format Parquet et les donnnées sur le cloud",
                        en: "New ways of accessing data: Parquet format and data in the cloud",
                    },
                    abstract: {
                        fr: "Le format `Parquet` est un format de données connaissant une popularité importante du fait de ses caractéristiques techniques (orientation colonne, compression, interopérabilité...), de sa nature _open source_ et du riche écosystème associé dont les frameworks les plus proéminents sont `Arrow` et `DuckDB`. A ces nombreux avantages s'ajoutent une intégration native aux infrastructures _cloud_ basées sur `S3`, des extensions nombreuses pour traiter des données complexes comme les données géographiques ou, plus récemment, le portage en WASM de `DuckDB` permettant de construire des applications réactives impliquant des transformations de données directement depuis le navigateur.",
                        en: "`Parquet` is a very popular data format, thanks to its technical characteristics (column orientation, compression, interoperability...), its open-source nature and the rich associated ecosystem, whose most prominent frameworks are `Arrow` and `DuckDB`. Added to these numerous advantages are native integration with cloud infrastructures based on `S3`, numerous extensions for handling complex data such as geographic data or, more recently, the WASM porting of `DuckDB` enabling responsive applications involving data transformations to be built directly from the browser.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 60,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB05_parquet_s3%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2005_parquet_s3%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB05_parquet_s3%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2005_parquet_s3%20correction%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB05_parquet_s3%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmanipulation%2005_parquet_s3%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB05_parquet_s3%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/manipulation%2005_parquet_s3%20correction%C2%BB",
                        },
                    },
                },
            ],
        },
        {
            name: "Visualisation de données",
            abstract: "Graphiques, cartes, et visualisations interactives",
            imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 5,
                    imageUrl: python_jpg_url,
                    articleUrl: {
                        fr: "https://pythonds.linogaliana.fr/content/visualisation/",
                        en: "https://pythonds.linogaliana.fr/en/content/visualisation/",
                    },
                },
                {
                    name: {
                        fr: "Construire des graphiques avec Python",
                        en: "Building graphics with Python"
                    },
                    abstract: {
                        fr: "Une partie essentielle du travail du  _data scientist_ est d'être en mesure de synthétiser une information dans des représentations graphiques percutantes. Ce chapitre permet de découvrir les enjeux de la représentation de données avec `Python`, l'écosystème pour faire ceci. Il ouvre également à la représentation interactive de données avec `Plotly` ou `Altair`.",
                        en: "An essential part of the _data scientist's_ job is to be able to synthesize information into powerful graphical representations. This chapter looks at the challenges of data representation with `Python`, the ecosystem for doing this. It also opens the door to interactive data representation with `Plotly` or `Altair`."
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%ABmatplotlib%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20matplotlib%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%ABmatplotlib%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/visualisation%20matplotlib%20correction%C2%BB"
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%ABmatplotlib%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20matplotlib%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%ABmatplotlib%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/visualisation%20matplotlib%20correction%C2%BB"
                        }
                    },
                },
                {
                    name: {
                        fr: "Introduction à la cartographie avec Python",
                        en: "Introduction to cartography with Python"
                    },
                    abstract: {
                        fr: "La cartographie est un excellent moyen de diffuser de la connaissance sur les données, y compris à des publics peu familiers de la statistique. Ce chapitre permet de découvrir le défi de la cartographie et la manière dont on peut utiliser `Python` pour construire des cartes.",
                        en: "Mapping is an excellent way of disseminating knowledge about data, even to audiences unfamiliar with statistics. This chapter looks at the challenge of mapping and how you can use `Python` to build maps."
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%ABmaps%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20maps%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%ABmaps%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/visualisation%20maps%20correction%C2%BB"
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%ABmaps%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABvisualisation%20maps%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%ABmaps%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/visualisation%20maps%20correction%C2%BB"
                        }
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
            imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 15,
                    imageUrl: python_jpg_url,
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
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%200_preprocessing%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%200_preprocessing%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%200_preprocessing%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB0_preprocessing%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%200_preprocessing%C2%BB",
                        },
                    },
                },
                {
                    name: {
                        fr: "Evaluer la qualité d'un modèle",
                        en: "Evaluating model quality",
                    },
                    abstract: {
                        fr: "La raison d'être du _machine learning_ est de chercher à créer des règles de décision qui ont de bonnes performances prédictives sur un nouvel échantillon. Pour éviter le surapprentissage, c'est-à-dire pour avoir un modèle ayant une bonne validité externe, outre la préparation des données vue dans le chapitre précédent, il sera nécessaire d'évaluer les modèles. Ce chapitre se plonge sur le sujet de l'évaluation des modèles et des enjeux de ceci. Cela permettra d'évoquer les enjeux de l'évaluation dans un cadre d'apprentissage supervisé comme non supervisé, de présenter la méthode de la validation croisée mais aussi d'ouvrir à des concepts comme le _data drift_ ou l'évaluation des modèles type LLM à l'état de l'art.",
                        en: "The purpose of machine learning is to create decision rules with good predictive performance on a new sample. To avoid overlearning, i.e. to have a model with good external validity, in addition to the data preparation seen in the previous chapter, it will be necessary to evaluate the models. This chapter delves into the subject of model evaluation and the issues involved. It will discuss the challenges of evaluation in both supervised and unsupervised learning environments, introduce the cross-validation method and open up to concepts such as _data drift_ and state-of-the-art LLM-type model evaluation.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 60,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB1_modelevaluation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%201_modelevaluation%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB1_modelevaluation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%201_modelevaluation%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB1_modelevaluation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%201_modelevaluation%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB1_modelevaluation%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%201_modelevaluation%C2%BB",
                        },
                    },
                },
                {
                    name: {
                        fr: "Découverte de la classification avec la technique des SVM",
                        en: "Discovering classification with the SVM technique",
                    },
                    abstract: {
                        fr: "La classification permet d'attribuer une classe d'appartenance (_label_ dans la terminologie du _machine learning_) discrète à des données à partir de certaines variables explicatives (_features_ dans la même terminologie). Les algorithmes de classification sont nombreux. L'un des plus intuitifs et les plus fréquemment rencontrés sont les _SVM_ (*Support Vector Machine*). Ce chapitre illustre les enjeux de la classification à partir de ce modèle sur les données de vote aux élections présidentielles US de 2020.",
                        en: "Classification enables us to assign a discrete membership class (_label_ in machine learning terminology) to data, based on certain explanatory variables (_features_ in the same terminology). Classification algorithms are numerous. One of the most intuitive and frequently encountered is _SVM_ (*Support Vector Machine*). This chapter illustrates the challenges of using this model to classify voting data from the 2020 US presidential elections.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 60,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB2_classification%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%202_classification%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB2_classification%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%202_classification%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB2_classification%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%202_classification%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB2_classification%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%202_classification%C2%BB",
                        },
                    },
                },
                {
                    name: {
                        fr: "Introduction à la régression",
                        en: "An introduction to regression",
                    },
                    abstract: {
                        fr: "La régression linéaire est la première modélisation statistique qu’on découvre dans un cursus quantitatif. Il s’agit en effet d’une méthode très intuitive et très riche. Le Machine Learning permet de l’appréhender d’une autre manière que l’économétrie. Avec `scikit` et `statsmodels`, on dispose de tous les outils pour satisfaire à la fois data scientists et économistes.",
                        en: "Linear regression is the first statistical modeling encountered in a quantitative curriculum. It is a very intuitive and rich method. Machine Learning allows us to approach it differently from econometrics. With `scikit` and `statsmodels`, we have all the tools to satisfy both data scientists and economists.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB3_regression%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%203_regression%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB3_regression%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%203_regression%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB3_regression%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%203_regression%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB3_regression%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%203_regression%C2%BB",
                        },
                    },
                },
                {
                    name: {
                        fr: "Sélection de variables : une introduction",
                        en: "Variable selection: an introduction",
                    },
                    abstract: {
                        fr: "L'accès à des bases de données de plus en plus riches permet des modélisations de plus en plus raffinées. Cependant, les modèles parcimonieux sont généralement préférables aux modèles extrêmement riches pour obtenir de bonnes performances sur un nouveau jeu de données (prédictions _out-of-sample_). Les méthodes de sélection de variables, notamment le [`LASSO`](https://fr.wikipedia.org/wiki/Lasso_(statistiques)), permettent de sélectionner le signal le plus pertinent dilué au milieu du bruit lorsqu'on a beaucoup d'information à traiter.",
                        en: "Access to ever-richer databases enables increasingly refined modeling. However, parsimonious models are generally preferable to extremely rich models for obtaining good performance on a new dataset (_out-of-sample_ predictions). Variable selection methods, such as [`LASSO`](https://fr.wikipedia.org/wiki/Lasso_(statistics)), can be used to select the most relevant signal diluted amidst the noise when there is a lot of information to process.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB4_featureselection%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%204_featureselection%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB4_featureselection%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%204_featureselection%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB4_featureselection%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%204_featureselection%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB4_featureselection%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%204_featureselection%C2%BB",
                        },
                    },
                },
                {
                    name: {
                        fr: "Introduction à l'apprentissage non supervisé avec le clustering",
                        en: "Introduction to unsupervised learning with clustering techniques",
                    },
                    abstract: {
                        fr: "Le clustering consiste à répartir des observations dans des groupes, généralement non observés, en fonction de caractéristiques observables. Il s'agit d'une application classique, en machine learning, de méthodes non supervisées puisqu'on ne dispose généralement pas de l'information sur le groupe auquel appartient réellement une observation. Les applications au monde réel sont nombreuses, notamment dans le domaine de la segmentation tarifaire.",
                        en: "Clustering involves dividing observations into groups, usually unobserved, based on observable characteristics. This is a classic application of unsupervised methods in machine learning, as information about the actual group membership of an observation is generally unavailable. Real-world applications are numerous, notably in fare segmentation.",
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 60,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB5_clustering%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%205_clustering%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB5_clustering%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%205_clustering%C2%BB",
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB5_clustering%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%205_clustering%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB5_clustering%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/modelisation%205_clustering%C2%BB",
                        },
                    },
                },
                {
                    name: "Premier pas vers l'industrialisation avec les pipelines scikit",
                    abstract:
                        "Les _pipelines_ `scikit` permettent d'intégrer de manière très flexible\nun ensemble d'opérations de pre-processing et d'entraînement de modèles\ndans une chaîne d'opérations. Il s'agit d'une approche particulièrement\nappropriée pour réduire la difficulté à changer d'algorithme ou pour\nfaciliter la ré-application d'un code à de nouvelles données\n",
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 120,
                    imageUrl: python_jpg_url,
                    deploymentUrl:
                        "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=python-datascience&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmaster%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABmodelisation%206_pipeline%C2%BB&security.allowlist.enabled=false",
                },
            ],
        },
        {
            name: {
                fr: "Traitement du langage naturel (NLP)",
                en: "Natural language processing (NLP)"
            },
            abstract: {
                fr: "Analyse et modélisation des données textuelles",
                en: "Modeling and analyzing textual data"
            },
            imageUrl: python_jpg_url,
            parts: [
                {
                    name: {
                        fr: "Quelques éléments pour comprendre les enjeux",
                        en: "Introduction"
                    },
                    abstract: {
                        fr: "Cette partie du cours introduit le traitement automatique du langage (NLP), un domaine scientifique à la croisée de la linguistique et des statistiques devenu, du fait de l'engouement envers les IA génératives, central dans le domaine de la _data science_. A travers des exemples littéraires, dcette partie explore d’abord des méthodes classiques comme l’analyse fréquentiste et le traitement de corpus textuels sous la forme de _bag of words_. Ensuite, elle aborde la modélisation du langage qui ouvre la voie à des approches plus originales. L'objectif de chapitre est de rappeler quelques éléments généraux sur le vaste domaine qu'est le NLP.",
                        en: "This part of the course introduces automatic language processing (NLP), a scientific field at the crossroads of linguistics and statistics that has become central to the field of _data science_ as a result of the craze for generative AI. Using literary examples, this section first explores classic methods such as frequentist analysis and the processing of textual corpora in the form of _bag of words_. It then looks at language modelling, which opens the way to more original approaches. The aim of this chapter is to recall a few general points about the vast field of NLP"
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 10,
                    imageUrl: python_jpg_url,
                    articleUrl: {
                        fr: "https://pythonds.linogaliana.fr/content/NLP/",
                        en: "https://pythonds.linogaliana.fr/en/content/NLP/"                        
                    }
                },
                {
                    name: {
                        fr: "Nettoyer un texte: approche bag-of-words (exercices)",
                        en: "Cleaning and structuring information in textual data"
                    },
                    abstract: {
                        fr: "Les corpus textuels étant des objets de très grande dimension où le ratio signal/bruit est faible, il est nécessaire de mettre en oeuvre une série d'étapes de nettoyage de texte. Ce chapitre va explorer quelques méthodes classiques de nettoyage en s'appuyant sur des corpus littéraires: le _Comte de Monte Cristo_ d'Alexandre Dumas et des auteurs fantastiques anglo-saxons (Lovecraft, Poe, Shelley).",
                        en: "As text corpora are very large objects with a low signal-to-noise ratio where the signal-to-noise ratio is low, it is necessary to carry out a series of a series of text cleaning steps. This chapter will explore some classic cleaning methods based on literary corpora literary corpora: Alexandre Dumas' _Comte de Monte Cristo_ and Anglo-Saxon fantasy writers (Lovecraft, Poe, Shelley)."
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    imageUrl: python_jpg_url,
                    timeRequiredInMinutes: 90,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB01_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2001_intro%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB01_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/NLP%2001_intro%20correction%C2%BB"
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB01_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2001_intro%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB01_intro%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/NLP%2001_intro%20correction%C2%BB"
                        }
                    }
                },
                {
                    name: {
                        fr: "L'analyse fréquentiste par l'approche bag-of-words : intérêt et limites",
                        en: "Frequentist analysis using the bag-of-words approach: forces and limitations"
                    },
                    abstract: {
                        fr: "Ce chapitre approfondit l'analyse fréquentiste appliquée aux données textuelles en présentant les enjeux du domaine de l'extraction d'informations (_information retrieval_). Après avoir présenté le nettoyage et la vectorisation des textes via TF-IDF, il aborde les limites de l'approche _bag of words_ et ouvre la voie aux _embeddings_, vecteurs représentant les objets textuels par proximité de sens, objet du prochain chapitre.",
                        en: "his chapter takes a closer look at frequentist analysis applied to textual data by presenting the challenges in the field of information retrieval. After presenting the cleaning and vectorisation of texts using TF-IDF, it discusses the limitations of the _bag of words_ approach and paves the way for _embeddings_, vectors representing textual objects by proximity of meaning, the subject of the next chapter."
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB02_exoclean%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2002_exoclean%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-python?autoLaunch=true&name=%C2%AB02_exoclean%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/NLP%2002_exoclean%20correction%C2%BB"
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB02_exoclean%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2002_exoclean%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=%C2%AB02_exoclean%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/NLP%2002_exoclean%20correction%C2%BB"
                        }
                    }
                },
                {
                    name: {
                        fr: "Les embeddings, ou comment synthétiser l'information textuelle",
                        en: "Synthetizing textual information with embeddings"
                    },
                    abstract: {
                        fr: "Pour pouvoir utiliser des données textuelles dans des algorithmes de _machine learning_, il faut les vectoriser, c'est à dire transformer le texte en données numériques. Dans ce TP, nous allons comparer différentes méthodes de vectorisation, à travers une tâche de prédiction : _peut-on prédire un auteur littéraire à partir d'extraits de ses textes ?_ Parmi ces méthodes, on va notamment explorer le modèle `Word2Vec`, qui permet d'exploiter les structures latentes d'un texte en construisant des _word embeddings_ (plongements de mots).",
                        en: "To be able to use textual data in machine learning algorithms, we need to vectorize text, i.e. transform that object into numerical data. In this tutorial, we will compare different vectorization methods, using a prediction task: _can we predict a literary author from extracts of his texts?_ Among these methods, we will explore the `Word2Vec` model, which allows us to exploit the latent structures of a text by building word embeddings."
                    },
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    deploymentUrl: {
                        vscode: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/vscode-pytorch?autoLaunch=true&name=%C2%AB03_embedding%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2003_embedding%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/vscode-pytorch?autoLaunch=true&name=%C2%AB03_embedding%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-vscode.sh%C2%BB&init.personalInitArgs=%C2%ABen/NLP%2003_embedding%20correction%C2%BB"
                        },
                        jupyter: {
                            fr: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pytorch?autoLaunch=true&name=%C2%AB03_embedding%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABNLP%2003_embedding%20correction%C2%BB",
                            en: "https://datalab.sspcloud.fr/launcher/ide/jupyter-pytorch?autoLaunch=true&name=%C2%AB03_embedding%C2%BB&init.personalInit=%C2%ABhttps%3A%2F%2Fraw.githubusercontent.com%2Flinogaliana%2Fpython-datascientist%2Fmain%2Fsspcloud%2Finit-jupyter.sh%C2%BB&init.personalInitArgs=%C2%ABen/NLP%2003_embedding%20correction%C2%BB"
                        }
                    }
                },
            ],
        },
        {
            name: "Utiliser Git dans ses projets Python",
            abstract: "Introduction pratique à Git pour les projets Python",
            authors: ["Lino Galiana"],
            imageUrl: python_jpg_url,
            parts: [
                {
                    name: "Découvrir Git par la pratique: la gymnastique quotidienne",
                    abstract:
                        "`Git` est un système de contrôle de version qui facilite la sauvegarde, la gestion des évolutions et le partage d'un projet informatique. Il s'agit d'un élément devenu indispensable dans le domaine de la _data science_. Ce chapitre présente quelques concepts qui seront mis en pratique dans le suivant. ",
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 90,
                    imageUrl: python_jpg_url,
                    articleUrl:
                        "https://pythonds.linogaliana.fr/content/git/introgit.html",
                },
                {
                    name: "Un cadavre exquis pour découvrir le travail collaboratif avec Git",
                    abstract:
                        "Ce chapitre présente les enjeux liés à l'utilisation de `Git` dans des projets collectifs et propose une mise en pratique par le biais d'un cadavre exquis.",
                    authors: ["Lino Galiana"],
                    tags: [
                        "consolidate",
                        "learn",
                        "Notebook",
                        "Python",
                        "Data Science Training",
                    ],
                    timeRequiredInMinutes: 30,
                    imageUrl: python_jpg_url,
                    articleUrl: "https://pythonds.linogaliana.fr/content/git/exogit.html",
                },
            ],
        },
    ],
};
