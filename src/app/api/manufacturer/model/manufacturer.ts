import {Product} from "../../product/model/product";
import {ManufacturerAddress} from "./manufacturer-address";

export class Manufacturer {
  id: number;
  name: string;
  displayName: string;
  description: string;
  manufacturerAddress: ManufacturerAddress;
  contactEmail: string;
  phone: string;
  fax: string;
  lastModifiedDate: string;
  products: Array<Product>;
}
