import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Cart} from "../model/cart";
import {BehaviorSubject, Observable} from "rxjs";
import {CART_STATUS_API_URL} from "../../../app.constants";
import {CartStatus} from "../model/cart-status";
import {UserProfile} from "../../../account/user-profile/model/user-profile";
import {ProductInventory} from "../../product/model/product-inventory";
import {TaxRate} from "../../checkout/model/taxrate";
import {CartShippingAddress} from "../model/cart-shipping-address";
import {CartBillingAddress} from "../model/cart-billing-address";
import {environment} from "../../../../environments/environment";
import {CartProductJson} from "../model/cart-product-json";

@Injectable({
  providedIn: "root",
})
export class CartService {
  public currentCartSubject: BehaviorSubject<Cart>;
  public currentCart: Observable<Cart>;
  public cartStatuses: Array<CartStatus>;

  static doesProductExistInCart(
    cart: Cart,
    newCartProductDtoSlim: CartProductJson
  ) {
    if (
      cart.cartProducts === null ||
      cart.cartProducts === undefined ||
      cart.cartProducts.length === 0
    ) {
      newCartProductDtoSlim.quantity = 1;
    }
    for (let i = 0; i < cart.cartProducts.length; i++) {
      if (cart.cartProducts[i].product.id === newCartProductDtoSlim.productId) {
        newCartProductDtoSlim.quantity = cart.cartProducts[i].quantity + 1;
        newCartProductDtoSlim.cartProductId = cart.cartProducts[i].id;
        break;
      }
    }
    return newCartProductDtoSlim;
  }

  constructor(private httpClient: HttpClient) {
    if (
      localStorage.getItem("currentCart") === "undefined" ||
      localStorage.getItem("currentCart") === null
    ) {
      this.currentCartSubject = new BehaviorSubject<Cart>(null);
      this.currentCart = this.currentCartSubject.asObservable();
    } else {
      this.currentCartSubject = new BehaviorSubject<Cart>(
        JSON.parse(localStorage.getItem("currentCart"))
      );
      this.currentCart = this.currentCartSubject.asObservable();
    }

    this.getDraftCartStatusFromBackend();
  }

  async initializeCart(initializeCartUrl: string, userProfile: UserProfile) {
    let response = await this.httpClient
      .post<any>(initializeCartUrl, userProfile)
      .toPromise();
    localStorage.setItem("currentCart", JSON.stringify(response));
    this.currentCartSubject.next(response);
  }

  public get getCurrentCart(): Cart {
    return this.currentCartSubject.value;
  }

  getMyCart(url: string) {
    return this.httpClient.get<Cart>(url);
  }

  addProductToCart(url: string, cartProductDtoSlim: CartProductJson) {
    return this.httpClient.post<Cart>(url, cartProductDtoSlim);
  }

  async getTaxRate(url: string) {
    return await this.httpClient.get<TaxRate>(url).toPromise();
  }

  async changeShippingAddress(
    url: string,
    cartShippingAddress: CartShippingAddress
  ) {
    return await this.httpClient
      .post<CartShippingAddress>(url, cartShippingAddress)
      .toPromise();
  }

  async changeBillingAddress(
    url: string,
    cartBillingAddress: CartBillingAddress
  ) {
    return await this.httpClient
      .post<CartShippingAddress>(url, cartBillingAddress)
      .toPromise();
  }

  getDraftCartStatus(): CartStatus {
    let statusLength = this.cartStatuses.length;
    for (let i = 0; i < statusLength; i++) {
      if (this.cartStatuses[i].status === "Draft") {
        return this.cartStatuses[i];
      }
    }
    return null;
  }

  getDraftCartStatusFromBackend() {
    const url = environment.BASE_URL + CART_STATUS_API_URL + "/list";
    this.httpClient.get<CartStatus[]>(url).subscribe(
      (data) => {
        this.cartStatuses = data;
      },
      (error1) => {
        console.log("Failed to load Cart Status");
      }
    );
  }

  deleteMyCart(cartUrl: string) {
    return this.httpClient.delete(cartUrl);
  }

  updateCartProduct(cartUrl: string, cartProductSlim: CartProductJson) {
    return this.httpClient.post<Cart>(cartUrl, cartProductSlim);
  }

  deleteCartProduct(cartUrl: string) {
    return this.httpClient.delete(cartUrl);
  }

  getProductInventory(inventoryUrl: string, productIdList: any[]) {
    return this.httpClient.post<ProductInventory[]>(
      inventoryUrl,
      productIdList
    );
  }

  createOrder(url: string, cartId: number) {
    return this.httpClient.post(url, cartId);
  }
}
