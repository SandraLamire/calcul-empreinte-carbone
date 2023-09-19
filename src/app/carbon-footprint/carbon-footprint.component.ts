import { Component } from '@angular/core';
// import du service
import { CarbonFootprintComputeService } from '../services/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})

export class CarbonFootprintComponent {

    // ajout des attributs distance, consommation et quantité CO2
  distanceKm: number = 150;
  consommationPour100Km: number = 5;
  quantiteCO2Totale: number = 0;

  ajouter100Km() {
    this.distanceKm += 100;
  }

  /* récupération du tableau de données voyages dans services */
  constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) { };
  voyages = this.carbonFootprintComputeService.getVoyages();

    // Appel à la méthode addVoyage(voyage)
    genererVoyage() {
      const distance = Math.floor(Math.random() * 1000) + 1;
      const consommation = Math.floor(Math.random() * 10) + 1;
      
      this.carbonFootprintComputeService.addVoyage({ distanceKm: distance, consommationPour100Km: consommation });
      this.voyages = this.carbonFootprintComputeService.getVoyages();
      this.calculerTotalEtMoyenne();
    };

    calculerTotalEtMoyenne() {
      let resume = this.carbonFootprintComputeService.getResumeVoyages();
      this.distanceKm = resume.distanceKm;
      this.consommationPour100Km = resume.moyenneConsommation;
      this.quantiteCO2Totale = resume.quantiteCO2Totale;
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