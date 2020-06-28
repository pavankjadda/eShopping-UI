import {Product} from "../../product/model/product";

export class OrderProductDetail {
  id: number;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
  quantity: number;
  product: Product;
}
