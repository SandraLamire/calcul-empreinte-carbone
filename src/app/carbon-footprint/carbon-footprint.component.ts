import { Component } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})

export class CarbonFootprintComponent {

    // ajout des attributs distance et consommation
  distanceKm: number = 150;
  consommationPour100Km: number = 5;

  ajouter100Km() {
    this.distanceKm += 100;
  }

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
    };

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


  // Utiliser les différents hooks pour afficher dans la console 
  // ( navigateur => F12 => Console => Journaux )
  // le cycle de vie du composant
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