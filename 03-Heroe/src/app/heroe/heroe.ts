import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-heroe',
  styleUrl: './heroe.css',
  templateUrl: './heroe.html',
})
export class HeroeComponent implements OnInit{
  public nombre:string = "Ironman";
  public edad: number = 45;

  constructor() {
    console.log('1. Se ejecuta primero el constructor');
  }

  ngOnInit(): void {
    console.log('2. Se ejecuta despues el ngOnInit');
  }

  obtenerNombre() : string {
    return `${this.nombre} - ${this.edad}`;
  }
  
  get nombreEnMayusculas():string {
    return this.nombre.toUpperCase();
  }

  cambiarHeroe(): void{
    this.nombre= 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad= 30;
    console.log('Hola');
  }
}
