import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State} from './model/state';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component( {
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
} )
export class StateComponent implements OnInit
{
  statesObservable: Observable<State[]>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit()
  {
    const url='http://localhost:8080/api/v2/state/list';
    const httpOptions={
      headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
    this.httpClient.get<Observable<State[]>>( url, httpOptions ).subscribe(
      data => {
        this.statesObservable=data;
      },
      err => console.error( err ),
      () => console.log( 'States retrived from backend' ) );
    return this.statesObservable;
  }

  statesDataAvailable(): boolean
  {
    return this.statesObservable!==undefined;
  }
}
