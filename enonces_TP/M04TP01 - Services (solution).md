# Objectifs

Mettre en place un service permettant de calculer l'empreinte carbone d'un voyage en voiture

# Niveau 1

- Créer un service `carbon-footprint-compute` qui permet de calculer l'empreinte carbone d'un voyage en voiture
   - Dans la ligne de commande : `ng generate service carbon-footprint-compute`
- Enregistrer ce service dans le module `app.module.ts`
   - Dans le fichier `app.module.ts` :
   ```typescript
   import { CarbonFootprintComputeService } from './carbon-footprint-compute.service';
   ...
   providers: [CarbonFootprintComputeService],
   ```
- Déplacer le tableau de voyage du composant `carbon-footprint` vers le service `carbon-footprint-compute`
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   export class CarbonFootprintComputeService {
     private voyages = [
       { distanceKm: 100, consommationPour100Km: 5.5 },
       { distanceKm: 200, consommationPour100Km: 6.5 },
       { distanceKm: 300, consommationPour100Km: 7.5 },
       { distanceKm: 400, consommationPour100Km: 8.5 },
       { distanceKm: 500, consommationPour100Km: 9.5 },
     ];
   ```
- Créer une méthode `getVoyages()` qui renvoie un tableau de voyages
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   getVoyages() {
     return this.voyages;
   }
   ```
- Créer une méthode `addVoyage(voyage)` qui ajoute un voyage au tableau
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   addVoyage(voyage: any) {
     this.voyages.push(voyage);
   }
   ```
- Injecter le service `carbon-footprint-compute` dans le composant `carbon-footprint`
   - Dans le fichier `carbon-footprint.component.ts` :
   ```typescript
   import { CarbonFootprintComputeService } from '../carbon-footprint-compute.service';
   ...
   constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) { }
   ```
- Appeler la méthode `getVoyages()` dans le composant `carbon-footprint` pour récupérer la liste des voyages
   - Dans le fichier `carbon-footprint.component.ts` :
   ```typescript
   voyages = this.carbonFootprintComputeService.getVoyages();
   ```
- Appeler la méthode `addVoyage(voyage)` dans le composant `carbon-footprint` pour ajouter un voyage aléatoire
   - Dans le fichier `carbon-footprint.component.ts` :
   ```typescript
      genererVoyage() {
         const distance = Math.floor(Math.random() * 1000) + 1;
         const consommation = Math.floor(Math.random() * 10) + 1;
         this.carbonFootprintComputeService.addVoyage({ distanceKm: distance, consommationPour100Km: consommation });
         this.voyages = this.carbonFootprintComputeService.getVoyages();
         this.calculerTotalEtMoyenne();
      }
  ```

# Niveau 2

- Créer une méthode `getResumeVoyages()` qui renvoie un objet composé de deux valeurs : la distance totale en km et la consommation moyenne
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   getResumeVoyages() {
     let distanceKm = 0;
     let consommationPour100Km = 0;
     this.voyages.forEach(voyage => {
       distanceKm += voyage.distanceKm;
       consommationPour100Km += voyage.consommationPour100Km;
     });
     return { distanceKm, consommationPour100Km };
   }
   ```
- Alimenter les attributs `distanceKm` et `consommationPour100Km` en appelant la méthode `getResumeVoyages()` dans le composant `carbon-footprint`
   - Dans le fichier `carbon-footprint.component.ts` :
   ```typescript
   calculerTotalEtMoyenne() {
    let resume = this.carbonFootprintComputeService.getResumeVoyages();
    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
   }
  ```

# Niveau 3

- Ajouter pour chaque voyage, un attribut `quantiteCO2`, dans le service `carbon-footprint-compute` (avec des valeurs arbitraires dans un premier temps)
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   export class CarbonFootprintComputeService {
     private voyages = [
       { distanceKm: 100, consommationPour100Km: 5.5, quantiteCO2: 0 },
       { distanceKm: 200, consommationPour100Km: 6.5, quantiteCO2: 0 },
       { distanceKm: 300, consommationPour100Km: 7.5, quantiteCO2: 0 },
       { distanceKm: 400, consommationPour100Km: 8.5, quantiteCO2: 0 },
       { distanceKm: 500, consommationPour100Km: 9.5, quantiteCO2: 0 },
     ];
   ```
- Afficher cette quantité de CO2 dans le composant `carbon-footprint`
   - Dans le fichier `carbon-footprint.component.html` :
   ```html
   <table>
      <thead>
         <tr>
               <th>Distance</th>
               <th>Consommation pour 100 kms</th>
               <th>Quantité de CO2</th>
         </tr>
      </thead>
      <tbody>
         <tr *ngFor="let voyage of voyages">
               <td>{{ voyage.distanceKm }} km</td>
               <td>{{ voyage.consommationPour100Km }} L</td>
               <td>{{ voyage.quantiteCO2 }}</td>
         </tr>
      </tbody>
   </table>
   ```
- Retourner la quantité totale de CO2 dans la méthode `getResumeVoyages()` grâce à un attribut `quantiteCO2Totale`
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   getResumeVoyages() {
     let distanceKm = 0;
     let consommationPour100Km = 0;
     let quantiteCO2Totale = 0;
     this.voyages.forEach(voyage => {
       distanceKm += voyage.distanceKm;
       consommationPour100Km += voyage.consommationPour100Km;
       quantiteCO2Totale += voyage.quantiteCO2;
     });
     return { distanceKm, consommationPour100Km, quantiteCO2Totale };
   }
   ```
- Afficher cette quantité totale de CO2 dans le composant `carbon-footprint`
   - Dans le fichier `carbon-footprint.component.ts` :
   ```typescript
   quantiteCO2Totale: number = 0;
   
   ...

   calculerTotalEtMoyenne() {
    let resume = this.carbonFootprintComputeService.getResumeVoyages();
    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
   }
   ```
   - Dans le fichier `carbon-footprint.component.html` :
   ```html
   <p>Quantité totale de CO2 : {{ quantiteCO2Totale }} kg</p>
   ```
- Calculer la quantité de CO2 par voyage avec la formule suivante : `quantiteCO2 = (distanceKm * consommationPour100Km) / 100 * 2.3`
   - Dans le fichier `carbon-footprint-compute.service.ts` :
   ```typescript
   addVoyage(voyage: any) {
    voyage.quantiteCO2 = (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3;
    this.voyages.push(voyage);
   }

   getResumeVoyages() {
     let distanceKm = 0;
     let consommationPour100Km = 0;
     let quantiteCO2Totale = 0;
     this.voyages.forEach(voyage => {
       distanceKm += voyage.distanceKm;
       consommationPour100Km += voyage.consommationPour100Km;  
       quantiteCO2Totale += voyage.quantiteCO2;
     });
     return { distanceKm, consommationPour100Km, quantiteCO2Totale };
   }
   ```