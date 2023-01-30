import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { City, DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @ViewChild(NgModel) filterInput!: NgModel;

  cities: City[] = [];
  selection!: City;
  criterio = '';

  constructor(private readonly datasvc: DataService) {}

  ngOnInit(): void {
    this.datasvc.SelectedCity$.subscribe(
      (city: City) => (this.selection = city)
    );

    this.datasvc.getCities().subscribe(cities => {
      this.cities = [...cities];
    });
  }

  onCitySelected(city: City): void {
    // this.selection = city;
    this.datasvc.setCity(city);
  }

  addNewCity(city: string): void {
    this.datasvc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    });
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.datasvc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr];
      });
    }
  }

  updateCity(city: City): void {
    this.datasvc.updateCity(city).subscribe(res => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    });
  }
}
