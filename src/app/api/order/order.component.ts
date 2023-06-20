import { Component } from "@angular/core";
import { RouterOutlet, Routes } from "@angular/router";
import { OrderHomeComponent } from "./order-home/order-home.component";
import { UserAuthGuard } from "../../guards/user-auth.guard";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderNewComponent } from "./order-new/order-new.component";
import { OrderViewComponent } from "./order-view/order-view.component";
import { OrderEditComponent } from "./order-edit/order-edit.component";
import { OrderDeleteComponent } from "./order-delete/order-delete.component";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  standalone: true,
  imports: [RouterOutlet],
})
export class OrderComponent {}

export const orderRoutes: Routes = [
  {
    path: "",
    component: OrderHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "list",
    component: OrderListComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "new",
    component: OrderNewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id",
    component: OrderViewComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/edit",
    component: OrderEditComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: ":id/delete",
    component: OrderDeleteComponent,
    canActivate: [UserAuthGuard],
  },
];
