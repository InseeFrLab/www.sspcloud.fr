# Bienvenue sur le SSP Cloud !

Instance ouverte du projet [Onyxia](https://www.onyxia.sh/), le [SSP Cloud](https://datalab.sspcloud.fr/) est une plateforme mutualisée de traitement de données, ou "Datalab". Elle est dédiée à l'expérimentation autour des méthodes de datascience à partir de données ouvertes. A travers ce tutoriel, nous vous proposons une visite guidée du Datalab pour être rapidement opérationnel dans l'utilisation de ses services.

> ⚠️ Attention
> Les conditions d'utilisation du SSP Cloud sont consultables à [cette adresse](https://datalab.sspcloud.fr/document?source=%257B%2522en%2522%253A%2522%252Fcustom-resources%252Ftos_en.md%2522%252C%2522fr%2522%253A%2522%252Fcustom-resources%252Ftos_fr.md%2522%257D&lang=fr). Nous rappelons que le SSP Cloud est destiné exclusivement au traitement de **données publiques et non-sensibles**. Des projets d'expérimentation mobilisant des données non ouvertes peuvent être menés en concertation avec l'équipe du projet Onyxia, sous réserve de se conformer aux règles de sécurité spécifiques au projet.

## Le catalogue de services

Le [catalogue de services](https://datalab.sspcloud.fr/catalog/ide) est au centre de l'utilisation du SSP Cloud. Il propose un ensemble de services destinés aux traitements statistiques de données ainsi qu'à la gestion complète des projets de _data science_.

![](/documents/docs.sspcloud.fr/content/img/catalog.png)

### Lancer un service

Pour lancer un service, il suffit de cliquer sur le bouton `Lancer` du service désiré

Une page centrée sur le service demandé s'ouvre alors, qui offre plusieurs possibilités :

-   cliquer à nouveau sur le bouton `Lancer` pour lancer le service avec sa configuration par défaut ;
-   personnaliser le nom que portera l'instance une fois le service lancé ;
-   dérouler un menu de configuration afin de personnaliser la configuration du service avant de le lancer ;
-   sauvegarder une configuration personnalisée en cliquant sur le signet en haut à droite du service.

> ℹ️ Info  
> La configuration précise des services du SSP Cloud constitue un usage avancé et n'est donc pas traité dans ce tutoriel, mais dans d'autres pages de ce site documentaire.

### Utiliser un service

L'action de lancer un service amène automatiquement sur la page [Mes Services](https://datalab.sspcloud.fr/my-services), où sont listées toutes les instances en activité sur le compte de l'utilisateur.

![](/documents/docs.sspcloud.fr/content/img/services.png)

Une fois le service lancé, un bouton `Ouvrir` apparaît qui permet l'accès au service. Un mot de passe — et, selon les services, un nom d'utilisateur — est généralement requis pour pouvoir utiliser le service. Ces informations sont disponibles dans le `README` associé au service, auquel on accède en cliquant sur le bouton du même nom.

### Supprimer une instance

Supprimer une instance d'un service s'effectue simplement en cliquant sur l'icône en forme de poubelle en dessous de l'instance.

> ⚠️ Attention
> Pour certains services, la suppression d'une instance entraîne la suppression de toutes les données associées, et cette action est irrémédiable.  
> Il est donc nécessaire de toujours bien lire le `README` associé à l'instance, qui précise les conséquences d'une suppression de l'instance.  
> De manière générale, il est très important de s'assurer que les données ainsi que le code utilisés sont sauvegardés avant de supprimer l'instance.  
> L'idéal est de versionner son code avec Git et de procéder à des sauvegardes régulières des données à l'aide du système de stockage S3.

> ⚠️ Attention
> Les ressources mises à disposition pour l'execution des services sont partagées entre les différents utilisateurs du SSP Cloud. Veuillez à ne pas laisser en cours des services dont vous ne faites plus l'usage. Nous procédons parfois à une suppression systématique des instances inactives depuis un certain temps, afin de libérer des ressources.

## Support

Le support et l'aide à l'utilisation du SSP Cloud sont effectuées sur deux outils de communication :

-   Sur [le Slack Onyxia](https://join.slack.com/t/3innovation/shared_invite/zt-1bo6y53oy-Y~zKzR2SRg37pq5oYgiPuA) dans le canal dédié #sspcloud. Toute question sur l'utilisation du SSP Cloud ou suggestion d'amélioration y sont les bienvenues.
-   Sur un [salon dédié](https://matrix.to/#/#SSPCloudXDpAw6v:agent.finances.tchap.gouv.fr) du service de messagerie instantanée interministériel de l'état Francais [Tchap](https://www.tchap.gouv.fr) pour les agents publiques français.
