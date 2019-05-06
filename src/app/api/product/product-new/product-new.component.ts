import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CATEGORY_API_URL, CURRENCY_API_URL, MANUFACTURER_API_URL, PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {Product} from '../model/product';
import {Price} from '../model/price';
import {CategoryService} from '../../category/service/category.service';
import {Category} from '../../category/model/category';
import {Currency} from '../model/currency';
import {Manufacturer} from '../../manufacturer/model/manufacturer';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit
{
  categories: Array<Category>;
  currencies: Array<Currency>;
  manufacturers: Array<Manufacturer>;

  productForm = new FormGroup({
    id: new FormControl({value:'',disabled:true}, Validators.minLength(2)),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    amount: new FormControl(''),
    categoryControl: new FormControl('',Validators.required),
    currency: new FormControl( '',Validators.required ),
    manufacturerControl: new FormControl( '',Validators.required ),
  });
  constructor(private productService:ProductService, private categoryService:CategoryService,private router:Router) {}

  ngOnInit()
  {
    this.loadCategories();
    this.loadCurrencies();
    this.loadManufacturers();
  }


  createProduct()
  {
    const product=new Product();
    product.name=this.productForm.value.name;
    product.description=this.productForm.value.description;
    product.price=new Price( this.getCurrency(), this.productForm.value.amount);
    product.category=this.productForm.value.categoryControl;
    product.manufacturer=this.productForm.value.manufacturerControl;

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

  private getCurrency()
  {
    for(let currency of this.currencies)
    {
      if(currency.symbol === '$')
      {
        return new Currency(currency.id);
      }
    }
    return undefined;
  }


  private loadCategories()
  {
    const url=SERVER_URL+CATEGORY_API_URL+'list';

    this.categoryService.getCategories(url).subscribe(
      categories =>
      {
        this.categories=categories;
      },
        error1 =>
      {
      },
      ()=>{
      });
  }

  private loadCurrencies()
  {
    const url=SERVER_URL+CURRENCY_API_URL+'list';

    this.productService.getCurrencies( url ).subscribe(
      currencies =>
      {
        this.currencies=currencies;
      },
      error1 =>
      {
      },
      () =>
      {
      } );
  }


  private loadManufacturers()
  {
    const url=SERVER_URL+MANUFACTURER_API_URL+'list';

    this.productService.getManufacturers( url ).subscribe(
      manufacturers =>
      {
        this.manufacturers=manufacturers;
      },
      error1 =>
      {
      },
      () =>
      {
      } );
  }

  manufacturersDataAvailable(): boolean
  {
    return this.manufacturers!==undefined;
  }

  categoriesDataAvailable(): boolean
  {
    return this.categories!==undefined;
  }

  currenciesDataAvailable(): boolean
  {
    return this.currencies!==undefined;
  }

  goBack() {
    this.router.navigate(['/product']);
  }

}
