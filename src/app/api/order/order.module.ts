import {NgModule} from "@angular/core";
import {OrderRoutingModule} from "./order-routing.module";
import {OrderComponent} from "./order.component";
import {OrderHomeComponent} from "./order-home/order-home.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderEditComponent} from "./order-edit/order-edit.component";
import {OrderViewComponent} from "./order-view/order-view.component";
import {OrderDeleteComponent} from "./order-delete/order-delete.component";
import {OrderNewComponent} from "./order-new/order-new.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    OrderComponent,
    OrderHomeComponent,
    OrderListComponent,
    OrderEditComponent,
    OrderViewComponent,
    OrderDeleteComponent,
    OrderNewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    OrderRoutingModule,
  ],
  exports: [RouterModule],
})
export class OrderModule {}
