import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order.service';
import {ProductService} from '../../product/service/product.service';
import {PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {Product} from '../../product/model/product';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit
{
  products: Array<Product>;

  constructor(private orderService:OrderService,
              private productService:ProductService)
  {

  }

  ngOnInit()
  {
    this.getProducts();
  }

  private getProducts()
  {
    const productsUrl=SERVER_URL+PRODUCT_API_URL+'list';
    this.productService.getProducts(productsUrl).subscribe(
      data =>
      {
        this.products=data;
        console.log('Successfully loaded products');
      },
      error1 =>
      {
        console.log('Failed to load products');
      }
    );


  }
}
