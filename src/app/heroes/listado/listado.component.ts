import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman'];
  public heroeDelete: string = '';

  borrarHeroe(): void{
    /*
    const dHeroes = this.heroes;
    dHeroes.splice(0, 1);
    */
   this.heroeDelete = this.heroes.shift() || '';
  }

}
