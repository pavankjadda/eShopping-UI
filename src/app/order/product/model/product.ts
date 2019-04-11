import {Category} from '../../category/model/category';
import {Photo} from './photo';
import {Price} from './price';

export class Product
{
  id: number;
  name: string;
  description: string;
  category: Category;
  photos: Array<Photo>;
  price: Price;
}
