import { State } from "../../state/model/state";
import { City } from "../../city/model/city";
import { Country } from "../../country/model/country";
import { AddressType } from "../../address-type/model/address-type";
import { UserProfile } from "../../../account/user-profile/model/user-profile";

export class Address {
  id: number;
  streetName: string;
  apartment: string;
  city: City;
  state: State;
  country: Country;
  zipCode: string;
  addressType: AddressType;
  userProfile: UserProfile;
}
