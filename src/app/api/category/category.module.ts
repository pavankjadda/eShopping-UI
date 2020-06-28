import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {RouterModule} from "@angular/router";
import {CategoryRoutingModule} from "./category-routing.module";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryViewComponent} from "./category-view/category-view.component";
import {CategoryNewComponent} from "./category-new/category-new.component";
import {CategoryHomeComponent} from "./category-home/category-home.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";
import {CategoryComponent} from "./category.component";

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    CategoryViewComponent,
    CategoryNewComponent,
    CategoryHomeComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    CategoryRoutingModule,
  ],
  exports: [RouterModule],
})
export class CategoryModule {}
