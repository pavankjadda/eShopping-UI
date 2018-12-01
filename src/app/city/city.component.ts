import {Component, OnInit} from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from './model/city';
import {CityService} from './services/city.service';

@Component( {
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
} )
export class CityComponent implements OnInit
{

  citiesObservable: Observable<City[]>;

  constructor(private cityService:CityService) {
  }
  ngOnInit()
  {
    this.getCities();
  }

  getCities()
  {
    this.cityService.getCities( ).subscribe(
      data => {this.citiesObservable=data;},
      err => console.error( err ),
      () => console.log( 'Cities retrived from backend' ) );
    return this.citiesObservable;
  }
  cityDataAvailable(): boolean
  {
    return this.citiesObservable !== undefined;
  }

}
