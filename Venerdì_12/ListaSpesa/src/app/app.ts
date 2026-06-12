import { Component } from '@angular/core';
import { AddItemComponent } from './esercizi/shopping-list/add-item/add-item';
import { ShoppingListComponent } from './esercizi/shopping-list/shopping-list/shopping-list';
import { SettingsComponent } from './esercizi/user-preferences/settings/settings';
import { PreviewComponent } from './esercizi/user-preferences/preview/preview';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [AddItemComponent, ShoppingListComponent, SettingsComponent, PreviewComponent],
})

export class AppComponent {}