import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  products: Array<Product>;

  constructor(private productService: ProductService, private spinner: NgxSpinnerService)
  {
  }
  ngOnInit() {
    this.getProducts();
  }

  productsDataAvailable(): boolean
  {
    return this.products!==undefined;
  }

  private getProducts()
  {
    let url=SERVER_URL+PRODUCT_API_URL+'list';
    this.spinner.show();
    this.productService.getProducts(url).subscribe(
      data =>
      {
        this.products=data;
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

    return this.products;
  }

}
