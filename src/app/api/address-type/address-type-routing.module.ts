import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";
import {AddressTypeComponent} from "./address-type.component";

export const addressTypeManagementRoute: Routes = [
  {
    path: "",
    component: AddressTypeComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(addressTypeManagementRoute)],
  exports: [RouterModule],
})
export class AddressTypeRoutingModule {}
