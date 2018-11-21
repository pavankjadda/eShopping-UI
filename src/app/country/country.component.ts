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

  constructor(private countryService: CountryService) {}


  ngOnInit()
  {
    this.countryService.getCountries().subscribe(
      data => {
        this.countriesObservable=data;
        },
      err => console.log('Error from Component'),
      ()=> {console.log('Completed');}
      );
  }

  isDataReady(): boolean
  {
    return this.countriesObservable!==undefined;

  }
}
