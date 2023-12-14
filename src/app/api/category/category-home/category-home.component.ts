import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-category-home',
	templateUrl: './category-home.component.html',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
})
export class CategoryHomeComponent {}
