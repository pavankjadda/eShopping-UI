import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ActivateComponent} from './activate/activate.component';
import {RegisterComponent} from './register/register.component';
import {PasswordComponent} from './password/password.component';
import {SettingsComponent} from './settings/settings.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {UserProfileComponent} from './user-profile/user-profile.component';


@NgModule({
  imports: [ RouterModule,CommonModule],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    SettingsComponent,
    PasswordResetComponent,
    UserProfileComponent
  ]
})
export class AccountModule { }

