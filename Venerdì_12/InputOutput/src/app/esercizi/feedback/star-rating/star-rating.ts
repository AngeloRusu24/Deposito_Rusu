import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRatingComponent {
  massimo = input(5);
  votoSelezionato = output<number>();

  stelle(): number[] {
    return Array.from({ length: this.massimo() }, (_, i) => i + 1);
  }

  emetti(n: number): void {
    this.votoSelezionato.emit(n);
  }
}