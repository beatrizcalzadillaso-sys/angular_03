import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listado',
  styleUrl: './listado.css',
  templateUrl: './listado.html',
})
export class Listado {
  public heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk'];
  
  // Variable para almacenar el héroe eliminado
  public heroeBorrado: string = '';
  
  // Variable para controlar si se usó "Borrar Todo" (para el tercer estado del enunciado)
  public todoBorrado: boolean = false;

  borrarTodos(): void {
    this.heroes = [];
    this.heroeBorrado = '';
    this.todoBorrado = true;
  }

  borrarUltimo(): void {
    // .pop() elimina el último elemento y lo devuelve
    const borrado = this.heroes.pop();
    this.heroeBorrado = borrado || '';
    this.todoBorrado = false;
  }

  borrarPrimero(): void {
    // .shift() elimina el primer elemento y lo devuelve
    const borrado = this.heroes.shift();
    this.heroeBorrado = borrado || '';
    this.todoBorrado = false;
  }
}
