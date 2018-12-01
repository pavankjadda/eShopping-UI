import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {State} from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService
{
  constructor(private httpClient:HttpClient) { }

  getStates()
  {
    const url='http://localhost:8080/api/v2/state/list';
    const httpOptions={
      headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
    return this.httpClient.get<Observable<State[]>>(url,httpOptions);
  }
}
