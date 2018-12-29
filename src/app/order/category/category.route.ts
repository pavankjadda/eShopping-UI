import {Route, Routes} from '@angular/router';
import {CategoryComponent} from './category.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryViewComponent} from './category-view/category-view.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import {CategoryHomeComponent} from './category-home/category-home.component';

export const categoryManagementRoute: Routes=[
  {
      path: 'category',
      component: CategoryComponent,
      children: [
        {
          path: 'list',
          component: CategoryListComponent,
          children: [
            {
              path: ':id',
              component: CategoryViewComponent
            }
          ]
        },
        {
          path: 'create',
          component: CategoryNewComponent
        },
        {
          path: 'new',
          component: CategoryNewComponent
        },
        {
          path: 'update',
          component: CategoryComponent
        },
        {
          path: ':id/edit',
          component: CategoryViewComponent
        },
        {
          path: ':id',
          component: CategoryViewComponent
        },
        {
          path: '',
          component: CategoryHomeComponent
        }
      ]
    }];

