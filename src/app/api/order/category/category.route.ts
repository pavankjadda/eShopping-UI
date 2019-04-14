import {Routes} from '@angular/router';
import {CategoryComponent} from './category.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryViewComponent} from './category-view/category-view.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import {CategoryHomeComponent} from './category-home/category-home.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';


export const categoryManagementRoute: Routes=[
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: CategoryListComponent
      },
      {
        path: 'new',
        component: CategoryNewComponent
      },
      {
        path: ':id',
        component: CategoryViewComponent,
        children: [
          {
            path: 'edit',
            component: CategoryEditComponent
          },
          {
            path: 'delete',
            component: CategoryDeleteComponent
          }
        ]
      },
      {
        path: '',
        component: CategoryHomeComponent
      }
    ]
  }];



/*
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
*/
