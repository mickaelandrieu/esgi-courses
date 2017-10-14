# Gérer un conflit git

Il arrivera quand on travaille en équipe que vous soyez en situation où plusieurs membres travaillent sur les mêmes fichiers, voir sur les mêmes ligne d'une fichier. Lors du merge de la branche de fonctionnalité dans la branche master, Git ne saura pas quoi et il faudra donc prendre décider ce qu'il convient de faire.

## Création d'un conflit

> Vous pouvez effectuer cette partie avec le terminal ou GitKraken

- Ouvrir le terminal et accéder au dossier "magnificient-website" pour créer une nouvelle branche git appelée "conflict" (`git checkout -b conflict` pour rappel).
- Sur cette branche "conflict", ouvrir le fichier "README.md" et changer la première ligne par "# Conflict commit from *conflict* branch".
- Ajouter le fichier.
- Commiter avec le message "Commit from conflict branch"
- Se déplacer sur la branche "master" (`git checkout master` pour rappel).
- Ouvrir le fichier "README.md" et changer la première ligne par "# Conflict commit from *master* branch".
- Ajouter le fichier.
- Commiter avec le message "Commit from master branch".
- Merger la branche "conflict" dans master: `git merge conflict`:

![conflict](https://user-images.githubusercontent.com/1247388/31576853-3b1d9e9c-b104-11e7-8628-55ae4cba7f1e.png)

![conflict-gitkraken](https://user-images.githubusercontent.com/1247388/31576872-7584d514-b104-11e7-83f0-1223d116f6de.png)

Cet exemple est volontairement simpliste: Git ne sait tout simplement pas quelle "première" ligne il doit conserver!

On a plusieurs choix:
* Conserver le choix de la branche "HEAD", c'est à dire celle où on se trouve ("master" dans ce cas);
* Conserver le choix de la branche "conflict" qu'on souhaite merger/ajouter dans "master";
* Conserver les 2;
* Tout changer et faire un choix complètement différent (râre, mais possible);
 
> Ce choix appartient au développeur/contributeur qui peut et devrait communiquer avec les autres personnes qui ont effectué des changements s'il n'est pas en capacité de prendre une décision.

![conflict_management](https://user-images.githubusercontent.com/1247388/31576911-4c94d0fe-b105-11e7-86ab-c424537a6d96.png)

Dans note cas, nous allons conserver la modification qui arrive de la branche "conflit".
- Ouvrir le fichier "README.md" et ne conserver que les lignes 6 & 8.
- Ajouter le fichier.
- Exécuter la commande `git commit`: un commit de résolution de conflit a été créé.

## La différence entre git merge et git rebase

Lorsque l'on souhaite rappatrier des fonctionnalités issues d'une autre branche git, nous avons 2 choix:
* Effectuer un `git merge`;
* Effectuer un `git rebase`;

Il est assez difficile d'expliquer avec des mots la différence entre les 2. Voici un petit schéma qui vous aidera à comprendre la différence.

![merge-or-rebase](https://user-images.githubusercontent.com/1247388/31576971-57082058-b106-11e7-9650-ab381db195a6.jpg)

Quand on merge, la gestion des conflits se fait lors du merge alors que le rebase permet d'incorporer les modifications "commit par commit". C'est donc plus fin, plus propre, mais également un peu plus compliqué à gérer quand on débute.

Si on avait voulu gérer le conflit de la façon la plus propre possible, voici ce qu'il aurait fallu faire:
* Aller sur la branche "conflict" et exécuter la commande `git rebase master`.
* Régler le conflit.
* Retourner sur la branche "master" et merger "conflict" dedans (`git merge conflict`).

