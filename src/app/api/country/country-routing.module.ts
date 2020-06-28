import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";
import {CountryComponent} from "./country.component";

export const countryManagementRoute: Routes = [
  {
    path: "",
    component: CountryComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(countryManagementRoute)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
