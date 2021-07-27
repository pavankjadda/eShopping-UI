import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const ApiRoutes: Routes = [
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'manufacturer',
    loadChildren: () =>
      import('./manufacturer/manufacturer.module').then(
        (m) => m.ManufacturerModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'address',
    loadChildren: () =>
      import('./address/address.module').then((m) => m.AddressModule),
  },
  {
    path: 'address_type',
    loadChildren: () =>
      import('./address-type/address-type.module').then(
        (m) => m.AddressTypeModule
      ),
  },
  {
    path: 'city',
    loadChildren: () =>
      import('./city/city.module').then((m) => m.CityModule),
  },
  {
    path: 'state',
    loadChildren: () =>
      import('./state/state.module').then((m) => m.StateModule),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.module').then((m) => m.CountryModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(ApiRoutes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class ApiRoutingModule {
}
