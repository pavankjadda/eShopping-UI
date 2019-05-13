import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {StateComponent} from './state/state.component';
import {AddressComponent} from './address/address.component';
import {AddressTypeComponent} from './address-type/address-type.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CategoryModule} from './category/category.module';
import {ManufacturerModule} from './manufacturer/manufacturer.module';
import {ProductModule} from './product/product.module';
import {OrderModule} from './order/order.module';
import {CartModule} from './cart/cart.module';
import {CheckoutModule} from './checkout/checkout.module';


@NgModule({
  declarations:
    [
      CityComponent,
      CountryComponent,
      RegionComponent,
      StateComponent,
      AddressComponent,
      AddressTypeComponent,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    CategoryModule,
    ManufacturerModule,
    ProductModule,
    OrderModule,
    CartModule,
    CheckoutModule
  ]
})
export class ApiModule { }

