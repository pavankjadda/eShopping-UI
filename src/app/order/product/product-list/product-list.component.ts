import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {SERVER_API_URL} from '../../../app.constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{

  productObservable: Observable<Product[]>;

  constructor(private productService: ProductService, private spinner: NgxSpinnerService)
  {
  }
  ngOnInit() {
    this.getProducts();
  }

  private getProducts()
  {

    let url=SERVER_API_URL+'api/v1/product/list';
    this.spinner.show();
    this.productService.getProducts(url).subscribe(
      data =>
      {
        // @ts-ignore
        this.productObservable=data;
        this.spinner.hide();
      },
      err =>
      {
        this.spinner.hide();
        console.error( err );
      },
      () =>
      {
        this.spinner.hide();
      } );

    return this.productObservable;
  }

  productsDataAvailable():boolean
  {
    return this.productObservable!==undefined;
  }
}
