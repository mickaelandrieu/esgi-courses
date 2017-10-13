# Travailler à plusieurs sur GitHub

Jusque là nous avons travaillé avec un dépot (ou encore "repository") local sur Git et GitHub,
et sur un dépot distant sur GitHub. Mais comment communiquer en local
avec un dépôt qui est sur internet, comme celui que nous avons créé sur GitHub?

Ce TP est l'occasion d'introduire la notion de `remote` git.

Evidemment un "remote" n'est pas propre à GitHub, il existe d'autres plateformes d'hébergement
de projets git telles que BitBucket ou encore GitLab. Vous pouvez même créer vos propres serveurs Git
et les rendre accessibles sur le réseau, ce que font beaucoup d'entreprises.

Travailler sur un dépot distant présente deux avantages:

- Pouvoir travailler à plusieurs sur un même projet;
- Ne pas perdre son travail si on a un problème en local;

## Revoir les commandes principales de Git

- Accéder à ce tutoriel rapide [https://try.github.io](https://try.github.io) et le terminer.
- Effectuer une capture d'écran.

## Configuration des remotes

Un remote représente le chemin vers un dépot distant. Un projet git peut avoir plusieurs remote identifiés
par des noms.

Par exemple, le remote "origin" pourraît rediriger vers le dépot principal d'un projet sur GitHub quand le remote "mickael"
pourraît rediriger vers le fork (la copie donc) de ce projet Github (https://github.com/mickael/le-projet.git).

## Collaborer sur GitHub en mode CLI

### Récupérer un dépot distant (sur GitHub)

Quand on souhaite récupérer un projet sur GitHub, on effectue un clone du dépot en local.

- Ouvrir un terminal et executer la commande suivante:

```
git clone https://github.com/mickaelandrieu/magnificient-website.git
```

- Que s'est-il passé?
- Exécuter les commandes `git remote` puis `git remote -v`.
- Accéder à GitHub, se connecter et forker le dépot (Accessible sur [https://github.com/mickaelandrieu/magnificient-website](https://github.com/mickaelandrieu/magnificient-website)).
- Dans le terminal, exécuter la commande `git remote add mon-remote https://github.com/votre-login/magnificient-website`.
- Exécuter les commandes `git remote` puis `git remote -v`.
- Que s'est-il passé?

> Si vous voulez en savoir plus sur les remotes, se référer à la documentation officielle: [https://git-scm.com/book/fr/v1/Les-bases-de-Git-Travailler-avec-des-d%C3%A9p%C3%B4ts-distants](https://git-scm.com/book/fr/v1/Les-bases-de-Git-Travailler-avec-des-d%C3%A9p%C3%B4ts-distants).

### Envoyer du code vers un dépôt distant (sur GitHub)

Le but ici est d'effectuer une modification sur le fork du dépot "magnificient-website" en local et de la rendre disponible sur Github.

- Dans le dossier "magnificient-website", changer le contenu du fichier "README.md"
  - Supprimer tout le contenu et le remplacer par le texte suivant "# This is an update from local"
- Ajouter et commiter la modification avec le message suivant: "first commit available on GitHub"
- Exécuter la commande suivante: `git push mon-remote master` et donner les informations d'identification demandées par le terminal.
- Accéder à votre projet sur GitHub (Accessible sur https://github.com/votre-login/magnificient-website).
- Effectuer une capture d'écran.
- Que s'est-il passé?

### Récupérer du code vers un dépôt distant (à partir de GitHub)

Le but ici est de synchroniser le dépot local avec la version distante sur GitHub.

- Dans GitHub et sur votre dépot, re-modifier le fichier README.md et ajouter le contenu suivant à la ligne 2: "## Edité à partir de GitHub".
- Commiter avec le message de commit suivant: "second commit created in GitHub").
- Dans le terminal et dans le dossier "magnificient-website" exécuter la commande `git pull mon-remote master`.
- Exécuter la commande `git log` et effectuer une capture d'écran de la fenêtre du terminal.
- Que s'est-il passé?

## Collaborer sur GitHub avec GitKraken

### Récupérer un dépot distant (sur GitHub)

### Envoyer du code vers un dépôt distant (sur GitHub)

### Récupérer du code vers un dépôt distant (à partir de GitHub)
