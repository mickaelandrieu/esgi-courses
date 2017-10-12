# Découverte de GitKraken: un client graphique pour Git

GitKraken est gratuit en version non commerciale et a le mérite d'être disponible sur tous les systèmes d'exploitation, ce qui n'est malheureusement pas encore le cas du client GitHub desktop.

L'idée de ce TP est de comprendre que si l'interface du terminal peut faire peur, il est en général bien plus efficace et rapide que n'importe quelle application visuelle!

## Installation

* Accéder au site de GitKraken: [https://www.gitkraken.com/](https://www.gitkraken.com/)

## Travaux pratiques (rendus attendus!)

### Création de commit

* Créer un dossier "git-kraken".
* Ouvrir le logiciel "GitKraken" et initialiser Git dans le dossier nouvellement créé.
* Dans le dossier "git-kraken", éditer le fichier "README.md" généré par GitKraken et ajouter du contenu.
* Commiter le changement avec le message de commit suivant: "Mon premier commit avec GitKraken".
* Effectuer une première capture d'écran.

![first-commit-kraken](https://user-images.githubusercontent.com/1247388/31522417-0119df0a-afae-11e7-8a8f-279a1240ccb1.png)

### Création de branche

* A partir de la branche "master", créer la branche "dev".
* Ajouter un nouveau fichier "LICENSE.md" qui contiendra le contenu de la licence MIT.

> La license MIT est disponible sur Wikipedia: [https://en.wikipedia.org/wiki/MIT_License#frb-inline](https://en.wikipedia.org/wiki/MIT_License#frb-inline)

* Commiter le fichier nouvellement créé sur la branche "dev".
* Ensuite afficher le contenu du commit en mode "Diff View".
* Effectuer une seconde capture d'écran.

![comit](https://user-images.githubusercontent.com/1247388/31522819-33d3f65e-afb0-11e7-8a5b-d55c1b120320.png)

* Repasser maintenant sur la branche "master" et Sélectionner l'option "View all files": on ne doit pas voir le fichier "LICENSE.md".
* Effectuer une dernière capture d'écran.

![back-on-master-branch](https://user-images.githubusercontent.com/1247388/31522964-011ddbd4-afb1-11e7-930a-b74d07cc224c.png)

> Les captures d'écran pourront être demandées par l'enseignant, dans l'incapacité de les fournir un malus sera appliqué sur l'exam de fin de module.