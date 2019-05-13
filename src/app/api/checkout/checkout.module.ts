import {NgModule} from '@angular/core';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TypeaheadModule} from 'ngx-bootstrap';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule, DialogModule, PanelModule, RadioButtonModule, SpinnerModule} from 'primeng/primeng';

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
      TypeaheadModule,
      DataViewModule,
      TableModule,
      SpinnerModule,
      FormsModule,
      PanelModule,
      RadioButtonModule,
      ConfirmDialogModule,
      DialogModule,
      CheckoutRoutingModule,

  ],
  exports: [
    RouterModule
  ]
})

export class CheckoutModule
{
  
}


