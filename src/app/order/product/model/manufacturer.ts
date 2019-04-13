import {Address} from '../../../api/address/model/address';
import {Product} from './product';

export class Manufacturer
{
  id: number;
  name: string;
  description: string;
  address:Address;
  contactEmail:string;
  fax:string;
  lastModifiedDate:string;
  products: Array<Product>;

  constructor(id: number)
  {
    this.id=id;
  }
}
