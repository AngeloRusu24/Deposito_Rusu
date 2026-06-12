import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../shopping-list-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
  imports: [FormsModule],
})
export class AddItemComponent {
  service = inject(ShoppingListService);
  valore = '';

  aggiungi(): void {
    if (this.valore.trim()) {
      this.service.addItem(this.valore.trim());
      this.valore = '';
    }
  }
}