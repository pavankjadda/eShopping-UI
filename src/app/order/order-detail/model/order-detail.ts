import {OrderStatus} from './order-status';
import {UserProfile} from '../../../account/user-profile/model/user-profile';
import {Address} from '../../../api/address/model/address';

export class OrderDetail
{
  id: number;
  orderStatus: OrderStatus;
  purchasedBy: UserProfile;
  shippingAddress: Address;
  orderCreatedDateTime: string;
}
