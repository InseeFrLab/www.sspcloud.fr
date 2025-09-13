# Utiliser les LLM de façon programmatique

## Générer une clé d'API

Pour utiliser les Large Language Models (LLM) de façon programmatique, il est nécessaire de générer une clé d'API. Cette clé vous permettra d'authentifier vos requêtes et d'accéder aux fonctionnalités offertes par le service.

1. **Connexion à la plateforme** :

    - Accédez à la plateforme SSP Cloud via votre navigateur.
    - Connectez-vous avec vos identifiants SSO.

2. **Génération de la clé d'API** :

    - Une fois connecté, rendez-vous dans la section dédiée à la gestion des clés d'API.
    - Cliquez sur votre nom, puis sur "Paramètres" et ensuite sur "Compte".
    - Une section dédiée permet de générer une clé d'API.

3. **Sécurisation de la clé** :
    - Vous pourrez accéder à votre clé à tout moment.
    - Ne la partagez pas publiquement pour éviter tout accès non autorisé.

## Comprendre l'API proposée par OpenWebUI

L'API proposée par OpenWebUI permet d'interagir avec les LLM de manière programmatique. Voici quelques points clés pour comprendre et utiliser cette API.

### Endpoints disponibles

Une interface OpenAI est disponible :

-   **Endpoint de base** : `https://llm.lab.sspcloud.fr/api`
-   **Authentification** : Toutes les requêtes doivent inclure votre clé d'API dans l'en-tête `Authorization`.

Un proxy vers l'interface Ollama est également disponible :

-   **Endpoint de base** : `https://llm.lab.sspcloud.fr/ollama`
-   **Authentification** : Toutes les requêtes doivent inclure votre clé d'API dans l'en-tête `Authorization`.

Avertissement: Les clients programmatiques Ollama possèdent rarement la capacité d'ajouter une clé d'API. Ce proxy est donc difficilement utilisable.
