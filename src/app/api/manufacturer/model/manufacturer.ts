import {Address} from '../../address/model/address';
import {Product} from '../../product/model/product';

export class Manufacturer
{
  id: number;
  name: string;
  displayName: string;
  description: string;
  address:Address;
  contactEmail:string;
  phone: string;
  fax:string;
  lastModifiedDate:string;
  products: Array<Product>;

}
