import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  Routes,
} from "@angular/router";
import { AuthService } from "../../core/auth/auth.service";
import { AuthGuard } from "../../guards/auth.guard";
import { UserManagementHomeComponent } from "../user-management/user-management-home/user-management-home.component";
import { UserManagementComponent } from "../user-management/user-management.component";
import { HealthComponent } from "../health/health.component";

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //if(this.authService.currentUserValue.token === '' || !this.authService.isValidSession())
    if (!this.authService.isUserLoggedIn()) {
      this.authService.logout();
      this.router.navigate(["/login"]);
    }
  }
}

export const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/user",
    component: UserManagementHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "list",
        component: UserManagementComponent,
      },
      {
        path: "new",
        component: UserManagementComponent,
      },
      {
        path: ":id",
        component: UserManagementComponent,
        children: [
          {
            path: "edit",
            component: UserManagementComponent,
          },
          {
            path: "delete",
            component: UserManagementComponent,
          },
        ],
      },
      {
        path: "",
        component: UserManagementComponent,
      },
    ],
  },
  {
    path: "admin/health",
    component: HealthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "list",
        component: HealthComponent,
      },
      {
        path: "new",
        component: HealthComponent,
      },
      {
        path: ":id",
        component: HealthComponent,
        children: [
          {
            path: "edit",
            component: HealthComponent,
          },
          {
            path: "delete",
            component: HealthComponent,
          },
        ],
      },
      {
        path: "",
        component: HealthComponent,
      },
    ],
  },
];
