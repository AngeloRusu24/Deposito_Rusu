import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './esercizi/traffic-light/traffic-light';
import { PriceComponent } from './esercizi/price/price';

@Component({
  selector: 'app-root',
  imports: [TrafficLightComponent, PriceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signal');
}
