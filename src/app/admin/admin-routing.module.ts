import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserManagementRoutes} from './user-management/user-management.route';
import {HealthManagementRoutes} from './health/health-routing';
@NgModule(
  {
    imports: [
      RouterModule.forChild(UserManagementRoutes),
      RouterModule.forChild(HealthManagementRoutes)
    ],
    exports: [
      RouterModule
    ]
  } )

export class AdminRoutingModule
{
}
