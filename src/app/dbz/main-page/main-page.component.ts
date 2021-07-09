import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000
  };

  /* ************************* Ver capitulo 65 SERVICIOS********************
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
  */

  /* ************************* Ver capitulo 65 SERVICIOS********************
  agregarNuevoPersonaje( argh: Personaje ): void{
    // console.log(argh);
    // debugger;
    this.personajes.push(argh);
  }
  */

  /* ************************* Ver capitulo 65 SERVICIOS********************
  constructor( private dbzService: DbzService ){}
  */

  constructor( ){}

}
