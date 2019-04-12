import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CATEGORY_API_URL, PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {Product} from '../model/product';
import {Price} from '../model/price';
import {CategoryService} from '../../category/service/category.service';
import {Observable} from 'rxjs';
import {Category} from '../../category/model/category';
import {Currency} from '../model/currency';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  categoryObservable: Observable<Category[]>;

  productForm = new FormGroup({
    id: new FormControl({value:'',disabled:true}, Validators.minLength(2)),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
  });
  constructor(private productService:ProductService, private categoryService:CategoryService,private router:Router) {}

  ngOnInit() {
    this.loadCategories();
  }


  createProduct()
  {
    const product=new Product();
    product.id=this.productForm.get('id').value;
    product.name=this.productForm.get('name').value;
    product.description=this.productForm.get('description').value;
    product.price=new Price(new Currency("USD","$"),this.productForm.get('description').value);
    product.createdBy='Pavan';
    product.createdDate='';
    product.lastModifiedBy='Pavan';
    product.lastModifiedDate='Pavan';


    const url=SERVER_URL+PRODUCT_API_URL+'create';

    this.productService.createProduct(url,product).subscribe(
      value =>
      {
        console.log('Successfully created product');
      },error1 =>
      {
        console.log('Failed to create product');
      },
      ()=>{
        this.router.navigate(['/product/list']);
      });
  }
  goBack() {
    this.router.navigate(['/product']);
  }

  private loadCategories()
  {
    const url=SERVER_URL+CATEGORY_API_URL+'list';

    this.categoryService.getCategories(url).subscribe(
      categories =>
      {
        // @ts-ignore
        this.categoryObservable=categories;
        console.log('Successfully loaded categories');
      },
        error1 =>
      {
        console.log('Failed to load categories');
      },
      ()=>{
      });
  }

  categoriesDataAvailable():boolean
  {
    return this.categoryObservable!==undefined;
  }
}
