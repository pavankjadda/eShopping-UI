import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {OrderRoutingModule} from './order-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';

@NgModule({
  declarations: [CategoryComponent, ProductComponent, CategoryListComponent],
  imports: [
    CommonModule,OrderRoutingModule
  ]
})
export class OrderModule { }
