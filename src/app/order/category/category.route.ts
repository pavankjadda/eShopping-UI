import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';
import {CategoryComponent} from './category.component';

export const categoryManagementRoute: Routes = [
  {
    path: 'category/list',
    component: CategoryComponent
  },
  {
    path: 'category/:login/view',
    component: CategoryComponent
  },
  {
    path: 'category/create',
    component: CategoryComponent
  },
  {
    path: 'category/:login/edit',
    component: CategoryComponent
  }
];
