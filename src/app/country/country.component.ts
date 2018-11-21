import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {Observable} from 'rxjs';
import {Country} from './model/country';

@Component( {
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
} )
export class CountryComponent implements OnInit
{
  countriesObservable: Observable<Country[]>;

  constructor(private countryService: CountryService)
  {
  }

  ngOnInit()
  {
    this.countriesObservable=this.countryService.getCountries();
  }

}
