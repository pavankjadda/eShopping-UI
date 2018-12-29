import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryViewComponent} from './category/category-view/category-view.component';
import {CategoryNewComponent} from './category/category-new/category-new.component';
import {CategoryHomeComponent} from './category/category-home/category-home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {RouterModule} from '@angular/router';
import {categoryManagementRoute} from './category/category.route';
import {orderDetailManagementRoute} from './order-detail/order-detail.route';
import {OrderRoutingModule} from './order-routing.module';

@NgModule( {
  declarations: [
    CategoryComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryViewComponent,
    CategoryNewComponent,
    CategoryHomeComponent,
    OrderDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
} )


export class OrderModule
{
}
