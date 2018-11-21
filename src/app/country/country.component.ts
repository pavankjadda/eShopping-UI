import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {Observable} from 'rxjs';
import {Country} from './model/country';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit
{
  countriesList: Country[];
  constructor(private countryService:CountryService) { }

  ngOnInit()
  {
    this.countriesList=this.countryService.getCountries();
  }

}
