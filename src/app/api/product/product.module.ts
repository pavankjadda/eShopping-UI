import {NgModule} from "@angular/core";
import {ProductComponent} from "./product.component";
import {ProductHomeComponent} from "./product-home/product-home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductNewComponent} from "./product-new/product-new.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {RouterModule} from "@angular/router";
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  declarations: [
    ProductComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductDeleteComponent,
    ProductViewComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    ProductRoutingModule,
  ],
  exports: [RouterModule],
})
export class ProductModule {}
