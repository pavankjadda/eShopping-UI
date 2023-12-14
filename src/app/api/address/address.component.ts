import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserAuthGuard } from '../../guards/user-auth.guard';

@Component({
	selector: 'app-address',
	templateUrl: './address.component.html',
	standalone: true,
})
export class AddressComponent {}

export const addressRoutes: Routes = [
	{
		path: '',
		component: AddressComponent,
		canActivate: [UserAuthGuard],
	},
];
