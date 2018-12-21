import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ActivateComponent} from './activate/activate.component';
import {RegisterComponent} from './register/register.component';
import {PasswordComponent} from './password/password.component';
import {SettingsComponent} from './settings/settings.component';


@NgModule({
  imports: [ RouterModule],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    SettingsComponent
  ]
})
export class AccountModule { }

