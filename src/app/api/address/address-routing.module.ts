import {NgModule} from "@angular/core";
import {AddressComponent} from "./address.component";
import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";

export const addressManagementRoute: Routes = [
  {
    path: "",
    component: AddressComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(addressManagementRoute)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
