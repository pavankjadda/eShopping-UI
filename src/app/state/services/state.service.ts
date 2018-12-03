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

  getStates(url,httpOptions)
  {
    return this.httpClient.get<Observable<State[]>>(url,httpOptions);
  }
}
