import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AddressType} from "../model/address-type";
import {ManufacturerAddressType} from "../../manufacturer/model/manufacturer-address-type";

@Injectable({
  providedIn: "root",
})
export class AddressTypeService {
  constructor(private httpClient: HttpClient) {}

  getAddressTypes(url: string) {
    return this.httpClient.get<AddressType[]>(url);
  }
  getManufacturerAddressTypes(url: string) {
    return this.httpClient.get<ManufacturerAddressType[]>(url);
  }
}
