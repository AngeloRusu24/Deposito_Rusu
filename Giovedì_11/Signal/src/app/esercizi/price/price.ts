import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  templateUrl: './price.html',
  styleUrl: './price.css'
})
export class PriceComponent {
  prezzoNetto = signal(100);
  aliquotaIva = signal(22);

  prezzoLordo = computed(() =>
    this.prezzoNetto() * (1 + this.aliquotaIva() / 100)
  );

  aggiornaPrezzo(event: Event): void {
    const valore = +(event.target as HTMLInputElement).value;
    this.prezzoNetto.set(valore);
  }
}