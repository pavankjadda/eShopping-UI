import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CoreRoutingModule} from "./core-routing.module";
import {UserComponent} from "./user/user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {RoleComponent} from "./role/role.component";
import {PrivilegeComponent} from "./privilege/privilege.component";
import {LogoutComponent} from "./logout/logout.component";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CoreRoutingModule,
  ],
  declarations: [
    LoginComponent,
    UserComponent,
    RoleComponent,
    PrivilegeComponent,
    LogoutComponent,
  ],
})
export class CoreModule {}
