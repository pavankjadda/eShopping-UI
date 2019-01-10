import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';

export const LoginManagementRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  }
];
