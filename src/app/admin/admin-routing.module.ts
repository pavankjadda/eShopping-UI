import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserManagementComponent} from './user-management/user-management.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {HealthComponent} from './health/health.component';
import {UserManagementHomeComponent} from './user-management/user-management-home/user-management-home.component';
import {UserManagementRoutes} from './user-management/user-management.route';
import {HealthManagementRoutes} from './health/health-routing';
import {AdminHomeRoutes} from './admin-home/admin-home-routing';

@NgModule({
  imports: [
    RouterModule.forChild(AdminHomeRoutes),
    RouterModule.forChild(UserManagementRoutes),
    RouterModule.forChild(HealthManagementRoutes),
  ],
  exports: [RouterModule],
  declarations: [
    UserManagementComponent,
    AdminHomeComponent,
    HealthComponent,
    UserManagementHomeComponent,
  ],
})
export class AdminRoutingModule {
}
