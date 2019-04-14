import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {StateComponent} from './state/state.component';
import {AddressComponent} from './address/address.component';
import {AddressTypeComponent} from './address-type/address-type.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryViewComponent} from './category/category-view/category-view.component';
import {CategoryNewComponent} from './category/category-new/category-new.component';
import {CategoryHomeComponent} from './category/category-home/category-home.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {OrderDetailHomeComponent} from './order-detail/order-detail-home/order-detail-home.component';
import {OrderDetailListComponent} from './order-detail/order-detail-list/order-detail-list.component';
import {OrderDetailNewComponent} from './order-detail/order-detail-new/order-detail-new.component';
import {OrderDetailDeleteComponent} from './order-detail/order-detail-delete/order-detail-delete.component';
import {OrderDetailUpdateComponent} from './order-detail/order-detail-update/order-detail-update.component';
import {OrderDetailViewComponent} from './order-detail/order-detail-view/order-detail-view.component';
import {OrderDetailEditComponent} from './order-detail/order-detail-edit/order-detail-edit.component';
import {ProductHomeComponent} from './product/product-home/product-home.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductNewComponent} from './product/product-new/product-new.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductViewComponent} from './product/product-view/product-view.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ApiRoutingModule} from './api-routing.module';
import {ManufacturerComponent} from './manufacturer/manufacturer.component';
import {ManufacturerListComponent} from './manufacturer/manufacturer-list/manufacturer-list.component';
import {ManufacturerEditComponent} from './manufacturer/manufacturer-edit/manufacturer-edit.component';
import {ManufacturerHomeComponent} from './manufacturer/manufacturer-home/manufacturer-home.component';
import {ManufacturerNewComponent} from './manufacturer/manufacturer-new/manufacturer-new.component';
import {ManufacturerViewComponent} from './manufacturer/manufacturer-view/manufacturer-view.component';
import {ManufacturerDeleteComponent} from './manufacturer/manufacturer-delete/manufacturer-delete.component';


@NgModule({
  declarations: [
    CityComponent,
    CountryComponent,
    RegionComponent,
    StateComponent,
    AddressComponent,
    AddressTypeComponent,
    CategoryComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryViewComponent,
    CategoryNewComponent,
    CategoryHomeComponent,
    OrderDetailComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    OrderDetailHomeComponent,
    OrderDetailListComponent,
    OrderDetailNewComponent,
    OrderDetailDeleteComponent,
    OrderDetailUpdateComponent,
    OrderDetailViewComponent,
    OrderDetailEditComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductDeleteComponent,
    ProductViewComponent,
    ProductEditComponent,
    ManufacturerComponent,
    ManufacturerListComponent,
    ManufacturerEditComponent,
    ManufacturerHomeComponent,
    ManufacturerNewComponent,
    ManufacturerViewComponent,
    ManufacturerDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }

