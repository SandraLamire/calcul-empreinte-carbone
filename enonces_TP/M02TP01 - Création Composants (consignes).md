# Objectifs

Créer des composants qui accueilleront les différentes parties de l'application

# Niveau 1

- Créer un composant `header` qui contiendra le titre de l'application 
- Créer un composant `footer` qui contiendra le nom de l'auteur et la date de création de l'application
- Créer un composant `carbon-footprint` qui contiendra le reste de l'application
- Vider la page `app.component.html` de son contenu
- Dans la page `app.component.html`, utiliser les composants créés précédemment

# Niveau 2

- Créer un composant `carbon-footprint-form` qui contiendra le formulaire de saisie des données
- Créer un composant `carbon-footprint-result` qui contiendra le résultat du calcul de l'empreinte carbone
- Dans le composant `carbon-footprint`, utiliser les composants créés précédemment

# Niveau 3

- Utiliser les différents hooks pour afficher dans la console le cycle de vie du composant `carbon-footprint`

__________________________________________________________________________________________________

# Niveau 1
- Étape 1: Créer un composant header

Ouvrez un terminal et exécutez la commande suivante pour générer le composant header :
ng generate component header

- Étape 2: Créer un composant footer
Exécutez la commande suivante pour générer le composant footer :
ng generate component footer

- Étape 3: Créer un composant carbon-footprint
Exécutez la commande suivante pour générer le composant carbon-footprint :
ng generate component carbon-footprint

- Étape 4: Vider la page app.component.html
Dans le fichier app.component.html, supprimez tout le contenu pour le moment.

- Étape 5: Utiliser les composants dans app.component.html
Modifiez le fichier app.component.html pour utiliser les composants header, carbon-footprint, et footer que vous venez de créer :

html

<app-header></app-header>
<app-carbon-footprint></app-carbon-footprint>
<app-footer></app-footer>

Ainsi, votre app.component.html devrait maintenant ressembler à ceci :

html

<app-header></app-header>
<app-carbon-footprint></app-carbon-footprint>
<app-footer></app-footer>

C'est tout pour le niveau 1. Vous avez créé les composants de base et les avez utilisés dans votre application Angular.

# Niveau 2
- Étape 1: Créer un composant carbon-footprint-form
Exécutez la commande suivante pour générer le composant carbon-footprint-form :
ng generate component carbon-footprint-form

- Étape 2: Créer un composant carbon-footprint-result
Exécutez la commande suivante pour générer le composant carbon-footprint-result :
ng generate component carbon-footprint-result

- Étape 3: Utiliser les composants dans carbon-footprint
Dans le fichier carbon-footprint.component.html, utilisez les composants carbon-footprint-form et carbon-footprint-result que vous venez de créer. Par exemple :

html

<app-carbon-footprint-form></app-carbon-footprint-form>
<app-carbon-footprint-result></app-carbon-footprint-result>

Assurez-vous que carbon-footprint-form contient le formulaire de saisie des données et carbon-footprint-result affiche le résultat du calcul de l'empreinte carbone.

# Niveau 3
Pour afficher le cycle de vie du composant carbon-footprint, vous pouvez utiliser les hooks du cycle de vie d'Angular. Voici comment procéder :

- Étape 1: Importer les modules nécessaires
Dans le fichier carbon-footprint.component.ts, importez les modules OnInit, OnChanges, 
AfterViewInit, etc. en fonction des hooks que vous souhaitez utiliser :

import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';

- Étape 2: Implémenter les interfaces
Implémentez les interfaces correspondant aux hooks que vous souhaitez utiliser dans votre composant. Par exemple, pour le hook OnInit, ajoutez implements OnInit à la classe du composant :

export class CarbonFootprintComponent implements OnInit {
  // ...
}

- Étape 3: Utiliser les hooks
Ajoutez les méthodes correspondantes aux hooks dans votre classe. Par exemple, pour ngOnInit, ajoutez la méthode ngOnInit() :

ngOnInit() {
  console.log('ngOnInit - Component is initialized');
}

Vous pouvez répéter cette étape pour d'autres hooks tels que ngOnChanges, ngAfterViewInit, etc.

Cela affichera les messages dans la console en fonction du cycle de vie du composant.

C'est tout ! Vous avez créé des composants Angular et utilisé les hooks du cycle de vie pour surveiller leur cycle de vie. Vous pouvez personnaliser davantage ces hooks en fonction de vos besoins. 