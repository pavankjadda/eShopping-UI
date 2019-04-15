import {Routes} from '@angular/router';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {OrderComponent} from './order.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderNewComponent} from './order-new/order-new.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {OrderEditComponent} from './order-edit/order-edit.component';
import {OrderDeleteComponent} from './order-delete/order-delete.component';
import {OrderHomeComponent} from './order-home/order-home.component';

export const orderManagementRoute: Routes=[
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: OrderListComponent
      },
      {
        path: 'new',
        component: OrderNewComponent
      },
      {
        path: ':id',
        component: OrderViewComponent,
        children: [
          {
            path: 'edit',
            component: OrderEditComponent
          },
          {
            path: 'delete',
            component: OrderDeleteComponent
          }
        ]
      },
      {
        path: '',
        component: OrderHomeComponent
      }
    ]
  }];

