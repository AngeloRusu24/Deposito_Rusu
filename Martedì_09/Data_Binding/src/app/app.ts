import { Component } from '@angular/core';
import { ProductCardComponent } from './esercizi/products/product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.html',
})
export class App {}