import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CheckoutRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    DialogModule,
  ],
  exports: [RouterModule],
})
export class CheckoutModule {
}
