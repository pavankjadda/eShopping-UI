import {Component, OnInit} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {PRODUCT_API_URL} from "../../../app.constants";
import {Product} from "../../product/model/product";
import {ProductService} from "../../product/service/product.service";
import {OrderService} from "../service/order.service";

@Component({
  selector: "app-order-new",
  templateUrl: "./order-new.component.html",
  styleUrls: ["./order-new.component.scss"],
})
export class OrderNewComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    const productsUrl = environment.BASE_URL + PRODUCT_API_URL + "/list";
    this.productService.getProducts(productsUrl).subscribe(
      (data) => {
        this.products = data;
        console.log("Successfully loaded products");
      },
      (error1) => {
        console.log("Failed to load products");
      }
    );
  }
}
