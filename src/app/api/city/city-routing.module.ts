import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";
import {CityComponent} from "./city.component";

export const cityManagementRoute: Routes = [
  {
    path: "",
    component: CityComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cityManagementRoute)],
  exports: [RouterModule],
})
export class CityRoutingModule {}
