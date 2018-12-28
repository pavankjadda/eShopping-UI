import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';
import {CategoryComponent} from './category.component';
import {CategoryListComponent} from './category-list/category-list.component';

export const categoryManagementRoute: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      {
        path: 'list',
        component: CategoryListComponent,
      },
      {
        path: ':id',
        component: CategoryComponent,
      },
      {
        path: 'create',
        component: CategoryComponent,
      },
      {
        path: 'update',
        component: CategoryComponent,
      },
      {
        path: ':id/edit',
        component: CategoryComponent,
      }]
  }
];

