import {NgModule} from '@angular/core';
import {productManagementRoute} from './product/product.route';
import {RouterModule} from '@angular/router';
import {orderManagementRoute} from './order/order.route';
import {cartManagementRoute} from './cart/cart.route';
import {checkManagementRoute} from './checkout/checkout.route';

@NgModule(
  {
    imports: [
      RouterModule.forChild(orderManagementRoute),
      RouterModule.forChild(cartManagementRoute),
      RouterModule.forChild(checkManagementRoute),
      RouterModule.forChild(productManagementRoute)
    ],
    exports: [
      RouterModule
    ]
  })
export class ApiRoutingModule {

}
