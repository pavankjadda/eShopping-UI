import {Routes} from "@angular/router";
import {AdminHomeComponent} from "./admin-home.component";
import {AuthGuard} from "../../guards/auth.guard";

export const AdminHomeRoutes: Routes = [
  {
    path: "admin",
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
  },
];
