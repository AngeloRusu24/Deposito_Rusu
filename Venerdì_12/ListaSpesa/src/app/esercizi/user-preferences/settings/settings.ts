import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../user-preferences-service';


@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class SettingsComponent {
  service = inject(UserPreferencesService);
}