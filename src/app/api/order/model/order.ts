import {Address} from "../../address/model/address";
import {UserProfile} from "../../../account/user-profile/model/user-profile";
import {OrderStatus} from "./order-status";
import {OrderProductDetail} from "./order-product-detail";

export class Order {
  id: number;
  orderStatus: OrderStatus;
  purchasedBy: UserProfile;
  orderShippingAddress: Address;
  orderBillingAddress: Address;
  tax: number;
  shippingCharge: number;
  totalCost: number;
  orderProducts: Array<OrderProductDetail>;
}
