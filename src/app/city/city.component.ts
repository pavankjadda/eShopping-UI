import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from './model/city';
import {State} from '../state/model/state';

@Component( {
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
} )
export class CityComponent implements OnInit
{

  citiesObservable: Observable<City[]>;

  constructor(private httpClient:HttpClient) {
  }
  ngOnInit(): Observable<City[]>
  {
    const url='http://localhost:8080/api/v2/city/list';
    const httpOptions={
      headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
    this.httpClient.get<Observable<City[]>>( url, httpOptions ).subscribe(
      data => {
        this.citiesObservable=data;
      },
      err => console.error( err ),
      () => console.log( 'Cities retrived from backend' ) );
    return this.citiesObservable;
  }

  cityDataAvailable(): boolean
  {
    return this.citiesObservable !== undefined;
  }

}
