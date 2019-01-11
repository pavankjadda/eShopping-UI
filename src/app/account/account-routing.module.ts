import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminHomeRoutes} from '../admin/admin-home/admin-home-routing';

@NgModule(
  {
    imports: [
      RouterModule.forChild(AdminHomeRoutes)
    ],
    exports: [
      RouterModule
    ]
  } )

export class AccountRoutingModule
{
}
