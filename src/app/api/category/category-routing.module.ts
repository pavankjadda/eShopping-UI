import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryViewComponent} from './category-view/category-view.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import {CategoryHomeComponent} from './category-home/category-home.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {NgModule} from '@angular/core';


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

@NgModule(
  {
  imports: [RouterModule.forChild(categoryManagementRoute)],
  exports: [RouterModule]
})
export class CategoryRoutingModule{ }
