import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../model/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  customersObservable: Observable<Country[]>;
  constructor(private http:HttpClient) { }

  getCountries()
  {
    //return this.http.get<Country[]>('localhost:8080/api/v2/country/list',{responseType:'json'});
    this.customersObservable=this.http.get<Country[]>('localhost:8080/api/v2/country/list',{responseType:'json'});
  }
}
