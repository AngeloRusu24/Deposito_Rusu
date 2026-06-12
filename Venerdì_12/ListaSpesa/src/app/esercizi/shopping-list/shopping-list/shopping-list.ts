import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingListComponent {
  service = inject(ShoppingListService);
}