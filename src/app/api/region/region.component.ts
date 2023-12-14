import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserAuthGuard } from '../../guards/user-auth.guard';

@Component({
	selector: 'app-region',
	templateUrl: './region.component.html',
	standalone: true,
})
export class RegionComponent {}

export const regionRoutes: Routes = [
	{
		path: '',
		component: RegionComponent,
		canActivate: [UserAuthGuard],
	},
];
