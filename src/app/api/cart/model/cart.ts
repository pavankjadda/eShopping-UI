import {CartStatus} from "./cart-status";
import {UserProfile} from "../../../account/user-profile/model/user-profile";
import {CartProduct} from "./cart-product";

export class Cart {
  id: number;
  cartStatus: CartStatus;
  userProfile: UserProfile;
  cartProducts: Array<CartProduct>;
}
