import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {
  RegisterComponent,
  ActivateComponent,
  PasswordComponent,
  SettingsComponent
} from './';

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
