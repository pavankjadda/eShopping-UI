import {RouterModule, Routes} from '@angular/router';
import {categoryManagementRoute} from './category/category.route';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild(categoryManagementRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule { }
