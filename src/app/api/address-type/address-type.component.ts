import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { UserAuthGuard } from "../../guards/user-auth.guard";

@Component({
  selector: "app-address-type",
  templateUrl: "./address-type.component.html",
  standalone: true,
})
export class AddressTypeComponent {}

export const addressTypeRoutes: Routes = [
  {
    path: "",
    component: AddressTypeComponent,
    canActivate: [UserAuthGuard],
  },
];
