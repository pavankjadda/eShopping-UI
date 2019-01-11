import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RegisterManagementRoutes} from '../account/register/register-management.routing';

@NgModule(
  {
    imports: [
      RouterModule.forChild(RegisterManagementRoutes)
    ],
    exports: [
      RouterModule
    ]
  } )

export class AdminRoutingModule
{
}
