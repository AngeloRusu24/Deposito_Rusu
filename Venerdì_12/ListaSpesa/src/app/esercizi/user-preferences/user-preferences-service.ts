import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserPreferencesService {
  username = signal('Ospite');
  temaScuro = signal(false);

  setUsername(nome: string): void {
    this.username.set(nome);
  }

  toggleTema(): void {
    this.temaScuro.update(v => !v);
  }
}