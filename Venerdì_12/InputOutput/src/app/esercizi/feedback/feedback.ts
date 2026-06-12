import { Component } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class FeedbackComponent {
  voto: number | null = null;

  onVoto(n: number): void {
    this.voto = n;
  }
}