import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() // decorador de una propiedad, le indicamos a angular que el valor de personajes lo va recibir del componente padre
  // personajes: Personaje [] = [];

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ){}
}
