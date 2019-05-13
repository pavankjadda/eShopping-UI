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
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {ProductHomeComponent} from './product/product-home/product-home.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductNewComponent} from './product/product-new/product-new.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductViewComponent} from './product/product-view/product-view.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ApiRoutingModule} from './api-routing.module';
import {ManufacturerComponent} from './manufacturer/manufacturer.component';
import {ManufacturerListComponent} from './manufacturer/manufacturer-list/manufacturer-list.component';
import {ManufacturerEditComponent} from './manufacturer/manufacturer-edit/manufacturer-edit.component';
import {ManufacturerHomeComponent} from './manufacturer/manufacturer-home/manufacturer-home.component';
import {ManufacturerNewComponent} from './manufacturer/manufacturer-new/manufacturer-new.component';
import {ManufacturerViewComponent} from './manufacturer/manufacturer-view/manufacturer-view.component';
import {ManufacturerDeleteComponent} from './manufacturer/manufacturer-delete/manufacturer-delete.component';
import {OrderComponent} from './order/order.component';
import {OrderHomeComponent} from './order/order-home/order-home.component';
import {OrderListComponent} from './order/order-list/order-list.component';
import {OrderEditComponent} from './order/order-edit/order-edit.component';
import {OrderViewComponent} from './order/order-view/order-view.component';
import {OrderDeleteComponent} from './order/order-delete/order-delete.component';
import {OrderNewComponent} from './order/order-new/order-new.component';
import {CartComponent} from './cart/cart.component';
import {TypeaheadModule} from 'ngx-bootstrap';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule, DialogModule, PanelModule, RadioButtonModule, SpinnerModule} from 'primeng/primeng';
import {CheckoutComponent} from './checkout/checkout.component';
import {CategoryModule} from './category/category.module';


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
    CategoryEditComponent,
    CategoryDeleteComponent,
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
    ManufacturerDeleteComponent,
    OrderComponent,
    OrderHomeComponent,
    OrderListComponent,
    OrderEditComponent,
    OrderViewComponent,
    OrderDeleteComponent,
    OrderNewComponent,
    CartComponent,
    CheckoutComponent
  ],
            imports: [
              CommonModule,
              ReactiveFormsModule,
              NgxSpinnerModule,
              RouterModule,
              ApiRoutingModule,
              TypeaheadModule,
              DataViewModule,
              TableModule,
              SpinnerModule,
              FormsModule,
              PanelModule,
              RadioButtonModule,
              ConfirmDialogModule,
              DialogModule,
              CategoryModule
            ]
          })
export class ApiModule { }

