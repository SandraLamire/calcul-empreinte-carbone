import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {
  // pour calcul de l'empreinte carbone d'un voyage en voiture
  constructor() { }

  private voyages = [
    { distanceKm: 100, consommationPour100Km: 5.5, quantiteCO2: 2.39 },
    { distanceKm: 200, consommationPour100Km: 6.5, quantiteCO2: 5.65 },
    { distanceKm: 300, consommationPour100Km: 7.5, quantiteCO2: 9.78 },
    { distanceKm: 400, consommationPour100Km: 8.5, quantiteCO2: 14.78 },
    { distanceKm: 500, consommationPour100Km: 9.5, quantiteCO2: 20.65 },
  ];

  getVoyages() {
    return this.voyages;
  }

  addVoyage(voyage: any) {
    voyage.quantiteCO2 = (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3;
    this.voyages.push(voyage);
  }

  getResumeVoyages() {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let moyenneConsommation = 0;
    let quantiteCO2Totale = 0;

    this.voyages.forEach(voyage => {
      distanceKm += voyage.distanceKm;
      consommationPour100Km += voyage.consommationPour100Km;
      moyenneConsommation = consommationPour100Km / this.voyages.length;
      quantiteCO2Totale += voyage.quantiteCO2;
    });
    return { distanceKm, consommationPour100Km, moyenneConsommation, quantiteCO2Totale };
  } 
}
