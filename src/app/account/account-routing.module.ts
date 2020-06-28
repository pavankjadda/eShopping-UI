import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {ActivateComponent} from "./activate/activate.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {UserProfileEditComponent} from "./user-profile/user-profile-edit/user-profile-edit.component";

export const accountManagementRoutes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "activate", component: ActivateComponent },
  { path: "password_reset", component: PasswordResetComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "profile/edit", component: UserProfileEditComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(accountManagementRoutes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
