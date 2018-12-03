import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  constructor(private httpClient:HttpClient) { }

  getCountries()
  {
    const url='http://localhost:8080/api/v2/country/list';
    const httpOptions = {headers: new HttpHeaders( {'Content-Type':  'application/json'})};
    return this.httpClient.get<Observable<Country[]>>(url,httpOptions);
  }
}
