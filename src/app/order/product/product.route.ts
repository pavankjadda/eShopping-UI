import {Routes} from '@angular/router';
import {ProductHomeComponent} from './product-home/product-home.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';

export const productManagementRoute: Routes=[
  {
    path: 'product',
    component: ProductHomeComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: ProductHomeComponent
      },
      {
        path: 'new',
        component: ProductHomeComponent
      },
      {
        path: ':id',
        component: ProductHomeComponent,
        children: [
          {
            path: 'edit',
            component: ProductHomeComponent
          },
          {
            path: 'delete',
            component: ProductHomeComponent
          }
        ]
      },
      {
        path: '',
        component: ProductHomeComponent
      }
    ]
  }];

