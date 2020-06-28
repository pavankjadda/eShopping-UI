import {Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {LogoutComponent} from "../logout/logout.component";

export const LoginManagementRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "logout",
    component: LogoutComponent,
  },
];
