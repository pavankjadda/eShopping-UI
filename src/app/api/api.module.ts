import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryModule} from './category/category.module';
import {ManufacturerModule} from './manufacturer/manufacturer.module';
import {ProductModule} from './product/product.module';
import {OrderModule} from './order/order.module';
import {CartModule} from './cart/cart.module';
import {CheckoutModule} from './checkout/checkout.module';
import {AddressModule} from './address/address.module';
import {AddressTypeModule} from './address-type/address-type.module';
import {CityModule} from './city/city.module';
import {StateModule} from './state/state.module';
import {CountryModule} from './country/country.module';
import {RegionModule} from './region/region.module';

@NgModule({
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      CategoryModule,
      AddressModule,
      AddressTypeModule,
      CityModule,
      StateModule,
      CountryModule,
      RegionModule,
      ManufacturerModule,
      ProductModule,
      OrderModule,
      CartModule,
      CheckoutModule
  ]
})

export class ApiModule
{
}
