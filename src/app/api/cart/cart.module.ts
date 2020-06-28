import {NgModule} from "@angular/core";
import {CartRoutingModule} from "./cart-routing.module";
import {RouterModule} from "@angular/router";
import {CartComponent} from "./cart.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {SpinnerModule} from "primeng";

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    CartRoutingModule,
    FormsModule,
    SpinnerModule,
  ],
  exports: [RouterModule],
})
export class CartModule {}
