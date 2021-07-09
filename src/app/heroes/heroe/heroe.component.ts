import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    public nombre: string = 'Ironman';
    public edad: number = 45;
    // es geder es
    // Permite crear una propiedad mediante codigo, la cual despues sera procesada (imprimida, direccionada, interpolada, etc)
    // Lo que retorne una función o metodo, angular lo tratara como una propiedad de una clase
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`; // Template literal = Construir un string dentro de ``
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}