import {NgModule} from '@angular/core';
import {productManagementRoute} from './product/product.route';
import {categoryManagementRoute} from './category/category.route';
import {orderDetailManagementRoute} from './order-detail/order-detail.route';
import {RouterModule} from '@angular/router';

@NgModule(
  {
    imports: [
      RouterModule.forChild(categoryManagementRoute),
      RouterModule.forChild(orderDetailManagementRoute),
      RouterModule.forChild(productManagementRoute)
    ],
    exports: [
      RouterModule
    ]
  })
export class ApiRoutingModule {

}
