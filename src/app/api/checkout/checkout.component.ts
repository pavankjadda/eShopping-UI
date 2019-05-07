import {Component, OnInit} from '@angular/core';
import {CART_API_URL, SERVER_URL, USER_PROFILE_API_URL} from '../../app.constants';
import {CartService} from '../cart/service/cart.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {Cart} from '../cart/model/cart';
import {CartProduct} from '../cart/model/cart-product';
import {ProductInventory} from '../product/model/product-inventory';
import {UserProfileService} from '../../account/user-profile/service/user-profile.service';
import {Address} from '../address/model/address';

@Component( {
selector: 'app-checkout',
templateUrl: './checkout.component.html',
styleUrls: ['./checkout.component.css']
} )

export class CheckoutComponent implements OnInit
{
  cart: Cart;
  addresses: Array<Address>;
  cartProducts: Array<CartProduct>;
  productInventory:Array<ProductInventory>;
  totalCost:number;

  constructor(private cartService:CartService,
              private ngxSpinnerService:NgxSpinnerService,
              private authService:AuthService,
              private userProfileService:UserProfileService,
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
    this.cartService.getMyCart( cartUrl ).subscribe(
      data =>
      {
        localStorage.setItem( 'currentCart', JSON.stringify( data ) );
        this.cartService.currentCartSubject.next( data );
        this.cart=data;
        if(data.cartProducts!==null)
        {
          this.cartProducts=data.cartProducts;
        }
        this.calculateTotalCost( this.cartProducts);
        this.checkAndHoldInventory();
        this.getAddresses();
        this.getTaxRate();

        this.ngxSpinnerService.hide();
      }
    );
  }

  private createOrder()
  {

  }

  private calculateTotalCost(cartProducts: Array<CartProduct>)
  {
    let totalCost=0;
    cartProducts.forEach(function(cartproduct)
                         {
                           totalCost+=cartproduct.quantity*cartproduct.product.price.amount;
                         });
    this.totalCost=totalCost;
  }

  private checkAndHoldInventory()
  {

  }

  private getAddresses()
  {
    let userProfileId=this.authService.currentUserSubject.value.userProfile.id;
    let userProfileUrl=SERVER_URL+USER_PROFILE_API_URL+userProfileId;
    this.userProfileService.getUserProfile(userProfileUrl).subscribe(
      data=>
      {
        this.addresses=data.addresses;
      },
      error1 =>
      {
        console.log('Failed to get User Profile information');
      }
    );
  }


  private getTaxRate()
  {

  }

  cartDataAvailable()
  {
    return this.cart!==undefined && this.cart !== null && this.cartProducts.length>=0;
  }

  addressesAvailable()
  {
    return this.addresses!==undefined && this.addresses !== null && this.addresses.length>=0;
  }
  createNewShippingAddress()
  {

  }

  backToCart()
  {
    this.router.navigate(['/cart']);
  }

  placeOrder()
  {

  }


}
