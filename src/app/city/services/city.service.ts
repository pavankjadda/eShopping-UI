import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService
{
  constructor(private httpClient:HttpClient) { }

  getCities()
  {
    const url='http://localhost:8080/api/v2/city/list';
    const httpOptions={
      headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
    return this.httpClient.get<Observable<City[]>>(url,httpOptions);
  }
}
