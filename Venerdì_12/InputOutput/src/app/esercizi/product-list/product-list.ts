import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  prodotti = [
    { nome: 'Zaino', prezzo: 89.90, disponibile: true },
    { nome: 'Tenda', prezzo: 199.00, disponibile: false },
    { nome: 'Sacco a pelo', prezzo: 59.90, disponibile: true },
  ];
}