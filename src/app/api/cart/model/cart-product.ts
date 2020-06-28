import {Product} from "../../product/model/product";
import {Cart} from "./cart";

export class CartProduct {
  id: number;
  product: Product;
  quantity: number;
  cart: Cart;
}
