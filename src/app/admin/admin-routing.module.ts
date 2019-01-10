import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserManagementRoutes} from './user-management/user-management.route';
import {HealthManagementRoutes} from './health/health-routing';
import {AdminHomeRoutes} from './admin-home/admin-home-routing';

@NgModule(
  {
    imports: [
      RouterModule.forChild(AdminHomeRoutes),
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
