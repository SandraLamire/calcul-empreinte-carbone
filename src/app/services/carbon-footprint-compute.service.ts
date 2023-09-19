import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {
  // pour calcul de l'empreinte carbone d'un voyage en voiture
  constructor() { }

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];

  getVoyages() {
    return this.voyages;
  }

  addVoyage(voyage: any) {
    this.voyages.push(voyage);
  }
}
