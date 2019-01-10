import {Routes} from '@angular/router';
import {UserManagementComponent} from './user-management.component';
import {UserManagementHomeComponent} from './user-management-home/user-management-home.component';

export const UserManagementRoutes: Routes = [
    {
      path: 'admin/user',
      component: UserManagementHomeComponent,
      children: [
        {
          path: 'list',
          component: UserManagementComponent
        },
        {
          path: 'new',
          component: UserManagementComponent
        },
        {
          path: ':id',
          component: UserManagementComponent,
          children: [
            {
              path: 'edit',
              component: UserManagementComponent
            },
            {
              path: 'delete',
              component: UserManagementComponent
            }
          ]
        },
        {
          path: '',
          component: UserManagementComponent
        }
      ]
    }];


/*

export const userManagementRoute: Routes=[
  {
    path: 'user',
    component: AdminHomeComponent,
    children: [
      {
        path: 'list',
        component: UserManagementComponent
      },
      {
        path: 'new',
        component: UserManagementComponent
      },
      {
        path: ':id',
        component: UserManagementComponent,
        children: [
          {
            path: 'edit',
            component: UserManagementComponent
          },
          {
            path: 'delete',
            component: UserManagementComponent
          }
        ]
      },
      {
        path: '',
        component: UserManagementComponent
      }
    ]
  }];

*/
