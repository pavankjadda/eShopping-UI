import {City} from "../../city/model/city";
import {State} from "../../state/model/state";
import {Country} from "../../country/model/country";
import {AddressType} from "../../address-type/model/address-type";
import {Cart} from "./cart";

export class CartBillingAddress {
  id: number;
  streetName: string;
  apartment: string;
  city: City;
  state: State;
  country: Country;
  zipCode: string;
  addressType: AddressType;
  cart: Cart;
}
