# Utiliser des modèles d’IA dans Onyxia

Onyxia permet de connecter des **fournisseurs de modèles d’IA (AI providers)** à vos services interactifs.

Selon la configuration de votre organisation, vous pouvez utiliser des fournisseurs déjà disponibles sur votre instance ou ajouter vos propres fournisseurs. Vous choisissez ensuite les modèles que vous souhaitez rendre disponibles dans vos services.

Une fois configurés, vos fournisseurs et modèles peuvent être utilisés directement depuis les services compatibles lancés dans Onyxia.

### Comment ça fonctionne ?

Le principe peut être résumé en trois étapes :

**1. Connecter un fournisseur → 2. Choisir vos modèles → 3. Les utiliser dans vos services**

<br />

---

## 1. Accéder à vos fournisseurs d’IA

Rendez-vous dans :

**Mon compte → AI Providers**

Cette page regroupe les fournisseurs d’IA disponibles pour votre compte.

![Vue de la page AI Providers avec les fournisseurs disponibles et les modèles sélectionnés.](./img/ai-providers-overview.png)

<small>Retrouvez vos fournisseurs et modèles depuis My Account → AI Providers.</small>

<br />

Vous pouvez y retrouver deux types de fournisseurs :

### Fournisseurs proposés par votre organisation

Votre organisation peut mettre à disposition un ou plusieurs fournisseurs d’IA directement dans Onyxia.

Selon leur configuration, ils peuvent être **déjà connectés à votre compte**, ou nécessiter une authentification avant leur première utilisation.

Par exemple, la connexion peut être réalisée automatiquement avec votre compte Onyxia, ou nécessiter des identifiants fournis par le fournisseur.

### Fournisseurs personnalisés

Vous pouvez également ajouter votre propre fournisseur lorsque celui-ci est compatible avec Onyxia.

Cela vous permet par exemple d'utiliser un service d'IA externe auquel vous avez déjà accès.

<br />

---

## 2. Connecter un fournisseur

L'état de connexion est indiqué directement sur chaque fournisseur :

**Connected**  
Le fournisseur est prêt à être utilisé.

**Setup required**  
Une configuration ou une authentification est nécessaire avant de pouvoir l'utiliser.

**Connection error**  
Onyxia ne parvient pas à se connecter au fournisseur. Vérifiez vos informations de connexion ou réessayez.

Pour un fournisseur nécessitant une configuration, ouvrez **Manage** et renseignez les informations demandées.

> Les informations nécessaires dépendent du fournisseur et de la configuration choisie par votre organisation.

![États de connexion possibles d'un fournisseur d'IA dans Onyxia.](./img/ai-providers-status.png)

<small>Chaque fournisseur indique son état de connexion.</small>

<br />

---

## 3. Ajouter votre propre fournisseur

Sélectionnez **Add a new custom AI provider** depuis la page AI Providers.

Choisissez d'abord le type de fournisseur que vous souhaitez connecter, puis renseignez les informations nécessaires, par exemple :

-   le nom que vous souhaitez lui donner ;
-   l'URL de son API ;
-   votre clé API, lorsqu'elle est nécessaire.

Utilisez **Test connection** pour vérifier la connexion.

Une fois la connexion établie, Onyxia récupère les modèles disponibles auprès du fournisseur.

Vous pouvez alors sélectionner ceux que vous souhaitez utiliser et ajouter le fournisseur à votre compte.

![Formulaire de configuration d'un fournisseur d'IA personnalisé.](./img/ai-provider-add.png)

<small>Ajoutez vos informations de connexion et testez votre provider.</small>

<br />

---

## 4. Choisir les modèles disponibles

Un fournisseur peut donner accès à plusieurs modèles.

Depuis **AI Providers**, sélectionnez les modèles que vous souhaitez rendre disponibles dans vos services.

Vous n'avez donc pas besoin d'activer l'ensemble du catalogue proposé par le fournisseur : vous pouvez conserver uniquement les modèles dont vous avez besoin.

Vous pouvez modifier cette sélection à tout moment depuis la liste des fournisseurs ou depuis **Manage**.

![Sélection des modèles disponibles pour un fournisseur d'IA.](./img/ai-provider-model-selection.png)

<small>Choisissez les modèles que vous souhaitez utiliser.</small>

<br />

### Modèle par défaut

Vous pouvez également choisir un **modèle par défaut**.

Lorsqu'un service compatible avec les fournisseurs d'IA est lancé, ce modèle peut être utilisé comme choix initial.

Cela n'empêche pas de sélectionner un autre modèle depuis la configuration du service, s'il a été sélectionné dans la liste des fournisseurs.

<br />

---

## 5. Utiliser vos modèles dans un service

Une fois vos fournisseurs configurés, Onyxia rend leurs informations de connexion et les modèles sélectionnés disponibles aux **services interactifs compatibles**.

Vous pouvez ainsi utiliser vos modèles depuis votre environnement de travail sans avoir à reconfigurer manuellement votre fournisseur à chaque lancement.

Selon le service utilisé, vous pourrez également choisir ou changer le modèle utilisé.

> La manière dont les modèles sont utilisés dépend du service. Tous les services du catalogue ne prennent pas nécessairement en charge les fournisseurs d'IA.

![Configuration des modèles d'IA lors du lancement d'un service Onyxia.](./img/ai-providers-use-in-services.png)

<small>Retrouvez vos modèles lors de la configuration d'un service compatible.</small>

<br />

### Dans VS Code

Dans VS Code, ouvrez **Continue** depuis la barre d'onglets à gauche pour utiliser vos modèles.

### Depuis le terminal de VS Code, RStudio ou Jupyter

Dans chacun de ces services compatibles, ouvrez un terminal et lancez **OpenCode** avec la commande :

```bash
opencode
```

<br />

---

## 6. Gérer un fournisseur

Sélectionnez **Manage** sur un fournisseur pour retrouver ses paramètres.

Vous pouvez notamment :

**Connection details**  
Consulter les informations utilisées par Onyxia pour se connecter au fournisseur et tester la connexion.

**Manage models**  
Ajouter ou retirer les modèles que vous souhaitez utiliser.

**Documentation**  
Accéder à la documentation du fournisseur, de son API ou des modèles disponibles.

Pour un fournisseur géré par votre organisation, certaines informations peuvent être configurées par l'administrateur et ne pas être modifiables.
