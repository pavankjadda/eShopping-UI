import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterModule} from '@angular/router';
import {ApiRoutingModule} from '../api-routing.module';
import {categoryManagementRoute} from './category.route';

@NgModule({
  declarations:
    [

    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    ApiRoutingModule,
    RouterModule.forChild(categoryManagementRoute),
  ],
  exports:
    [
      RouterModule
    ]
} )
export class CategoryModule { }
