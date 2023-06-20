import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import {environment} from '../../../../environments/environment';
import {PRODUCT_API_URL} from '../../../app.constants';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    standalone: true,
    imports: [
        NgxSpinnerModule,
        NgIf,
        NgFor,
        RouterLink,
    ],
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.getProducts();
  }

  productsDataAvailable(): boolean {
    return this.products !== undefined;
  }

  private getProducts() {
    let url = environment.BASE_URL + PRODUCT_API_URL + '/list';
    this.spinner.show();
    this.productService.getProducts(url).subscribe(
      (data) => {
        this.products = data;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        console.error(err);
      },
      () => {
        this.spinner.hide();
      }
    );

    return this.products;
  }
}
