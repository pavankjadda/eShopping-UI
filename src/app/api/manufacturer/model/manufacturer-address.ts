import {City} from "../../city/model/city";
import {State} from "../../state/model/state";
import {Country} from "../../country/model/country";
import {ManufacturerAddressType} from "./manufacturer-address-type";

export class ManufacturerAddress {
  id: number;
  streetName: string;
  apartment: string;
  city: City;
  state: State;
  country: Country;
  zipCode: string;
  manufacturerAddressType: ManufacturerAddressType;
}
