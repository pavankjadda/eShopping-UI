import {NgModule} from "@angular/core";
import {CheckoutComponent} from "./checkout.component";
import {CheckoutRoutingModule} from "./checkout-routing.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CheckoutRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class CheckoutModule {}
