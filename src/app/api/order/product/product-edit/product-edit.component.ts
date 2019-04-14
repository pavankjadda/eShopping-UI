import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CATEGORY_API_URL, CURRENCY_API_URL, MANUFACTURER_API_URL, PRODUCT_API_URL, SERVER_URL} from '../../../../app.constants';
import {FormControl, FormGroup} from '@angular/forms';
import {Currency} from '../model/currency';
import {Category} from '../../category/model/category';
import {Manufacturer} from '../model/manufacturer';
import {CategoryService} from '../../category/service/category.service';

@Component( {
              selector: 'app-product-edit',
              templateUrl: './product-edit.component.html',
              styleUrls: ['./product-edit.component.css']
            } )
export class ProductEditComponent implements OnInit
{
  product: Product;
  categories: Array<Category>;
  currencies: Array<Currency>;
  manufacturers: Array<Manufacturer>;

  productForm=new FormGroup(
    {
               id: new FormControl( {value: '', disabled: true} ),
               name: new FormControl( '' ),
               description: new FormControl( '' ),
               price: new FormControl( '' ),
               amount: new FormControl( '' ),
               category: new FormControl( '' ),
               currency: new FormControl( '' ),
               manufacturer: new FormControl( '' )
             } );

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router)
  {
  }

  ngOnInit()
  {

    this.getProduct();
    this.loadCategories();
    this.loadCurrencies();
    this.loadManufacturers();
  }



  private getProduct()
  {
    const id=this.route.snapshot.paramMap.get( 'id' );
    const url=SERVER_URL+PRODUCT_API_URL+'find/'+id;
    this.productService.getProductDetails( url ).pipe()
        .subscribe(
          data =>
          {
            this.product=data;
            this.productForm.patchValue(
              {
                      id: data.id,
                      name: data.name,
                      description: data.description,
                      price: data.price,
                      amount: data.price.amount,
                      currency: data.price.currency,
                      category: data.category,
                      manufacturer: data.manufacturer,
                    });
          },
          error =>
          {
            console.log( error );
          },
          () => console.log( 'getProduct() success' ) );
  }

  private updateProduct()
  {
    const id=this.route.snapshot.paramMap.get( 'id' );
    const url=SERVER_URL+PRODUCT_API_URL+'update';

    const product = new Product();
    product.id=Number( id );
    product.name=this.productForm.value.name;
    product.description=this.productForm.value.description;

    product.category=this.productForm.value.category;
    product.manufacturer=this.productForm.value.manufacturer;
    product.price=this.productForm.value.price;
    product.price.amount=this.productForm.value.amount;

    product.lastModifiedBy='Admin';
    product.lastModifiedDate='Admin';


    this.productService.updateProduct( url, product ).subscribe(
      value =>
      {
        console.log( 'Successfully updated product' );
      }, error1 =>
      {
        console.log( 'Failed to update product' );
      },
      () =>
      {
        this.router.navigate( ['/product/list'] );
      } );
  }

  private loadCategories()
  {
    const url=SERVER_URL+CATEGORY_API_URL+'list';

    this.categoryService.getCategories( url ).subscribe(
      categories =>
      {
        // @ts-ignore
        this.categories=categories;
        console.log( 'Successfully loaded categories' );
      },
      error1 =>
      {
        console.log( 'Failed to load categories' );
      },
      () =>
      {
      } );
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
        console.log( 'Failed to load currencies' );
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
        console.log( 'Successfully loaded manufacturers' );
      },
      error1 =>
      {
        console.log( 'Failed to load manufacturers' );
      },
      () =>
      {
      } );
  }

  productDataAvailable(): boolean
  {
    return this.product!==undefined;
  }

  goBack()
  {
    this.router.navigate( ['/product'] );
  }
}
