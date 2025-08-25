import type { EducationalResource } from "./_index";
import open_data_uni_png_url from "./_assets/open_data_uni.png";

export const open_data_challenges: EducationalResource.Collection = {
    name: {
        en: "Open Data Challenges",
        fr: "Défis Open Data",
    },
    abstract: {
        en: "Train and use open data to address social and environmental issues",
        fr: "Se former et utiliser des données ouvertes pour répondre à des enjeux sociaux, environnementaux",
    },
    parts: [
        {
            name: {
                en: "Impact Diagnostics of Energy Performance",
                fr: "Impact Diagnostics de Performance Energétique",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What impact does the DPE class have on energy consumption? Challenge led by Enedis",
                fr: "Quel impact de la classe DPE sur les consommations énergétiques ? Défi porté par Enedis",
            },
            authors: ["data.gouv.fr", "Enedis"],
            tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65b76f15d7874915c8e41298/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABdiagnostics-de-performance-energetique%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Cultural Offer",
                fr: "Offre culturelle",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to enhance the cultural offer and promote access to culture?",
                fr: "Comment valoriser l'offre culturelle et favoriser l'accès à la culture ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
            tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65b10aa72d0c187ecf296930/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABoffre-culturelle%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Elections",
                fr: "Elections",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What are the links between voting and socio-demographic characteristics?",
                fr: "Quels liens entre vote et caractéristiques socio-démographiques ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
            tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65b22219ffcf892bd066df76/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABelections%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Climate Change",
                fr: "Changement climatique",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How has the climate in France evolved since the early 20th century?",
                fr: "Quelle évolution du climat en France depuis le début du XXe siècle ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65b10beae24f409e31c547a5/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABchangement-climatique%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "City Center Shops",
                fr: "Commerces de centre-ville",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What is the structure of the commercial fabric?",
                fr: "Quelle est la structure du tissu commercial ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65b76b8536f029909a82ca1c/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABcommerces-de-centre-ville%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Cycling Infrastructure",
                fr: "Infrastructures cyclables",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What are the links between cycling accidents and cycling infrastructure?",
                fr: "Quels liens entre accidentologie à vélo et infrastructures cyclables ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65a92352ddd3d98e460e83f3/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABinfrastructures-cyclables%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Energy in France",
                fr: "Energie en France",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What are the past and future energy tensions in France?",
                fr: "Quelles tensions énergétiques passées et futures en France ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65a92372953d21f206abb110/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABenergie-en-france%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "School Map",
                fr: "Carte scolaire",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to know which school to enroll a child in?",
                fr: "Comment permettre de savoir dans quel établissement inscrire un enfant ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65a9237ed493a309fc872e4a/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABcarte-scolaire%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Electric Vehicles",
                fr: "Véhicules électriques",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "Is the distribution of charging infrastructure adequate?",
                fr: "La répartition des infrastructures de recharge est-elle adaptée ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65a923a083cf5f728c9934b3/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABvehicules-electriques%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "France Recovery Plan",
                fr: "Plan France Relance",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What are the impacts of the distributed aid on the economy and ecological transition?",
                fr: "Quels impacts des aides distribués sur l'économie et la transition écologique ?",
            },
            authors: ["data.gouv.fr", "Latitudes"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/65a9238c202514467c0163d2/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABplan-france-relance%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Access and Use of Meteorological Data",
                fr: "Accès et exploitation des données météorologiques",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to facilitate access to meteorological data?",
                fr: "Comment faciliter l'accès aux données météorologiques ?",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/6639df879e70e0b00e5aeef1/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABacces-aux-donnees-meteo%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Renewable Energy",
                fr: "Energies renouvelables",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to predict the variations in renewable energy production?",
                fr: "Comment prévoir les variations de production d’énergies renouvelables ?",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/6639e311f4a75be320cfa517/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABenergies-renouvelables%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Agricultural Decision",
                fr: "Décision agricole",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to mobilize meteorological data for agricultural decision-making?",
                fr: "Comment mobiliser les données météorologiques pour la prise de décision agricole ?",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/6639e67fa95c6e4f1da70e39/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABdecision-agricole%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Urban Heat Island",
                fr: "Îlot de chaleur urbain",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What is the map of urban heat islands?",
                fr: "Quelle cartographie des îlots de chaleur urbain ?",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/6639ea1a5fde712a09fa0c67/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABilots-de-chaleur-urbain%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Access to Sport",
                fr: "Accès au sport",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "Sport for all: Evaluate and improve equal access to sports activities in France",
                fr: "Sport pour tous : Évaluer et améliorer l’égalité d’accès aux activités sportives en France",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/66a0fdf41a40f23f40025444/",
        },
        {
            name: {
                en: "JOP2024 and Cultural Offer",
                fr: "JOP2024 et offre culturelle",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "Olympic and Paralympic Games: Enrich the experience and highlight the cultural offer",
                fr: "Jeux Olympiques et Paralympiques : Enrichissez l’expérience et mettez en valeur l’offre culturelle",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/66a0ffa8d8f03afc1d474a53/",
        },
        {
            name: {
                en: "JOP2024 and Air Quality",
                fr: "JOP2024 et qualité de l’air",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "Olympic and Paralympic Games: air pollution issues in the context of physical activity",
                fr: "Jeux Olympiques et Paralympiques : enjeux de pollution de l’air dans le cadre d’une activité physique",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/66a10128a66990ed3d718a53/",
        },
        {
            name: {
                en: "Diversity and inclusion in the workplace",
                fr: "Diversité et inclusion en entreprise",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "What is EDF SA's policy on inclusion and diversity? A challenge by EDF",
                fr: "Quelle politique sur l'inclusion et la diversité au sein d'EDF SA ? Un défi porté par EDF",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/6704d5262a223f0cbc866c68/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABdiversite-et-inclusion-en-entreprise%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Revitalizing small towns",
                fr: "Revitalisation des petites villes",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to present the specificities of a small town ? A challenge by Banque des territoires",
                fr: "Comment représenter les spécifités d'une petite ville de demain ? Un défi porté par la Banque des territoires",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/6704d7a9120c998a2085f8bc/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABrevitalisation-des-petites-villes%C2%BB&security.allowlist.enabled=false",
        },
        {
            name: {
                en: "Health and territories",
                fr: "Santé et territoires",
            },
            imageUrl: open_data_uni_png_url,
            abstract: {
                en: "How to help local actors assess the state of public health within their territory?",
                fr: "Comment aider les acteurs locaux à réaliser un diagnostic de santé publique sur leur territoire ?",
            },
            authors: ["data.gouv.fr"],
                        tags: ["learn", "consolidate", "Exercise", "Python"],
            articleUrl: "https://defis.data.gouv.fr/defis/68234dc8f8f4d7549998f0ad/",
            deploymentUrl:
                "https://datalab.sspcloud.fr/launcher/ide/jupyter-python?autoLaunch=true&name=defis-datagouv&init.personalInit=%C2%ABhttps://raw.githubusercontent.com/datagouv/odu-notebooks/main/init_onyxia.sh%C2%BB&init.personalInitArgs=%C2%ABsante-et-territoires%C2%BB&security.allowlist.enabled=false",
        },
    ],
};
