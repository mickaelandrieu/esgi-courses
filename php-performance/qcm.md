*NOM/PRENOM* (*CLASSE*):
## Sujet "Performance PHP"

#### Notation:
* 1 point par bonne réponse
* 1/2 point par bonne réponse incomplète
* 0 point si non répondu
* -0,25 point par réponse fausse

Si la note est supérieure à 20, un bonus sera appliquée sur la note finale du module.

Si la note est inférieure à 0, aucun malus ne sera appliqué.

### PHP, Symfony et WebProfiler

- Le temps exclusif d'une fonction peut-il être supérieur au temps inclusif ?
  -  [ ] Oui
  -  [ ] Non

- À votre avis, quelle est la tâche la plus consommatrice lorsque l'on souhaite afficher une page web ?
  -  [ ] La génération de la page côté serveur
  -  [ ] La génération de la page côté client (dans le navigateur)
  -  [ ] Le transfert de la page web sur le réseau internet

- Par défaut, Symfony établit des profils de performance en production.
  -  [ ] Oui
  -  [ ] Non

- En utilisant le Web Profiler de Symfony Framework, il est possible de :
  -  [ ] Connaître la mémoire et le temps d'exécution nécessaire au rendu de la page
  -  [ ] Connaître le nombre de requêtes SQL réalisées par l'ORM Doctrine
  -  [ ] Connaître le nombre d'appels d'une fonction spécifiée
  -  [ ] Comparer deux profils entre eux

- Vrai ou Faux ? Il est possible d'accéder au Web Profiler... sans passer par la barre de développement Symfony !
  - [ ] Vrai
  - [ ] Faux

- Quel composant Symfony est principalement utilisé pour générer le profil de Performance dans le Web Profiler ?
  - [ ] Profiler
  - [ ] HTTP Kernel
  - [ ] StopWatch
  - [ ] DependencyInjection

- Avec le composant StopWatch, il est possible de :
  - [ ] Récupérer le temps d'accès au système de fichier
  - [ ] Récupérer le temps d'accès au processeur
  - [ ] Connaître la mémoire vive consommée
  - [ ] Connaître le temps d'exécution d'une fonction précise

- Est-il possible de prendre de multiples mesures facilement avec le Web Profiler ?
  - [ ] Oui
  - [ ] Non

### Blackfire en tant que Profiler

- Dans un profil Blackfire, le bloc de gauche :
  - [ ] contient la liste de toutes les fonctions
  - [ ] possède un moteur de recherche
  - [ ] pour chaque fonction, permet d'accéder aux fonctions appelantes et appelées
  - [ ] montre les fonctions les moins performantes en haut de la liste

- Dans un profil Blackfire, à quoi correspond le chemin en surbrillance dans le graphe ?
  - [ ] Il est le plus consommateur de ressources matérielles
  - [ ] Il comprend les fonctions les plus coûteuses
  - [ ] Il contient les seules fonctions exécutées lors de l'analyse du script PHP

- Vrai ou Faux ? Il est possible d'obtenir un graphe en fonction de chaque métrique.
  - [ ] Vrai
  - [ ] Faux

- À quoi sert Blackfire Companion ?
  - [ ] Il récolte les métriques pendant l'exécution du code PHP
  - [ ] Il permet de déclencher une analyse à partir d'un navigateur web
  - [ ] Il nettoie et anonymise les données envoyées à la plateforme Blackfire.io

- Pour pouvoir déclencher l'analyse d'une application installée en local à l'aide du navigateur, quels outils doivent être impérativement installés et configurés ?
  - [ ] l'Extension PHP Blackfire
  - [ ] le Client Blackfire
  - [ ] l'Agent Blackfire
  - [ ] le Companion Blackfire

- Quel est le rôle de l'Extension PHP Blackfire ?
  - [ ] Elle envoie des données aux serveurs de Blackfire.io
  - [ ] Elle anonymise et compresse les données avant l'envoi sur les serveurs de Blackfire.io
  - [ ] Elle récolte les données et métriques durant l'exécution du code PHP

- Quelle est la commande du Client Blackfire capable de profiler les applications console ?
  - [ ] blackfire profile <...>
  - [ ] blackfire run <...>
  - [ ] blackfire curl <...>
  - [ ] Aucune des réponses précédentes n'est juste !

- Vrai ou faux ? Blackfire est capable de profiler la soumission d'un formulaire d'une application PHP.
  - [ ] Vrai
  - [ ] Faux

- Dans un graphe **de comparaison** Blackfire, de quelle couleur sont les fonctions dont la performance aura été améliorée ?
  - [ ] Rose
  - [ ] Bleu

- Vrai ou faux ? Il est possible de partager un profil ou un graphe de comparaison Blackfire.
  - [ ] Vrai
  - [ ] Faux

### Suivi et test de la performance avec Blackfire

- Quel est le nom du fichier YAML dans lequel on doit écrire nos tests ?
  - [ ] blackfire.yml
  - [ ] .blackfire.yml
  - [ ] blackfire_tests.yml
  - [ ] .travis.yml

- Vrai ou Faux ? Il est possible d'exécuter des tests Blackfire avec le plan "Hack" de Blackfire.
  - [ ] Vrai
  - [ ] Faux

- Quelles sont les deux fonctions de Blackfire permettant la comparaison entre deux profils ?
  - [ ] compare
  - [ ] percent
  - [ ] diff
  - [ ] is_better

- Vrai ou Faux ? Les tests de comparaison sur le temps ou la mémoire sont robustes.
  - [ ] Vrai
  - [ ] Faux
