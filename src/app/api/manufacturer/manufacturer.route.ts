import {Routes} from '@angular/router';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {ManufacturerComponent} from './manufacturer.component';
import {ManufacturerListComponent} from './manufacturer-list/manufacturer-list.component';
import {ManufacturerHomeComponent} from './manufacturer-home/manufacturer-home.component';
import {ManufacturerNewComponent} from './manufacturer-new/manufacturer-new.component';
import {ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';
import {ManufacturerViewComponent} from './manufacturer-view/manufacturer-view.component';
import {ManufacturerDeleteComponent} from './manufacturer-delete/manufacturer-delete.component';

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

