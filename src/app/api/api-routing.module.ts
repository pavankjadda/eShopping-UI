import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {checkManagementRoute} from './checkout/checkout.route';

@NgModule(
  {
    imports: [
      RouterModule.forChild(checkManagementRoute),
    ],
    exports: [
      RouterModule
    ]
  })
export class ApiRoutingModule {

}
