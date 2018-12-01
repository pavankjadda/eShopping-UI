import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State} from './model/state';
import {HttpHeaders} from '@angular/common/http';
import {StateService} from './services/state.service';

@Component( {
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
} )
export class StateComponent implements OnInit
{
  statesObservable: Observable<State[]>;

  constructor(private stateService: StateService) {}

  ngOnInit()
  {
    this.getStates();
  }

  getStates()
  {
    this.stateService.getStates().subscribe(
      data => { this.statesObservable=data; },
      err => console.error( err ),
      () => console.log( 'States retrieved from backend' ) );
    return this.statesObservable;
  }
  statesDataAvailable(): boolean
  {
    return this.statesObservable!==undefined;
  }
}
