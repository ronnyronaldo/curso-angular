import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['La araña humana', 'Hombre lata', 'Sherk Vengador', 'Pantera Oscura','Dr. Mario'];
  borrados: string = '';


  borrarHeroe(){
    this.borrados = this.heroes.shift() || '';
  }

}
