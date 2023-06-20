import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/auth/auth.service";
import { RouterOutlet, Routes } from "@angular/router";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { UserAuthGuard } from "../../guards/user-auth.guard";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNewComponent } from "./product-new/product-new.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  standalone: true,
  imports: [RouterOutlet],
})
export class ProductComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.isUserLoggedIn()) {
    }
  }
}

export const productRoutes: Routes = [
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
