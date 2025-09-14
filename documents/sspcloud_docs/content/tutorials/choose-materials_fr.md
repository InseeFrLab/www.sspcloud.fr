# Quels supports utiliser pour les formations ?

Lors de la conception de supports de formation efficaces, il est crucial de choisir des formats qui engagent les apprenants et améliorent leur compréhension. Bien que les PDFs, les présentations et les vidéos soient des moyens utiles de présenter des informations, nous nous concentrerons sur les environnements interactifs, car ils sont idéaux pour la formation pratique. Les environnements interactifs permettent aux apprenants d'appliquer les concepts immédiatement, de tester le code en temps réel et de participer activement à leur apprentissage, ce qui favorise une compréhension approfondie et une meilleure rétention des compétences.

Dans ce qui suit, nous comparerons différents environnements interactifs en fonction du langage utilisé. Une méthode de déploiement d'un site statique sur la plateforme à l'aide de Quarto sera également présentée.

## Utilisation de Python

🐍 En Python, les notebooks Jupyter, également disponibles dans VSCode, s'imposent comme le choix incontournable. Avec le support des médias riches, des widgets et de nombreuses extensions, ils permettent d'intégrer des graphiques interactifs, des tableaux de données et même des formulaires pour les exercices.

![Exemple avec jupyter](../img/jupyter.png)

![Exemple avec vscode](../img/vscode.png)

## Utilisation de R

®️ En R, nous pouvons utiliser soit les notebooks R Markdown, soit LearnR, qui propose des tutoriels interactifs intégrés dans des documents R Markdown. Les deux combinent explications, code et visualisation dans un document interactif. Cependant, même si LearnR permet de générer des éléments interactifs et plus complexes tels que des quiz, ce qui le rend idéal pour les tutoriels débutants, il nécessite le déploiement d'un serveur Shiny, ce qui peut être coûteux. De plus, dans LearnR, les cellules ne communiquent pas à l'échelle de tout l'environnement ; ainsi, la définition de variables globales ou la gestion de l'état devient difficile. Cette limitation réduit l'efficacité de LearnR pour des tutoriels complexes où un état connecté et évolutif est nécessaire pour progresser à partir des étapes précédentes.

Dans l'ensemble, bien que LearnR offre un environnement interactif pour R adapté aux exercices simples, les notebooks R Markdown offrent une solution plus robuste, flexible et largement utilisée. Pour R, les sessions interactives locales ou R Markdown traditionnel sont souvent plus pratiques pour des formations complètes.

C'est pourquoi, pour des supports de formation sophistiqués nécessitant une progression fluide et une gestion de l'état, les notebooks restent le choix privilégié pour les tutoriels en Python ou en R.

![Exemple avec rstudio](../img/rstudio.png)
