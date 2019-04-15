import {Address} from '../../address/model/address';
import {UserProfile} from '../../../account/user-profile/model/user-profile';
import {OrderStatus} from './order-status';

export class Order
{
  id: number;
  orderStatus: OrderStatus;
  purchasedBy: UserProfile;
  shippingAddress: Address;
  orderCreatedDateTime: string;
}
