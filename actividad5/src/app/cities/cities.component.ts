import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: ` 
  <ul class="list-group">
  <li class="list-group-item mt-1" (click)="onCitySelected(city)"
    [ngClass]="{'active': city?._id === selection?._id}">
    {{city?.name | titlecase}}
    <!-- P I P E {{city | titlecase}} -->

      <button *ngIf="city?._id == selection?._id" (click)="onCityDelete(city._id)"
      class="btn btn-danger float-end" type="button">Delete</button>
  </li>
</ul>`,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: City; //los input pueden ser opcionales
  @Input() selection!: City;
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(id: string):void{
    this.cityDeleteEvent.emit(id);
  }
  
}
