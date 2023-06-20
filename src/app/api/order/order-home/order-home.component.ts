import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-order-home",
  templateUrl: "./order-home.component.html",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class OrderHomeComponent {}
