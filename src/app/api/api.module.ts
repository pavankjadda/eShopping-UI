import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {StateComponent} from './state/state.component';
import {AddressComponent} from './address/address.component';
import {AddressTypeComponent} from './address-type/address-type.component';


@NgModule({
  imports: [RouterModule,CommonModule],
  declarations: [
    CityComponent,
    CountryComponent,
    RegionComponent,
    StateComponent,
    AddressComponent,
    AddressTypeComponent
  ]
})
export class ApiModule { }

