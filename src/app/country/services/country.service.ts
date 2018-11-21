import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Country} from '../model/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  customersObservable: Observable<Country[]>;

  constructor(private httpClient:HttpClient) { }

  getCountries()
  {
    const url='http://localhost:8080/api/v2/country/list';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.httpClient.get(url,httpOptions).subscribe((result)=>
    {
      // @ts-ignore
      this.customersObservable=result;
    });
  }
}
