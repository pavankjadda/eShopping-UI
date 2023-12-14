import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile/user-profile-edit/user-profile-edit.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
	selector: 'app-account',
	standalone: true,
	template: ``,
})
export class AccountComponent {}

export const accountRoutes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'activate', component: ActivateComponent },
	{ path: 'password_reset', component: PasswordResetComponent },
	{ path: 'profile', component: UserProfileComponent },
	{ path: 'profile/edit', component: UserProfileEditComponent },
	{ path: 'settings', component: SettingsComponent },
];
