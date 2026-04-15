# Utiliser Langfuse

## Qu'est-ce que c'est ?

Langfuse est une plateforme open-source d’observabilité et d’analyse pour les applications utilisant des modèles de langue (LLM).  
Elle aide les développeurs à surveiller, déboguer et améliorer les applications basées sur des modèles de grande taille.

1. **Traçage & Journalisation** : Capture des traces détaillées de chaque requête LLM : entrées, sorties, latences, utilisation des tokens et métadonnées.

2. **Analyse des Prompts & Modèles** : Suit les performances de différents prompts ou modèles et compare les coûts, la latence et la qualité.

3. **Outils d’Évaluation** : Permet l’évaluation automatique et manuelle des sorties des modèles.

## L’utiliser

Nous hébergeons notre propre instance de Langfuse : https://langfuse.lab.sspcloud.fr/ où vous pouvez créer votre organisation et vos projets.

1. **Connexion à la plateforme** :

    - Accédez à la plateforme SSP Cloud depuis votre navigateur.
    - Connectez-vous avec vos identifiants SSO.

2. **Génération de la clé API** :

    - Une fois connecté, allez dans les paramètres du projet.
    - Puis dans la section **API KEYS**.
    - Un bouton dédié permet de créer de nouvelles clés API.

3. **Sécurisation de la clé** :

    - Pensez à bien noter votre clé secrète : vous ne pourrez pas la retrouver plus tard.
    - Ne la partagez pas publiquement pour éviter tout accès non authorisé.
