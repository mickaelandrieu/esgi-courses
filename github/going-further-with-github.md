# Aller plus loin avec GitHub

## Gestion de projets avec GitHub

- Se connecter à Github (https://github.com) avec ses identifiants.
- Accéder au dépôt créé lors du premier tp (Normalement accessible sur https://github.com/votre-login/github-discovery).
- Cliquer sur l'onglet "Projects", puis sur le bouton "Create a project".
- Créer le projet "Semaine thématique 'Bonnes pratiques du Code' " avec une description libre.
- Ajouter 3 colonnes: "A faire", "En cours" et "Terminé".
- Créer les tâches suivantes (à l'aide de l'icône "+" dans la colonne "A faire"):
    - "Mettre en place un projet en mode Kanban avec GitHub Project";
    - "Partager un ficher avec GitHub Gist";
    - "Publier un site web avec GitHub Pages";
    - "Forker le dépôt https://github.com/github/training-kit";
    - "Transformer une Carte en Issue";
- Déplacer la Carte "Mettre en place un projet en mode Kanban avec GitHub Project" dans la colonne "En cours".
- Prendre une capture d'écran.

## Partage de fichiers avec GitHub Gist

- Déplacer la tâche "Partager un ficher avec GitHub Gist" dans la colonne "En cours".
- Se connecter sur GitHub Gist (https://gist.github.com/) et créer un gist privé contenant le fichier "Calculator.php" qui contiendra le contenu suivant:

```php
<?php

namespace SolvoLabs;

/**
 * This class is used to realize some basic calculations.
 * For training purposes only, use bc_math functions instead.
 * @author Mickaël Andrieu <mickael.andrieu@solvolabs.com>
 */
class Calculator
{
    /**
     * @var float The result to display.
     */
    private $result;

    /**
     * Creates the Calculator.
     *
     * @param float $initialValue
     */
    public function __construct($initialValue = 0)
    {
        $this->result = $initialValue;
    }

    /**
     * @param float $number A number.
     */
    public function add($number)
    {
        $this->result = $this->result + $number;
    }

    /**
     * @param float $number A number.
     */
    public function minus($number)
    {
        $this->result = $this->result - $number;
    }

    /**
     * @param float $number A number.
     */
    public static function multiply($number)
    {
        $this->result = $this->result * $number;
    }

    /**
     * @param float $number A number.
     */
    public static function divideBy($number)
    {
        $this->result = $this->result / $number;
    }

    /**
     * If the object is returned, the result should be displayed.
     *
     * @return string
     */
    public function result()
    {
        return $this->result;
    }
}
```

- Editer le gist pour ajouter une description: "this is a PHP file".
- Effectuer une capture d'écran.
- Déplacer la tâche "Partager un ficher avec GitHub Gist" dans la colonne "Terminé".

## Publication de site web avec GitHub Pages

- Déplacer la tâche "Publier un site web avec GitHub Pages" dans la colonne "En cours".
- Publier le site web de votre dépôt avec GitHub Pages.

> L'information pour y parvenir est disponible ici: [https://services.github.com/on-demand/github-cli/](https://services.github.com/on-demand/github-cli/). Il n'est pas utile
  de faire leur tutoriel au complet dans le cadre de ce TP.

- Une fois le site publié:
  - Déplacer la tâche "Publier un site web avec GitHub Pages" dans la colonne "Terminé".
  - Prendre une capture d'écran du site publié.

## Copier un dépôt existant sur GitHub: le fork

Un fork désigne une copie d'un dépôt. En effet, par défaut il n'est pas possible de faire de commit sur un dépôt qui ne nous appartient pas. Du coup, GitHub a introduit cette notion de fork qui permet de se retrouver avec un dépôt sur lequel on aura la permission d'effectuer des modifications.

- Déplacer la tâche "Forker le dépôt https://github.com/github/training-kit" dans la colonne "En cours".
- Accéder au dépôt (Accessible sur https://github.com/github/training-kit) et cliquer sur le bouton "Fork".

> Vous avez donc maintenant votre propre dépôt accessible sur https://github.com/github/votre-login/training-kit

- Accéder à ce nouveau dépôt, éditer le fichier "README.md" pour le vider avec le message de commit suivant: "Empty README on my fork":

![fork](https://user-images.githubusercontent.com/1247388/31525351-09ccc9d4-afc0-11e7-862e-4852feb03175.png)

- Prendre une capture d'écran.
- Déplacer la tâche "Forker le dépôt https://github.com/github/training-kit" dans la colonne "Terminé".

## Transformer une Carte de projet GitHub en Issue

- Créer une nouvelle carte "Captures d'écran" dans la colonne "A faire".
- Transformer la carte en issue à l'aide de l'option "Convert to issue" dans le menu déroulant.
- Accéder à l'issue en cliquant sur le lien (Normalement accessible sur https://github.com/votre-login/github-discovery/issues/1).
- Editer l'issue et uploader toutes les captures d'écran réalisées.
- Clore l'issue.
- Déplacer la carte/issue dans la colonne "Terminé".