import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {StateComponent} from './state/state.component';

@NgModule({
  imports: [ RouterModule],
  declarations: [
    CityComponent,
    CountryComponent,
    RegionComponent,
    StateComponent
  ]
})
export class ApiModule { }

