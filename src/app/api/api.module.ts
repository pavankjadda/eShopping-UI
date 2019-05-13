import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {CityComponent} from './city/city.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {StateComponent} from './state/state.component';
import {AddressComponent} from './address/address.component';
import {AddressTypeComponent} from './address-type/address-type.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ApiRoutingModule} from './api-routing.module';
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
import {ManufacturerModule} from './manufacturer/manufacturer.module';
import {ProductModule} from './product/product.module';


@NgModule({
  declarations:
    [
    CityComponent,
    CountryComponent,
    RegionComponent,
    StateComponent,
    AddressComponent,
    AddressTypeComponent,

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
    CategoryModule,
    ManufacturerModule,
    ProductModule
  ]
})
export class ApiModule { }

