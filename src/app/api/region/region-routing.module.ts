import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";
import {RegionComponent} from "./region.component";

export const regionManagementRoute: Routes = [
  {
    path: "",
    component: RegionComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(regionManagementRoute)],
  exports: [RouterModule],
})
export class RegionRoutingModule {}
