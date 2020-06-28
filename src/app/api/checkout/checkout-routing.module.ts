import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./checkout.component";
import {UserAuthGuard} from "../../guards/user-auth.guard";

export const checkManagementRoute: Routes = [
  {
    path: "",
    component: CheckoutComponent,
    canActivate: [UserAuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(checkManagementRoute)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
