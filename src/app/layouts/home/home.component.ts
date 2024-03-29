import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',

	standalone: true,
	imports: [RouterLink],
})
export class HomeComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService,
	) {}

	ngOnInit() {
		if (!this.authService.isUserLoggedIn()) {
			this.authService.logout();
			this.router.navigate(['/login']);
		}
	}
}
