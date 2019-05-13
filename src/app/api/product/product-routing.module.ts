import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductNewComponent} from './product-new/product-new.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductHomeComponent} from './product-home/product-home.component';
import {NgModule} from '@angular/core';


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
        path: ':id/edit',
        component: ProductEditComponent
      },
      {
        path: ':id/delete',
        component: ProductDeleteComponent
      },
      {
        path: ':id',
        component: ProductViewComponent
      },
      {
        path: '',
        component: ProductHomeComponent
      }
    ]
  }];


@NgModule(
  {
    imports: [
      RouterModule.forChild(productManagementRoute),
    ],
    exports: [
      RouterModule
    ]
  })

export class ProductRoutingModule
{

}
