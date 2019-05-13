import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations:
    [
      CheckoutComponent
    ],
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      RouterModule,
      CheckoutRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class CheckoutModule
{
  
}


