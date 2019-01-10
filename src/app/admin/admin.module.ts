import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from './user-management/user-management.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HealthComponent } from './health/health.component';
import { UserManagementHomeComponent } from './user-management/user-management-home/user-management-home.component';

@NgModule({
  declarations: [UserManagementComponent, AdminHomeComponent, HealthComponent, UserManagementHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule
{
}
