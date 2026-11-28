import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cv } from './components/cv/cv';
import { Header } from './components/header/header';

@Component({
  imports: [RouterOutlet, Cv, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cv-tech');
}
