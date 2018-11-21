import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: 'Countries.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit
{
  countriesList;
  constructor(private countryService:CountryService) { }

  ngOnInit()
  {
    this.countriesList=this.countryService.getCountries();
  }

}
