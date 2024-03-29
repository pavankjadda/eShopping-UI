import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth/auth.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	standalone: true,
	imports: [NgxSpinnerModule, FormsModule, ReactiveFormsModule, NgClass, NgIf],
})
export class LoginComponent implements OnInit {
	message: string;
	loginForm: UntypedFormGroup;
	submitted = false;
	returnUrl: string;
	loginFailed: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService,
		private spinner: NgxSpinnerService,
	) {}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	ngOnInit() {
		// redirect to home if already logged in
		if (this.authService.isUserLoggedIn()) {
			this.router.navigate(['/home']);
		}

		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
		});

		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		//Logout user if already logged in
		this.logout();
	}

	login() {
		this.spinner.show();
		this.authService.login(this.f.username.value, this.f.password.value).subscribe(
			(response) => {
				if (response['token'] && this.authService.isUserLoggedIn()) {
					this.router.navigate(['/home']);
				} else {
					localStorage.removeItem('currentUser');
					this.router.navigate(['/login']);
				}
			},
			(error) => {
				console.log(error);
				this.loginFailed = true;
				this.spinner.hide();
			},
			() => {
				this.spinner.hide();
			},
		);
	}

	logout() {
		this.authService.logout();
		this.setMessage();
	}

	isUserLoggedIn() {}

	resetForm() {
		this.f.username.setValue(null);
		this.f.password.setValue(null);
	}

	private setMessage() {
		this.message = 'Logged ' + (this.authService.isUserLoggedIn() ? 'in' : 'out');
	}
}
