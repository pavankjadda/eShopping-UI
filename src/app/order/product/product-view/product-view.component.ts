import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit
{
  productObservable: Observable<Product>;
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router)
  {
  }

  ngOnInit()
  {
    this.getProduct();
  }

  productDataAvailable(): boolean
  {
    return this.productObservable!==undefined;
  }

  private getProduct()
  {
    const id=this.route.snapshot.paramMap.get( 'id' );
    const url=SERVER_URL+PRODUCT_API_URL+'find/'+id;
    this.productService.getProductDetails( url ).pipe()
        .subscribe(
          data =>
          {
            // @ts-ignore
            this.productObservable=data;
            this.product=data;
            console.log( this.product );
          },
          error =>
          {
            console.log( error );
          },
          () => console.log( 'getProduct() success' ) );
    return this.productObservable;
  }
}
