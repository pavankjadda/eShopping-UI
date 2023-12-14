import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { ManufacturerHomeComponent } from './manufacturer-home/manufacturer-home.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerNewComponent } from './manufacturer-new/manufacturer-new.component';
import { ManufacturerViewComponent } from './manufacturer-view/manufacturer-view.component';
import { ManufacturerEditComponent } from './manufacturer-edit/manufacturer-edit.component';
import { ManufacturerDeleteComponent } from './manufacturer-delete/manufacturer-delete.component';

@Component({
	selector: 'app-manufacturer',
	templateUrl: './manufacturer.component.html',
	standalone: true,
	imports: [RouterOutlet],
})
export class ManufacturerComponent {}

export const manufacturerRoutes: Routes = [
	{
		path: '',
		component: ManufacturerHomeComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: 'list',
		component: ManufacturerListComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: 'new',
		component: ManufacturerNewComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: ':id',
		component: ManufacturerViewComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: ':id/edit',
		component: ManufacturerEditComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: ':id/delete',
		component: ManufacturerDeleteComponent,
		canActivate: [UserAuthGuard],
	},
];
