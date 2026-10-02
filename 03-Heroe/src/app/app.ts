import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroeComponent } from './heroe/heroe';
import { Listado } from './listado/listado';

@Component({
  imports: [RouterOutlet, HeroeComponent, Listado],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('03-Heroe');
}
