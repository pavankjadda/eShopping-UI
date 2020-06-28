import {Role} from "../../role/model/role";
import {UserProfile} from "../../../account/user-profile/model/user-profile";

export class User {
  id: number;
  username: string;
  roles: Role;
  token: string;
  userProfile: UserProfile;

  set setUserId(id: number) {
    this.id = id;
  }

  get getUserId(): number {
    return this.id;
  }
}
