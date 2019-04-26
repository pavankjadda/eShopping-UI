import {Component, OnInit} from '@angular/core';
import {CartService} from './service/cart.service';
import {CART_API_URL, SERVER_URL} from '../../app.constants';
import {Cart} from './model/cart';
import {AuthService} from '../../core/auth/auth.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {CartProduct} from './model/cart-product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit
{
  cart: Cart;
  cartProducts: Array<CartProduct>;
  cols: any[];
  constructor(private cartService:CartService,
              private ngxSpinnerService:NgxSpinnerService,
              private authService:AuthService,
              private router:Router)
  {

  }

  ngOnInit()
  {
    this.getMyCart();
  }


  private getMyCart()
  {
    this.ngxSpinnerService.show();
    const cartUrl=SERVER_URL+CART_API_URL+'find/user/'+this.authService.currentUserValue.id;
    this.cartService.getMyCart(cartUrl).subscribe(
      data=>
      {
        localStorage.setItem( 'currentCart', JSON.stringify( data ) );
        this.cartService.currentCartSubject.next( data );
        this.cart=data;
        if(data !== null && data.cartProducts!== null)
        {
          this.cartProducts=data.cartProducts;
        }
        this.ngxSpinnerService.hide();
      }
    );
  }

  cartDataAvailable()
  {
    return this.cart!==undefined && this.cart !== null && this.cartProducts.length>=0;
  }

  deleteCart()
  {
    if(confirm('Are you sure you wanna delete the cart?'))
    {
      this.ngxSpinnerService.show();
      const cartUrl=SERVER_URL+CART_API_URL+'delete/'+this.cartService.getCurrentCart.id;
      this.cartService.deleteMyCart(cartUrl).subscribe(
        data=>
        {
          this.getMyCart();
          this.ngxSpinnerService.hide();
        },
        error1 =>
        {
          this.ngxSpinnerService.hide();
        }
      );
    }
  }
}
