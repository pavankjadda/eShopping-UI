import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { RouterOutlet, Routes } from '@angular/router';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	standalone: true,
	imports: [RouterOutlet],
})
export class CategoryComponent implements OnInit {
	constructor(private authService: AuthService) {}

	ngOnInit() {
		if (!this.authService.isUserLoggedIn()) {
		}
	}
}

export const categoryRoutes: Routes = [
	{
		path: '',
		component: CategoryHomeComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: 'list',
		component: CategoryListComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: 'new',
		component: CategoryNewComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: ':id',
		component: CategoryViewComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: ':id/edit',
		component: CategoryEditComponent,
		canActivate: [UserAuthGuard],
	},
	{
		path: ':id/delete',
		component: CategoryDeleteComponent,
		canActivate: [UserAuthGuard],
	},
];
