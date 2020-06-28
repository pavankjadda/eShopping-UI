import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart.component";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";

export const cartManagementRoute: Routes = [
  {
    path: "",
    component: CartComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cartManagementRoute)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
