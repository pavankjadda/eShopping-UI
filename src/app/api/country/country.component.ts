import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {Country} from './model/country';
import {COUNTRY_API_URL} from '../../app.constants';
import {environment} from '../../../environments/environment';

@Component( {
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
} )
export class CountryComponent implements OnInit
{
  countries: Array<Country>;

  constructor(private countryService: CountryService) {}

  ngOnInit()
  {
    this.getCountries();
  }

  getCountries()
  {
    const url=environment.SERVER_URL+COUNTRY_API_URL+'list';
    this.countryService.getCountries(url).subscribe(
      data=> {
        this.countries=data;
        },
      err => console.error(err),
      () => console.log('Countries retrieved from backend'));
    return this.countries;
  }

  isDataReady(): boolean
  {
    return this.countries!==undefined;
  }
}
