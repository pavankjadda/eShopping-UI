import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {CART_API_URL, PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {FormControl, FormGroup} from '@angular/forms';
import {CartService} from '../../cart/service/cart.service';
import {OrderProductDetail} from '../../order/model/order-product-detail';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit
{
  product: Product;
  productForm=new FormGroup( {
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
              private route: ActivatedRoute,
              private cartService:CartService,
              private router: Router)
  {
  }

  ngOnInit()
  {
    this.getProduct();
  }

  productDataAvailable(): boolean
  {
    return this.product!==undefined;
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
                price: data.price.currency.symbol+data.price.amount,
                amount: data.price.amount,
                currency: data.price.currency.symbol,
                category: data.category.name,
                manufacturer: data.manufacturer.name,
              });
          },
          error =>
          {
            console.log( error );
          });
  }

  addProductToCart()
  {
    const productId=this.route.snapshot.paramMap.get('id');
    const url=SERVER_URL+CART_API_URL+'/product/add/'+productId;
    let cart=this.cartService.getCurrentCart;
    let orderProductDetail=new OrderProductDetail();
    orderProductDetail.product=this.product;
    cart.products.push(orderProductDetail);
    this.cartService.addProductToCart( url,cart );
  }
}
