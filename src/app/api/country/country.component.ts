import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {COUNTRY_API_URL} from '../../app.constants';
import {Country} from './model/country';
import {CountryService} from './services/country.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        RouterLink,
    ],
})
export class CountryComponent implements OnInit {
  countries: Array<Country>;

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    const url = environment.BASE_URL + COUNTRY_API_URL + '/list';
    this.countryService.getCountries(url).subscribe(
      (data) => {
        this.countries = data;
      },
      (err) => console.error(err),
      () => console.log('Countries retrieved from backend')
    );
    return this.countries;
  }

  isDataReady(): boolean {
    return this.countries !== undefined;
  }
}
