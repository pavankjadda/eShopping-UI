import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CATEGORY_API_URL, CURRENCY_API_URL, MANUFACTURER_API_URL, PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Price} from '../model/price';
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

  productForm=new FormGroup( {
                               id: new FormControl( {value: '', disabled: true}, Validators.minLength( 2 ) ),
                               name: new FormControl( '' ),
                               description: new FormControl( '' ),
                               price: new FormControl( '' ),
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

  productDataAvailable(): boolean
  {
    return this.product!==undefined;
  }

  goBack()
  {
    this.router.navigate( ['/product'] );
  }

  private getProduct()
  {
    const id=this.route.parent.snapshot.params.id;
    const url=SERVER_URL+PRODUCT_API_URL+'find/'+id;
    this.productService.getProductDetails( url ).pipe()
        .subscribe(
          data =>
          {
            this.product=data;
            console.log( this.product );
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

    const product=new Product();
    product.id=this.productForm.get( 'id' ).value;
    product.name=this.productForm.get( 'name' ).value;
    product.description=this.productForm.get( 'description' ).value;
    product.price=new Price( new Currency( this.productForm.get( 'currency' ).value, 'USD', '$' ), this.productForm.get( 'price' ).value );
    product.category=new Category( this.productForm.get( 'category' ).value );
    product.manufacturer=new Manufacturer( this.productForm.get( 'manufacturer' ).value );
    product.lastModifiedBy='Pavan';
    product.lastModifiedDate='Pavan';

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
        // @ts-ignore
        this.currencies=currencies;
        console.log( 'Successfully loaded currencies' );
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
}
