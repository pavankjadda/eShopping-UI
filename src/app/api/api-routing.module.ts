import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const apiManagementRoutes: Routes=[

  {
    path: 'category',
    loadChildren: './api/category/category.module#CategoryModule'
  },
  {
    path: 'manufacturer',
    loadChildren: './api/manufacturer/manufacturer.module#ManufacturerModule'
  },
  {
    path: 'product',
    loadChildren: './api/product/product.module#ProductModule'
  },
  {
    path: 'order',
    loadChildren: './api/order/order.module#OrderModule'
  },
  {
    path: 'cart',
    loadChildren: './api/cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: './api/checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'address',
    loadChildren: './api/address/address.module#AddressModule'
  },
  {
    path: 'address_type',
    loadChildren: './api/address-type/address-type.module#AddressTypeModule'
  },
  {
    path: 'city',
    loadChildren: './api/city/city.module#CityModule'
  },
  {
    path: 'state',
    loadChildren: './api/state/state.module#StateModule'
  },
  {
    path: 'country',
    loadChildren: './api/country/country.module#CountryModule'
  },
  {
    path: 'region',
    loadChildren: './api/region/region.module#RegionModule'
  }
];


@NgModule( {
  imports: [RouterModule.forRoot(apiManagementRoutes)],

  exports: [RouterModule]
} )
export class ApiRoutingModule
{
}
