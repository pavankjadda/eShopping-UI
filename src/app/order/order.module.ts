import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [OrderComponent, CategoryComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
