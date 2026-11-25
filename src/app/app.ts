import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cv } from './cv/cv';

@Component({
  imports: [RouterOutlet, Cv],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cv-tech');
}
