import type { EducationalResource } from "./__index";
import data_science_png_url from "./__assets/data_science.png";
import r_svg_url from "./__assets/r.svg";
import python_jpg_url from "./__assets/python.jpg";

export const funathon_2024: EducationalResource.Collection = {
    name: "Funathon 2024",
    abstract:
        "Des tutoriels pour découvrir et pratiquer la data science autour du thème _'Décollage imminent pour la data science'_",
    imageUrl: data_science_png_url,
    parts: [
        {
            name: "Sujet 1: Visualisation des émissions de CO2 de liaisons aériennes",
            abstract:
                "Visualiser les émissions de $CO_2$ liées à une mesure de restriction de liaison aérienne relativement à des durées de trajets ferroviaires.",
            authors: ["Inseefrlab"],
            tags: ["discover", "consolidate", "Tutorial"],
            imageUrl: r_svg_url,
            articleUrl: "https://inseefrlab.github.io/funathon2024_sujet1/",
        },
        {
            name: "Sujet 2: Un tableau de bord du trafic aérien avec R ou Python",
            abstract:
                "Amener, pas à pas, à la conception voire à la mise à disposition d’un tableau de bord du trafic aérien avec R ou Python.",
            authors: ["Inseefrlab"],
            tags: ["discover", "consolidate", "Tutorial"],
            imageUrl: r_svg_url,
            articleUrl: "https://inseefrlab.github.io/funathon2024_sujet2/",
        },
        {
            name: "Sujet 3: Créer un nouveau FlightRadar avec Python",
            abstract:
                "Reconstruction de l'interface de FlightRadar24 avec Python en récupérant les données par le biais de l'API.",
            authors: ["Inseefrlab"],
            tags: ["discover", "consolidate", "Tutorial"],
            imageUrl: python_jpg_url,
            articleUrl: "https://github.com/InseeFrLab/funathon2024_sujet3",
        },
        {
            name: "Sujet 4: Analyse textuelle de commentaires clients",
            abstract:
                "Découverte des enjeux du nettoyage de champs textuels et de l’analyse de sentiments à partir de données scrapées sur Trustpilot.",
            authors: ["Inseefrlab"],
            tags: ["discover", "consolidate", "Tutorial"],
            imageUrl: python_jpg_url,
            articleUrl: "https://github.com/InseeFrLab/funathon2024_sujet4",
        },
    ],
};
