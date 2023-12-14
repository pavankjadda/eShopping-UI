import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { ORDER_API_URL } from "../../../app.constants";
import { Order } from "../model/order";
import { OrderService } from "../service/order.service";
import { RouterLink } from "@angular/router";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
})
export class OrderListComponent implements OnInit {
  orders: Array<Order>;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrders();
  }

  orderDetailsDataAvailable() {
    return this.orders !== undefined;
  }

  private getOrders() {
    const url = environment.BASE_URL + ORDER_API_URL + "/list";
    this.orderService.getOrders(url).subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.log("Error Occurred while fetching Order list");
      },
      () => {
        console.log("getOrders success");
      },
    );
  }
}
