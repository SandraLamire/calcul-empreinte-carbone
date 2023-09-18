# Objectifs

Créer des composants qui accueilleront les différentes parties de l'application

# Niveau 1

- Créer un composant `header` qui contiendra le titre de l'application
    - Dans un terminal, se placer dans le répertoire du projet `ng g component header`
- Créer un composant `footer` qui contiendra le nom de l'auteur et la date de création de l'application
    - Dans un terminal, se placer dans le répertoire du projet `ng g component footer`
- Créer un composant `carbon-footprint` qui contiendra le reste de l'application
    - Dans un terminal, se placer dans le répertoire du projet `ng g component carbon-footprint`
- Vider la page `app.component.html` de son contenu
- Dans la page `app.component.html`, utiliser les composants créés précédemment
```html
<app-header></app-header>
<app-carbon-footprint></app-carbon-footprint>
<app-footer></app-footer>
```

# Niveau 2

- Créer un composant `carbon-footprint-form` qui contiendra le formulaire de saisie des données
    - Dans un terminal, se placer dans le répertoire du projet `ng g component carbon-footprint-form`  
- Créer un composant `carbon-footprint-result` qui contiendra le résultat du calcul de l'empreinte carbone
    - Dans un terminal, se placer dans le répertoire du projet `ng g component carbon-footprint-result`
- Dans le composant `carbon-footprint`, utiliser les composants créés précédemment
    - Ouvrir le fichier `carbon-footprint.component.html`
```html
<p>carbon-footprint works!</p>
<app-carbon-footprint-form></app-carbon-footprint-form>
<app-carbon-footprint-result></app-carbon-footprint-result>
```

# Niveau 3

- Utiliser les différents hooks pour afficher dans la console le cycle de vie du composant `app-carbon-footprint`
    - Ouvrir le fichier `carbon-footprint.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {
  ngOnInit() {
    console.log('Le composant a été initialisé.');
  }

  ngOnDestroy() {
    console.log('Le composant a été détruit.');
  }

  ngAfterContentInit() {
    console.log('Le contenu du composant a été initialisé.');
  }

  ngAfterContentChecked() {
    console.log('Le contenu du composant est vérifié.');
  }

  ngAfterViewInit() {
    console.log('La vue du composant a été initialisée.');
  }

  ngAfterViewChecked() {
    console.log('La vue du composant a été vérifiée.');
  }
}
```