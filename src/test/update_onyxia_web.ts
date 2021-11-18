
import { action } from "../update_educational_resources";

action(
    "update_educational_resources",
    {
        "github_token": "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "educational_resource": JSON.stringify({
            "name": "foo bar baz",
            "abstract":
                "Pas à pas pour utiliser des secrets en tant que variables d’environnement avec le datalab.",
            "authors": ["Inseefrlab"],
            "contributors": ["Inseefrlab"],
            "types": ["Tutoriel"],
            "tags": ["learn", "consolidate"],
            "category": "step by step with the datalab",

            "imageUrl": "https://example.com",
            "articleUrl":
                "https://docs.sspcloud.fr/onyxia-guide/utiliser-des-variables-denvironnement",
        })
    },
    {
        "debug": console.log,
        "warning": console.warn
    }
);

