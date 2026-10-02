import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('03-contador5');
  public valor: number=10;
  /*declarar una accion segun se clique en el btn de sumar o de restar*/

  public acumularValor(accion:string):void{
    if (accion==='Suma_5'){  //
      this.valor+=5;
    }
    else if (accion==='Resta_5'){
      this.valor-=5;
    }
  }
}
