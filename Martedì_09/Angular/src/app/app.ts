import { Component } from '@angular/core';
import { Title } from './components/title/title';
import { Paragraph } from './components/paragraph/paragraph';
import { Image } from './components/image/image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Title, Paragraph, Image],
  templateUrl: './app.html',
})
export class App {}