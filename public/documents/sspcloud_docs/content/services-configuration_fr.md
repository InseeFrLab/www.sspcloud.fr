# Configuration des services (en construction)

Après avoir cliqué sur "Nouveau service" > "RStudio/Jupyter-python/VScode-python" > "Lancer"

## Nom personnalisé

Pour reconnaître le service et/ou la configuration si on l'enregistre en cliquant sur le symbole de marque page en haut à droite.
Si le nom existe déjà parmi les configurations enregistrées, l'enregistrement écrasera l'ancienne configuration.

Pratique pour distinguer différents services d'un même type (RStudio, Jupyter...).

## Partager le service

Il est possible de partager un service à un groupe de personnes en cochant la case "Partager le service" à l'ouverture du service.
Les autres membres du groupe verront le service et pourront l'utiliser.
La création de groupes se fait en écrivant aux administrateurs sur Tchap (en privé) ou par mail à l'adresse innovation@insee.fr, en communiquant le nom de groupe, les noms d'utilisateurs des membres, le besoin ou non d'un espace de stockage associé sur MinIO.

Info: Pour un besoin ponctuel, il est aussi possible de partager un service que l'on a créé à une autre personne.
Il suffit de lui communiquer l'URL (type https://user-aaaaaaaaaaaaaa-xxxxxxx-x.user.lab.sspcloud.fr/), ainsi que le mot de passe du service.
Le nom d'utilisateur reste **Onyxia**. Attention, il est recommandé de changer le mot de passe du service lors de son lancement (onglet _Security_) pour ne pas le faire fuiter.
Il faudra aussi décocher _Enable IP protection_ et _Enable network policy_ dans l'onglet _Security_.
Une seule personne à la fois peut se connecter à un service RStudio.

## S3

## Kubernetes

## Init

### PersonalInit

Un lien vers un script shell (enchaînement de commandes linux) qui est exécuté juste après le lancement du service.
Pratique pour automatiser la mise en place de certaines configurations.

Ce lien du script doit être accessible sur internet, par exemple sur [https://git.lab.sspcloud.fr/](https://git.lab.sspcloud.fr/) avec un projet public ou sur le [stockage S3](https://minio-console.lab.sspcloud.fr/) avec un fichier public.

[Exemple de script d'initialisation](https://git.drees.fr/drees_code_public/ressources/tutos/-/blob/diffusion/contenu/init.sh) qui clone un projet à partir d'une instance Gitlab privée, configure les options globales de RStudio, ouvre automatiquement le projet RStudio cloné, installe et sélectionne la correction orthographique française, personnalise les bribes de codes (_snippets_).
Vous pouvez également trouver un ensemble de scripts d'initialisation sur [notre repo github dédié](https://github.com/InseeFrLab/sspcloud-init-scripts/).

Attention: Le script est exécuté en tant que superutilisateur (_Root_) et les fichiers qu'il crée sont ainsi la propriété du superutilisateur.
Ceci génère des erreurs ensuite quand ces fichiers sont appelés, par exemple des fichiers de configuration de RStudio.
Pour rendre à l'utilisateur normal (qui s'appelle _onyxia_) les droit sur son dossier personnel :

```bash
chown -R ${USERNAME}:${GROUPNAME} ${HOME}
```

### PersonalInitArgs

Des options à passer au script d'initialisation, séparées par des espaces et que l'on peut ensuite appeler avec `$1`, `$2`...

Par exemple si on inscrit dans le champ _PersonalInitArgs_ `fichier1.txt fichier2.txt`, et qu'on utilise ce script d'initialisation :

```bash
#!/bin/bash
touch $1
touch $2
```

Le script créera via la commande `touch` deux fichiers `fichier1.txt` et `fichier2.txt`.

## Onyxia

## Resources

## Networking

## Security

### Password

C'est le mot de passe à saisir lorsqu'on ouvre un service, celui donné par "Copier le mot de passage" sur la page des services.
Il est fourni par le paramètre général "Mot de passe pour vos services" que l'on trouve dans "Mon Compte" > "Informations du compte", sauf si on en a défini un particulier au niveau du service.

### Enable IP protection

Si coché, le service n'est accessible que par une seule IP, à décocher si l'on souhaite travailler de deux endroits différents.

### Enable network policy

## Git

Pour apprendre à utiliser cet onglet, voir la [page dédiée](./version-control_fr.md).

Attention: Il n'est pas possible de cloner automatiquement un projet privé d'une instance privée (c'est-à-dire autre que gitlab.com et github.com).
Pour le faire, il faudra recourir à un script shell comme indiqué [ici](#init).

### Enabled

Si coché, configure Git et tente un clone au démarrage du service.

### Name

Le nom qui apparaîtra dans les commits (pas le nom d'utilisateur du compte Gitlab ou Github).

### Email

L'adresse email qui apparaîtra dans les commits (pas forcément le mail associé au compte Gitlab ou Github).

### Cache

### Token

Jeton d'accès défini sur la plateforme utilisée (Gitlab, Github...).

### Repository

L'URL obtenue sur la plateforme utilisée (Gitlab, Github...) en cliquant sur "Cloner" > HTTPS.

De type :

```
https://github.com/InseeFrLab/docs.sspcloud.fr.git
```

### Service

### Discovery

### Persistence

### Vault

Pour apprendre à utiliser cet onglet, voir la [page dédiée](./secrets_fr.md).
