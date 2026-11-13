import type { EducationalResource } from "./-index";
import aiml4os_png_url from "./-assets/aiml40s.png";

export const codif: EducationalResource.Collection = {
    name: "Codification automatique avec RAG et TTC",
    abstract:
        "2 tutoriels pour faire de la codification automatique sur le SSPCloud: 1) avec un pipeline RAG (à base de LLM), 2) Avec TTC (boîte à outil pour implémenter des modèles de machine learning supervisé).",
    imageUrl: aiml4os_png_url,
    parts: [
        {
            name: "Site du Funathon européen 2026",
            abstract:
                "Site cookbook et lien vers les notebooks préconfigurés pour tester soi-même",
            authors: ["Julien PRAMIL, Meilame TAYEBJEE, Théo FERRY"],
            tags: ["discover", "learn", "Tutorial", "Python", "Data Science Training"],
            imageUrl: aiml4os_png_url,
            articleUrl: "https://aiml4os.github.io/funathon-project2/",
        },
    ],
};
