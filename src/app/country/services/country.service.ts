import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Country} from '../model/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  countriesObservable: Observable<Country[]>;
  constructor(private httpClient:HttpClient) { }

  getCountries(): Observable<Country[]>
  {
    const url='http://localhost:8080/api/v2/country/list';
    const httpOptions = {
      headers: new HttpHeaders( {'Content-Type':  'application/json'})
    };
    this.httpClient.get<Observable<Country[]>>(url,httpOptions).subscribe(
      data=> {this.countriesObservable=data;},
      err => console.error(err),
      () => console.log('Countries retrived from backend'));
    return this.countriesObservable;
  }
}
