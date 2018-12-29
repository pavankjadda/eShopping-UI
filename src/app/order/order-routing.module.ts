import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {categoryManagementRoute} from './category/category.route';
import {orderDetailManagementRoute} from './order-detail/order-detail.route';



@NgModule(
  {
  imports: [
    RouterModule.forChild(categoryManagementRoute),
    RouterModule.forChild(orderDetailManagementRoute),
  ],
  exports: [
    RouterModule
  ]
} )
export class OrderRoutingModule
{
}
