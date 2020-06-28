import {ProductInventory} from "src/app/api/product/model/product-inventory";
import {Category} from "../../category/model/category";
import {Manufacturer} from "../../manufacturer/model/manufacturer";
import {Photo} from "./photo";
import {Price} from "./price";

export class Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  photos: Array<Photo>;
  price: Price;
  productInventory: ProductInventory;
  manufacturer: Manufacturer;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}
