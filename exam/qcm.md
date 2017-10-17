*NOM/PRENOM*:

*CLASSE*:

# Sujet "Bonnes pratiques du code"

## GitHub (7pts)

- Qu'est ce que Github Pages?
   - [ ] Un service de publication web
   - [ ] Le nom de la documentation officielle de Github
   - [ ] Ce service n'existe pas
   - [ ] aucune de ces réponses n'est juste

- Vrai ou faux ? il est possible de créer une « pull request » directement à partir de Github.
  -  [ ] Vrai
  -  [ ] Faux

- Qu'est ce que GitHub Gist?
  -  [ ] Un système de partage de dépots Git.
  -  [ ] Un système pour visualiser les commits.
  -  [ ] Un système de partage rapide d'un ou plusieurs fichiers.
  -  [ ] Rien de tout ça.

- Avoir un compte payant sur Github permet de:
  -  [ ] pouvoir créer des dépôts privés
  -  [ ] pouvoir avoir plus de collaborateurs
  -  [ ] pouvoir avoir une meilleure gestion des droits

- Vrai ou faux, sur Github on peut désactiver les pull requests:
  -  [ ] Vrai.
  -  [ ] Faux.

- Vrai ou faux, Sur GitHub il est possible de récupérer une copie de n'importe quel dépot, quel qu'il soit:
  - [ ] Vrai.
  - [ ] Faux.

- Vrai ou faux, GitHub est fourni avec un Kanban par défaut (A faire, En cours, Fait):
  - [ ] Vrai.
  - [ ] Faux.


## Git (13pts)

- Quelle commande git dois-t-on utiliser pour démarrer un dépôt?
  -  [ ] git init
  -  [ ] git start
  -  [ ] git clone
  -  [ ] git pull

- Qu'est ce qu'un commit ?
  -  [ ] un instantané d'un projet associé à un message
  -  [ ] un ajout de fichiers
  -  [ ] c'est le chemin vers un dépôt git
  -  [ ] aucune de ces réponses n'est juste

- Quelle commande git dois-t-on utiliser pour lister les modifications en cours?
  -  [ ] git list
  -  [ ] git list –new --modified
  -  [ ] git status
  -  [ ] git log

- Nous sommes sur la branche "feature". Quelle commande git utiliser pour se déplacer dans la branche "develop"?
  -  [ ] git branch develop
  -  [ ] git checkout -b develop
  -  [ ] git move develop
  -  [ ] aucune de ces commandes.

- "La branche develop n'existe pas". Quelle commande devez vous utiliser pour créer la branche "develop"?
  - git create develop
  - git branch develop
  - git checkout -b develop
  - En fait la commande précédente créait déjà la branche "develop".

- Quelle commande git utiliser pour afficher la localisation du dépot distant?
  -  [ ] git remote 
  -  [ ] git locate repository
  -  [ ] git remote -v
  -  [ ] aucune de ces commandes.
  
- Quelle commande Git pour configurer l'email git@esgi.fr?
 - git config user.mail git@esgi.fr
 - git config core.mail git@esgi.fr
 - git config user.email git@esgi.fr
 - aucune de ces commandes.

- Quand on effectue un git init, quel dossier est crée à la racine du dépot?
 - .gitconfig
 - .config
 - .git
 - aucun dossier n'est créé lors du git init.

- Il paraît qu'on recupère la configuration complète en utilisant la commande `git config --all`.
 - Non, c'est `git config --list`.
 - Non, c'est faux et `git config --list` aussi d'ailleurs.
 - Oui, en effet.

- Dans la commande `git commit -m`, l'argument "m" fait référence:
 - Aux fichiers modifiés lors du commit.
 - Au message de commit.
 - A la description du commit.
 - Cet argument n'existe pas, c'est un piège!

- Si on ajoute un fichier vide nommé "test" dans un dossier vide, est-ce que Git ajoutera le dossier?
  - Non, il faut que le fichier s'appelle ".gitkeep".
  - Oui bien sûr!
  - Tout dépend si le fichier "test" est vide ou non.

- Quels sont les 3 états d'un fichier dans un repository?


- Comment ajouter le remote "plop" localisé sur https://github.com/toto/tata.git?
  - git branch add plop https://github.com/toto/tata.git
  - git remote plop https://github.com/toto/tata.git
  - git remote add origin https://github.com/toto/tata.git
  - Toutes ces propositions sont fausses.
