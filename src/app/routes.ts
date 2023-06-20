import { Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { UserAuthGuard } from "./guards/user-auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
];
