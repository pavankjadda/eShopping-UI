import {HealthComponent} from "./health.component";
import {Routes} from "@angular/router";
import {AuthGuard} from "../../guards/auth.guard";

export const HealthManagementRoutes: Routes = [
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
