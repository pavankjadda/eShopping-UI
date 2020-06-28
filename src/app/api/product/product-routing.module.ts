import {RouterModule, Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductNewComponent} from "./product-new/product-new.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductHomeComponent} from "./product-home/product-home.component";
import {NgModule} from "@angular/core";

export const productManagementRoute: Routes = [
  {
    path: "",
    component: ProductHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "list",
    component: ProductListComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "new",
    component: ProductNewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id",
    component: ProductViewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/edit",
    component: ProductEditComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/delete",
    component: ProductDeleteComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productManagementRoute)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
