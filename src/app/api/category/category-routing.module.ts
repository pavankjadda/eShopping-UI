import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryViewComponent} from "./category-view/category-view.component";
import {CategoryNewComponent} from "./category-new/category-new.component";
import {CategoryHomeComponent} from "./category-home/category-home.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {NgModule} from "@angular/core";

export const categoryManagementRoute: Routes = [
  {
    path: "",
    component: CategoryHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "list",
    component: CategoryListComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "new",
    component: CategoryNewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id",
    component: CategoryViewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/edit",
    component: CategoryEditComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/delete",
    component: CategoryDeleteComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(categoryManagementRoute)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
