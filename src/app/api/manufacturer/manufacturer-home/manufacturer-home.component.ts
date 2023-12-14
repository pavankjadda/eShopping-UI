import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-manufacturer-home',
	templateUrl: './manufacturer-home.component.html',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
})
export class ManufacturerHomeComponent {}
