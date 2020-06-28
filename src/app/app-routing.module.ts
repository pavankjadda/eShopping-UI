import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./layouts/home/home.component";
import {UserAuthGuard} from "./guards/user-auth.guard";

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
