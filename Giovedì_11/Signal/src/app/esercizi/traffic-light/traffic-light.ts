import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  templateUrl: './traffic-light.html',
  styleUrl: './traffic-light.css'
})
export class TrafficLightComponent {
  colore = signal('rosso');

  avanza(): void {
    const sequenza: Record<string, string> = {
      rosso: 'verde',
      verde: 'giallo',
      giallo: 'rosso'
    };
    this.colore.update(c => sequenza[c]);
  }
}