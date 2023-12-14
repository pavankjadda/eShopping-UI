import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { environment } from "../../../../environments/environment";
import { CART_API_URL, PRODUCT_API_URL } from "../../../app.constants";
import { AuthService } from "../../../core/auth/auth.service";
import { CartService } from "../../cart/service/cart.service";
import { Product } from "../model/product";
import { ProductService } from "../service/product.service";
import { CartProductJson } from "../../cart/model/cart-product-json";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  standalone: true,
  imports: [
    NgxSpinnerModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class ProductViewComponent implements OnInit {
  product: Product;
  productForm = new UntypedFormGroup({
    id: new UntypedFormControl({ value: "", disabled: true }),
    name: new UntypedFormControl(""),
    description: new UntypedFormControl(""),
    price: new UntypedFormControl(""),
    amount: new UntypedFormControl(""),
    category: new UntypedFormControl(""),
    currency: new UntypedFormControl(""),
    manufacturer: new UntypedFormControl(""),
    quantityAvailable: new UntypedFormControl(""),
  });

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private authService: AuthService,
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  productDataAvailable(): boolean {
    return this.product !== undefined;
  }

  async addProductToCart() {
    await this.spinner.show();
    let cart = this.cartService.getCurrentCart;
    if (cart === null) {
      const initializeCartUrl =
        environment.BASE_URL + CART_API_URL + "/initialize";
      let userProfile = this.authService.currentUser().userProfile;
      await this.cartService.initializeCart(initializeCartUrl, userProfile);
    }
    cart = this.cartService.getCurrentCart;
    const addProductToCartUrl =
      environment.BASE_URL + CART_API_URL + "/product/add";
    let cartProductJson = new CartProductJson();
    cartProductJson.cartId = cart.id;
    cartProductJson.productId = this.product.id;
    cartProductJson.quantity = 1;
    cartProductJson = CartService.doesProductExistInCart(cart, cartProductJson);

    this.cartService
      .addProductToCart(addProductToCartUrl, cartProductJson)
      .subscribe(
        (data) => {
          localStorage.setItem("currentCart", JSON.stringify(data));
          this.cartService.currentCartSubject.next(data);
        },
        (error1) => {
          this.spinner.hide();
          console.log("Failed to update cart");
        },
        () => {
          this.router.navigate(["/cart"]);
        },
      );
  }

  isProductInventoryEmpty(): boolean {
    return (
      this.product.productInventory === null ||
      this.product.productInventory.quantity <= 0
    );
  }

  private getProduct() {
    const id = this.route.snapshot.paramMap.get("id");
    const url = environment.BASE_URL + PRODUCT_API_URL + "/find/" + id;
    this.productService
      .getProductDetails(url)
      .pipe()
      .subscribe(
        (data) => {
          this.product = data;
          this.productForm.patchValue({
            id: data.id,
            name: data.name,
            description: data.description,
            quantityAvailable: data.productInventory.quantity,
            price: data.price.currency.symbol + data.price.amount,
            amount: data.price.amount,
            currency: data.price.currency.symbol,
            category: data.category.name,
            manufacturer: data.manufacturer.name,
          });
        },
        (error) => {
          console.log(error);
        },
      );
  }
}
