import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

import {ActivateComponent} from "./activate/activate.component";
import {RegisterComponent} from "./register/register.component";
import {PasswordComponent} from "./password/password.component";
import {SettingsComponent} from "./settings/settings.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AccountRoutingModule} from "./account-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserProfileEditComponent} from "./user-profile/user-profile-edit/user-profile-edit.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    AccountRoutingModule,
  ],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    SettingsComponent,
    PasswordResetComponent,
    UserProfileComponent,
    UserProfileEditComponent,
  ],
})
export class AccountModule {}
