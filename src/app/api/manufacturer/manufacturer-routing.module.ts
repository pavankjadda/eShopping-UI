import {RouterModule, Routes} from '@angular/router';
import {ManufacturerComponent} from './manufacturer.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {ManufacturerListComponent} from './manufacturer-list/manufacturer-list.component';
import {ManufacturerNewComponent} from './manufacturer-new/manufacturer-new.component';
import {ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';
import {ManufacturerDeleteComponent} from './manufacturer-delete/manufacturer-delete.component';
import {ManufacturerViewComponent} from './manufacturer-view/manufacturer-view.component';
import {ManufacturerHomeComponent} from './manufacturer-home/manufacturer-home.component';
import {NgModule} from '@angular/core';


export const manufacturerManagementRoute: Routes=[
  {
    path: 'manufacturer',
    component: ManufacturerComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: ManufacturerListComponent
      },
      {
        path: 'new',
        component: ManufacturerNewComponent
      },
      {
        path: ':id/edit',
        component: ManufacturerEditComponent
      },
      {
        path: ':id/delete',
        component: ManufacturerDeleteComponent
      },
      {
        path: ':id',
        component: ManufacturerViewComponent
      },
      {
        path: '',
        component: ManufacturerHomeComponent
      }
    ]
  }];

@NgModule(
  {
    imports: [
      RouterModule.forChild(manufacturerManagementRoute),
    ],
    exports: [
      RouterModule
    ]
  })
export class ManufacturerRoutingModule
{

}
