import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  items = signal<string[]>([]);

  addItem(nome: string): void {
    this.items.update(items => [...items, nome]);
  }

  removeItem(index: number): void {
    this.items.update(items => items.filter((_, i) => i !== index));
  }
}