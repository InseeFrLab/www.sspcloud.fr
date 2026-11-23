# Contrôle de version

## Pourquoi utiliser le contrôle de version ?

Le Datalab est une plateforme mutualisée : les ressources utilisées par les services sont partagées entre les différents utilisateurs. A ce titre, les services du Datalab fonctionnent sur le modèle des conteneurs éphémères : dans un usage standard, l'utilisateur lance un service, réalise des traitements de données, sauvegarde le code qui a permis de réaliser ces traitements, et supprime l'instance du service. Cette sauvegarde du code est grandement facilitée par l'usage du contrôle de version.

Cette considération de performance ne doit cependant pas être vue comme une contrainte : le contrôle de version est une bonne pratique essentielle de développement. Les bénéfices sont nombreux, aussi bien à titre individuel :

-   le projet local est synchronisé avec un serveur distant, rendant la perte de code quasi impossible ;
-   l'historique complet des choix et modifications effectuées sur le projet est conservé ;
-   l'utilisateur peut parcourir cet historique pour rechercher les modifications qui ont pu créer des erreurs, et décider à tout moment de revenir à une version précédente du projet, ou bien de certains fichiers.

… que dans le cadre de projets collaboratifs :

-   le travail simultané sur un même projet est possible, sans risque de perte ;
-   l'utilisateur peut partager ses modifications tout en bénéficiant de celles des autres ;
-   il devient possible de contribuer à des projets open-source, pour lesquels l'usage de Git est très largement standard.

Avertissement: Ce tutoriel vise à présenter comment le contrôle de version peut être facilement implémenté grâce aux outils présents sur le Datalab. Il ne présente pas le fonctionnement de Git et présuppose donc une certaine familiarité avec l'outil. De nombreuses ressources en ligne peuvent servir d'introduction ; les utilisateurs de R pourront par exemple suivre [cette formation](https://inseefrlab.github.io/formation-bonnes-pratiques-git-R/) et les utilisateurs de Python ce [chapitre de cours](https://pythonds.linogaliana.fr/content/git/exogit.html).

## Connecter vos comptes Git au Datalab

Bien qu'une utilisation hors-ligne de Git soit possible, tout l'intérêt du contrôle de version réside dans la synchronisation de la copie locale d'un projet (_clone_) avec un dépôt distant (_remote_), hébergé sur une forge logicielle comme [GitHub](https://github.com), [GitLab](https://about.gitlab.com), [Forgejo](https://forgejo.org) ou [Bitbucket](https://bitbucket.org).

Le Datalab vous permet de connecter une fois pour toutes vos comptes sur ces forges, depuis votre compte. Vos services reçoivent alors les identifiants nécessaires pour cloner, récupérer et pousser vos modifications, et vous pouvez choisir les dépôts à cloner au lancement d'un service.

### Comment ça marche ?

**1. Connecter un profil Git → 2. Choisir vos dépôts au lancement d'un service → 3. Travailler avec Git dans le service**

---

### 1. Accéder à vos profils Git

Rendez-vous dans :

**Mon compte → Git**

La section **Profils Git** présente une carte par forge, avec son statut :

-   **Connecté** : le compte est prêt à l'emploi, la carte indique le compte avec lequel vous êtes connecté ;
-   **Connexion requise** : connectez-vous, ou ajoutez un jeton d'accès, pour utiliser cette forge ;
-   **Reconnexion requise** : votre session ou votre jeton a expiré, reconnectez-vous ou remplacez le jeton.

Vous pouvez trouver deux types de profils :

-   les profils **fournis par votre organisation**, par exemple la [forge GitLab du SSP Cloud](https://git.lab.sspcloud.fr) : sélectionnez **Se connecter** et autorisez le Datalab dans la fenêtre qui s'ouvre ;
-   les **profils Git personnalisés** que vous ajoutez vous-même, voir ci-dessous.

Note: Si rien ne se passe en sélectionnant **Se connecter**, votre navigateur a probablement bloqué la fenêtre : autorisez les fenêtres pop-up pour le Datalab et réessayez. Une nouvelle authentification peut être demandée lorsque vous démarrez une nouvelle session sur le Datalab.

### 2. Ajouter votre propre profil Git

Sélectionnez **Ajouter un profil Git personnalisé**, puis :

1. choisissez le type de forge (GitHub, GitLab, Forgejo ou Bitbucket) et, pour une instance auto-hébergée, saisissez son URL ;
2. définissez si vous le souhaitez un nom personnalisé ;
3. collez un **jeton d'accès personnel** (_token_) généré sur la forge, la fenêtre contient un lien vers la page qui permet de le créer.

Le jeton doit donner accès en lecture à votre profil, et en lecture et écriture à vos dépôts. Par exemple, sur GitHub, générez-le depuis [cette page](https://github.com/settings/tokens) avec le droit _repo_. Privilégiez un délai d'expiration court : la carte vous prévient avant que le jeton n'expire, et **Gérer** permet de le remplacer.

Le jeton est vérifié auprès de la forge avant d'être enregistré. Pour retirer un profil, ouvrez **Gérer** puis **Supprimer le profil** : le jeton existe toujours sur la forge, révoquez-le depuis celle-ci si vous n'en avez plus besoin.

Avertissement: Veillez à utiliser l'adresse e-mail associée à votre compte sur la forge dans les informations de votre compte. C'est cette adresse qui relie effectivement les commits que vous effectuez à votre compte.

---

### 3. Choisir vos dépôts au lancement d'un service

Dans le formulaire de lancement d'un service compatible (Jupyter, RStudio, VSCode…), ouvrez la section **Git** :

-   **Mes dépôts** : choisissez un **Profil Git**, puis recherchez vos dépôts et sélectionnez ceux à cloner, ainsi qu'une **Branche** si vous ne voulez pas celle par défaut ;
-   **URL Git** : collez l'URL d'un dépôt. Un dépôt qui n'est pas sur l'une de vos forges connectées est cloné sans authentification : il doit donc être public.

Les dépôts sélectionnés sont clonés dans l'espace de travail du service à son démarrage.

Avertissement: N'indiquez jamais d'identifiant ni de jeton dans l'URL d'un dépôt : ils seraient enregistrés avec la configuration de lancement. Connectez plutôt la forge.

### Travailler avec Git dans le service

Les identifiants de vos profils Git connectés sont transmis au service : `git clone`, `git pull` et `git push` en HTTPS fonctionnent depuis le terminal sans saisir de jeton.

### Via des interfaces graphiques intégrées

Les principaux services de production de code disponibles sur le Datalab disposent d'une interface graphique pour faciliter l'utilisation de Git :

-   RStudio : RStudio propose une interface graphique native et assez complète pour Git. La [documentation utilitR](https://www.book.utilitr.org/03_Fiches_thematiques/Fiche_git_utilisation) présente son fonctionnement en détail.
-   Jupyter : l'[extension jupyterlab-git](https://github.com/jupyterlab/jupyterlab-git) offre une interface (assez basique) entre Jupyter et Git.
-   VSCode : VSCode propose nativement une interface graphique bien intégrée avec Git et GitHub. Une [documentation détaillée](https://code.visualstudio.com/docs/editor/versioncontrol) présente les possibilités de l'outil.

Avertissement: Les interfaces graphiques facilitent la prise en main de Git mais ne remplacent jamais complètement l'utilisation de l'outil via un terminal en raison d'une intégration nécessairement imparfaite. Il est donc utile de se familiariser le plus tôt possible avec l'utilisation de Git via le terminal.
