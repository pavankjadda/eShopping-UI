import {Route, Routes} from '@angular/router';
import {OrderDetailComponent} from './order-detail.component';

export const orderDetailManagementRoute: Routes=[
  {
    path: 'order',
    component: OrderDetailComponent,
    children: [
      {
        path: 'list',
        component: OrderDetailComponent,
        children: [
          {
            path: ':id',
            component: OrderDetailComponent
          }
        ]
      },
      {
        path: 'create',
        component: OrderDetailComponent
      },
      {
        path: 'new',
        component: OrderDetailComponent
      },
      {
        path: 'update',
        component: OrderDetailComponent
      },
      {
        path: ':id/edit',
        component: OrderDetailComponent
      },
      {
        path: ':id',
        component: OrderDetailComponent
      },
      {
        path: '',
        component: OrderDetailComponent
      }
    ]
  }];

