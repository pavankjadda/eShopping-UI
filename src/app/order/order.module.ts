import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {OrderRoutingModule} from './order-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CategoryHomeComponent } from './category/category-home/category-home.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CategoryComponent, ProductComponent, CategoryListComponent,
    CategoryViewComponent, CategoryNewComponent, CategoryHomeComponent],
  imports: [
    CommonModule,OrderRoutingModule,ReactiveFormsModule
  ]
})
export class OrderModule { }
