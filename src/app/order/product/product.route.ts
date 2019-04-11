import {Routes} from '@angular/router';
import {ProductHomeComponent} from './product-home/product-home.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product.component';
import {ProductNewComponent} from './product-new/product-new.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';

export const productManagementRoute: Routes=[
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'new',
        component: ProductNewComponent
      },
      {
        path: ':id',
        component: ProductViewComponent,
        children: [
          {
            path: 'edit',
            component: ProductUpdateComponent
          },
          {
            path: 'delete',
            component: ProductDeleteComponent
          }
        ]
      },
      {
        path: '',
        component: ProductHomeComponent
      }
    ]
  }];

