# Objectifs

Créer des composants qui accueilleront les différentes parties de l'application

# Niveau 1

- Dans le composant `header`, ajouter un attribut `nomUtilisateur` de type `String` et lui donner une valeur par défaut avec votre prénom
  - Ouvrir le fichier `header.component.ts` 
  ```typescript
   export class HeaderComponent {
      nomUtilisateur: string = 'Jean';
   }
  ```
- Afficher dans le composant `header` une phrase de bienvenue du type `Bienvenue <nomUtilisateur>`
  - Ouvrir le fichier `header.component.html` 
  ```html
   <h1>Bienvenue {{ nomUtilisateur }}</h1>
  ```
- Dans le composant `carbon-footprint`, ajouter un attribut `distanceKm` de type `Number` et lui donner une valeur par défaut avec un nombre de kilomètres parcourus
  - Ouvrir le fichier `carbon-footprint.component.ts` 
  ```typescript
   export class CarbonFootprintComponent {
      distanceKm: number = 150;
   }
  ```
- Dans le composant `carbon-footprint`, ajouter un attribut `consommationPour100Km` de type `Number` et lui donner une valeur par défaut avec un nombre de kilomètres parcourus
  - Ouvrir le fichier `carbon-footprint.component.ts` 
  ```typescript
   export class CarbonFootprintComponent {
      distanceKm: number = 150;
      consommationPour100Km: number = 5;
   }
  ```
- Afficher dans le composant `carbon-footprint`, afficher la consommation pour 100 kms, le nombre de kilomètres et la consommation totale
  - Ouvrir le fichier `carbon-footprint.component.html` 
  ```html
   <p>Consommation totale : {{ consommationPour100Km * distanceKm / 100 }} L</p>
   <p>Distance totale : {{ distanceKm }} km</p>
   <p>Consommation pour 100 km : {{ consommationPour100Km }} L</p>
  ```
- Afficher un message, dans une `div` ou un `span`, dans le composant `carbon-footprint` si la consommation pour 100 km est supérieure à 7 litres qui indique "Attention, votre consommation est élevée"
  - Ouvrir le fichier `carbon-footprint.component.html` 
  ```html
   <p *ngIf="consommationPour100Km > 7">Attention, votre consommation est élevée</p>
  ```
- Afficher un message, dans une `div` ou un `span`, dans le composant `carbon-footprint` si la consommation pour 100 km est inférieure à 4 litres qui indique "Félicitations, votre consommation est faible"
  - Ouvrir le fichier `carbon-footprint.component.html` 
  ```html
   <p *ngIf="consommationPour100Km < 4">Félicitations, votre consommation est faible</p>
  ```
- Dans le composant `carbon-footprint`, afficher la consommation pour 100 km en rouge si elle est supérieure à 7 litres et en vert si elle est inférieure à 4 litres, sinon elle reste noir grâce à une directive `ngStyle`
  - Ouvrir le fichier `carbon-footprint.component.html` 
  ```html
   <p [ngStyle]="{'color': consommationPour100Km > 7 ? 'red' : consommationPour100Km < 4 ? 'green' : 'black'}">Consommation pour 100 km : {{ consommationPour100Km }} L</p>
  ```
- Ajouter une classe CSS `haute-distance` si la distance est supérieure à 500 km et une classe CSS `basse-distance` si la distance est inférieure à 100 km
  - Ouvrir le fichier `carbon-footprint.component.html`
  ```html
   <p [ngClass]="{'haute-distance': distanceKm > 500, 'basse-distance': distanceKm < 100}">Distance totale : {{ distanceKm }} km</p>
  ``` 
- La classe `haute-distance` affiche un texte en gras et en rouge, la classe `basse-distance` affiche un texte en gras et en vert
  - Ouvrir le fichier `carbon-footprint.component.css`
  ```css
   .haute-distance {
      font-weight: bold;
      color: red;
   }
   .basse-distance {
      font-weight: bold;
      color: green;
   }
  ```
- Ajouter un bouton `+100km` dans le composant `carbon-footprint` qui permet d'ajouter 100 km à la distance au clic sur ce bouton, en appelant une méthode dans le controleur du composant
  - Ouvrir le fichier `carbon-footprint.component.html`
  ```html
   <button (click)="ajouter100Km()">+100km</button>
  ```
  - Ouvrir le fichier `carbon-footprint.component.ts`
  ```typescript
   export class CarbonFootprintComponent {
      distanceKm: number = 150;
      consommationPour100Km: number = 5;

      ajouter100Km() {
         this.distanceKm += 100;
      }
   }
  ```

  # Niveau 2

- Dans le composant `carbon-footprint`, ajouter un tableau qui contient les voyages suivants :
```typescript
    voyages = [
        { distanceKm: 50, consommationPour100Km: 5 },
        { distanceKm: 150, consommationPour100Km: 6 },
        { distanceKm: 250, consommationPour100Km: 7 },
        { distanceKm: 350, consommationPour100Km: 8 },
        { distanceKm: 450, consommationPour100Km: 9 }
    ]
```
  - Ouvrir le fichier `carbon-footprint.component.ts`
  ```typescript
   export class CarbonFootprintComponent {
      distanceKm: number = 150;
      consommationPour100Km: number = 5;
      voyages = [
         { distanceKm: 50, consommationPour100Km: 5 },
         { distanceKm: 150, consommationPour100Km: 6 },
         { distanceKm: 250, consommationPour100Km: 7 },
         { distanceKm: 350, consommationPour100Km: 8 },
         { distanceKm: 450, consommationPour100Km: 9 }
      ];
   }
  ```
- Afficher dans le composant `carbon-footprint` le tableau des voyages, sous le résumé du niveau 1
  - Ouvrir le fichier `carbon-footprint.component.html`
  ```html
   <h2>Liste des voyages</h2>
   <table>
      <thead>
         <tr>
            <th>Distance</th>
            <th>Consommation</th>
         </tr>
      </thead>
      <tbody>
         <tr *ngFor="let voyage of voyages">
            <td>{{ voyage.distanceKm }} km</td>
            <td>{{ voyage.consommationPour100Km }} L</td>
         </tr>
      </tbody>
   </table>
  ```

  # Niveau 3

- Ajouter un bouton `Générer voyage` qui ajouter un voyage dans le tableau `voyages` du composant `carbon-footprint` avec des valeurs aléatoires (mais réalistes)
  - Ouvrir le fichier `carbon-footprint.component.html`
  ```html
   <button (click)="genererVoyage()">Générer voyage</button>
  ```
  - Ouvrir le fichier `carbon-footprint.component.ts`
  ```typescript
   export class CarbonFootprintComponent {
      distanceKm: number = 150;
      consommationPour100Km: number = 5;
      voyages = [
         { distanceKm: 50, consommationPour100Km: 5 },
         { distanceKm: 150, consommationPour100Km: 6 },
         { distanceKm: 250, consommationPour100Km: 7 },
         { distanceKm: 350, consommationPour100Km: 8 },
         { distanceKm: 450, consommationPour100Km: 9 }
      ];

      genererVoyage() {
         const distance = Math.floor(Math.random() * 1000) + 1;
         const consommation = Math.floor(Math.random() * 10) + 1;
         this.voyages.push({ distanceKm: distance, consommationPour100Km: consommation });
      }
   }
  ```
- Remplacer les valeurs fixes `distanceKm` et `consommationPour100Km` par le total des voyages et la moyenne des consommations pour 100 km dans le contrôleur du composant `carbon-footprint`, à l'ajout d'un voyage et à l'initialisation du contrôleur
  - Ouvrir le fichier `carbon-footprint.component.ts`
  ```typescript
   export class CarbonFootprintComponent {
      distanceKm: number = 150;
      consommationPour100Km: number = 5;
      voyages = [
         { distanceKm: 50, consommationPour100Km: 5 },
         { distanceKm: 150, consommationPour100Km: 6 },
         { distanceKm: 250, consommationPour100Km: 7 },
         { distanceKm: 350, consommationPour100Km: 8 },
         { distanceKm: 450, consommationPour100Km: 9 }
      ];

      constructor() {
         this.calculerTotalEtMoyenne();
      }

      genererVoyage() {
         const distance = Math.floor(Math.random() * 1000) + 1;
         const consommation = Math.floor(Math.random() * 10) + 1;
         this.voyages.push({ distanceKm: distance, consommationPour100Km: consommation });
         this.calculerTotalEtMoyenne();
      }

      calculerTotalEtMoyenne() {
         let total = 0;
         let moyenne = 0;
         for (const voyage of this.voyages) {
            total += voyage.distanceKm;
            moyenne += voyage.consommationPour100Km;
         }
         this.distanceKm = total;
         this.consommationPour100Km = moyenne / this.voyages.length;
      }
   }
  ```
- Dans le composant `footer`, ajouter un attribut `date` de type `Date` et lui donner une valeur par défaut avec la date du jour
  - Ouvrir le fichier `footer.component.ts`
  ```typescript
   export class FooterComponent {
      date = new Date();
   }
  ``
- Afficher dans le composant `footer` la date du jour au format `JJ/MM/AAAA`, grâce à un pipe
  - Ouvrir le fichier `footer.component.html`
  ```html
      <p>{{ date | date:'dd/MM/yyyy' }}</p>
  ```
- Dans le composant `carbon-footprint`, utiliser un pipe pour afficher au maximum deux chiffres après la virgule pour les consommations
  - Ouvrir le fichier `carbon-footprint.component.html`
  ```html
      <p>Consommation totale : {{ consommationPour100Km * distanceKm / 100 | number:'1.2-2' }} L</p>
      <p [ngStyle]="{'color': consommationPour100Km > 7 ? 'red' : consommationPour100Km < 4 ? 'green' : 'black'}">Consommation
    pour 100 km : {{ consommationPour100Km | number:'1.2-2' }} L</p>
  ```