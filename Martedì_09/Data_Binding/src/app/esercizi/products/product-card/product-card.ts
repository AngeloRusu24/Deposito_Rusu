import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  name = 'Zaino da Montagna';
  brand = 'AlpinePro';
  price = 89.90;
  discount = 0.20; // 20%
  stock = 2;
  imageUrl = 'https://picsum.photos/300/200';
  tags = ['outdoor', 'sport', 'impermeabile'];
  available = true;

  compra(): void {
    this.available = false;
  }

  finalPrice(): number {
    return this.price - (this.price * this.discount);
  }
}