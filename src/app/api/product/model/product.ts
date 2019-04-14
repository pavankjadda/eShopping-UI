import {Category} from '../../category/model/category';
import {Photo} from './photo';
import {Price} from './price';
import {Manufacturer} from '../../manufacturer/model/manufacturer';

export class Product
{
  id: number;
  name: string;
  description: string;
  category: Category;
  photos: Array<Photo>;
  price: Price;
  manufacturer:Manufacturer;
  createdBy:string;
  createdDate:string;
  lastModifiedBy:string;
  lastModifiedDate:string;
}
