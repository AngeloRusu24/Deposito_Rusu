import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './esercizi/product-list/product-list';
import { FeedbackComponent } from './esercizi/feedback/feedback';


@Component({
  selector: 'app-root',
  imports: [ProductListComponent, FeedbackComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InputOutput');
}
