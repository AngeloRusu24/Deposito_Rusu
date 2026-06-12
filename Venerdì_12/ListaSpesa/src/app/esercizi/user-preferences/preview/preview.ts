import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../user-preferences-service';

@Component({
  selector: 'app-preview',
  standalone: true,
  templateUrl: './preview.html',
  styleUrl: './preview.css'
})
export class PreviewComponent {
  service = inject(UserPreferencesService);
}