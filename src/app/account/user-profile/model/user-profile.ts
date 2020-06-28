import {Address} from "../../../api/address/model/address";
import {User} from "../../../core/user/model/user";

export class UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addresses: Array<Address>;
  user: User;
}
