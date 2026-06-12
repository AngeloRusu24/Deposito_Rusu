import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  nome = input<string>('');
  prezzo = input<number>(0);
  disponibile = input<boolean>(false);
}