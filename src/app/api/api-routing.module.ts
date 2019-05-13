import {NgModule} from '@angular/core';
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
    ],
    exports: [
      RouterModule
    ]
  })
export class ApiRoutingModule {

}
