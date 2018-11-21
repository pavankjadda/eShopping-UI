import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {Observable} from 'rxjs';
import {Country} from './model/country';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component( {
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
} )
export class CountryComponent implements OnInit
{
  countriesObservable: Observable<Country[]>;

  //constructor(private countryService: CountryService) {}
  constructor(private httpClient: HttpClient) {}

  ngOnInit()
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

  isDataReady(): boolean
  {
    return this.countriesObservable!==undefined;
  }
}
