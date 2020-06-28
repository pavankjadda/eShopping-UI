import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";
import {StateComponent} from "./state.component";

export const stateManagementRoute: Routes = [
  {
    path: "",
    component: StateComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(stateManagementRoute)],
  exports: [RouterModule],
})
export class StateRoutingModule {}
