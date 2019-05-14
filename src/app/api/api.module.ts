import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:
    [
      RouterModule.forChild([
        {
          path: 'category',
          loadChildren: './category/category.module#CategoryModule'
        },
        {
          path: 'manufacturer',
          loadChildren: './manufacturer/manufacturer.module#ManufacturerModule'
        },
        {
          path: 'product',
          loadChildren: './product/product.module#ProductModule'
        },
        {
          path: 'order',
          loadChildren: './order/order.module#OrderModule'
        },
        {
          path: 'cart',
          loadChildren: './cart/cart.module#CartModule'
        },
        {
          path: 'checkout',
          loadChildren: './checkout/checkout.module#CheckoutModule'
        },
        {
          path: 'address',
          loadChildren: './address/address.module#AddressModule'
        },
        {
          path: 'address_type',
          loadChildren: './address-type/address-type.module#AddressTypeModule'
        },
        {
          path: 'city',
          loadChildren: './city/city.module#CityModule'
        },
        {
          path: 'state',
          loadChildren: './state/state.module#StateModule'
        },
        {
          path: 'country',
          loadChildren: './country/country.module#CountryModule'
        }
      ]),
      CommonModule,
      ReactiveFormsModule,
      /*
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
      CheckoutModule*/
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
})

export class ApiModule
{
}
