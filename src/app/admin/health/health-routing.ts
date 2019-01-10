import {HealthComponent} from './health.component';
import {Routes} from '@angular/router';

export const HealthManagementRoutes: Routes = [
  {
    path: 'admin/health',
    component: HealthComponent,
    children: [
      {
        path: 'list',
        component: HealthComponent
      },
      {
        path: 'new',
        component: HealthComponent
      },
      {
        path: ':id',
        component: HealthComponent,
        children: [
          {
            path: 'edit',
            component: HealthComponent
          },
          {
            path: 'delete',
            component: HealthComponent
          }
        ]
      },
      {
        path: '',
        component: HealthComponent
      }
    ]
  }
];

