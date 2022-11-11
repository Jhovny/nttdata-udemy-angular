import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]=['Capitan America','Spiderman','Iroman','Holk','Tork'];
  eroeBorrado: string='';


  borrarHeroe():void {
    this.eroeBorrado=this.heroes.shift() || '';

   

  }

}
