import {CartStatus} from './cart-status';
import {UserProfile} from '../../../account/user-profile/model/user-profile';
import {OrderProductDetail} from '../../order/model/order-product-detail';

export class Cart
{
  id: number;
  status: CartStatus;
  userProfile: UserProfile;
  products: Array<OrderProductDetail>;
}
