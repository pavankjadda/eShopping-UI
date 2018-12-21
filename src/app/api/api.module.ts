import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {StateComponent} from './state/state.component';


@NgModule({
  imports: [RouterModule,CommonModule],
  declarations: [
    CityComponent,
    CountryComponent,
    RegionComponent,
    StateComponent
  ]
})
export class ApiModule { }

