import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {ManufacturerListComponent} from "./manufacturer-list/manufacturer-list.component";
import {ManufacturerNewComponent} from "./manufacturer-new/manufacturer-new.component";
import {ManufacturerEditComponent} from "./manufacturer-edit/manufacturer-edit.component";
import {ManufacturerDeleteComponent} from "./manufacturer-delete/manufacturer-delete.component";
import {ManufacturerViewComponent} from "./manufacturer-view/manufacturer-view.component";
import {ManufacturerHomeComponent} from "./manufacturer-home/manufacturer-home.component";
import {NgModule} from "@angular/core";

export const manufacturerManagementRoute: Routes = [
  {
    path: "",
    component: ManufacturerHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "list",
    component: ManufacturerListComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "new",
    component: ManufacturerNewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id",
    component: ManufacturerViewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/edit",
    component: ManufacturerEditComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/delete",
    component: ManufacturerDeleteComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(manufacturerManagementRoute)],
  exports: [RouterModule],
})
export class ManufacturerRoutingModule {}
