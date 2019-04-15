import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {Country} from './model/country';
import {COUNTRY_API_URL, SERVER_URL} from '../../app.constants';

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
    const url=SERVER_URL+COUNTRY_API_URL+'list';
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
