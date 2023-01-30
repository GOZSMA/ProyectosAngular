import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ciudades = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;
  criterio: string = '';

  title = 'Día 12 del reto';

  addNewCity(city: string): void {
    this.ciudades.push(city);
  }
  onCityClicked(city: string): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onSearch(): void {
    console.log('OnSearch');

  }

}
