import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from '../model/cart';
import {BehaviorSubject, Observable} from 'rxjs';
import {CART_STATUS_API_URL, SERVER_URL} from '../../../app.constants';
import {CartStatus} from '../model/cart-status';
import {AuthService} from '../../../core/auth/auth.service';
import {UserProfileService} from '../../../account/user-profile/service/user-profile.service';
import {CartProduct} from '../model/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  public currentCartSubject: BehaviorSubject<Cart>;
  public currentCart: Observable<Cart>;
  public cartStatuses: Array<CartStatus>;

  static doesProductExistInCart(cart: Cart, newCartProduct:CartProduct)
  {
    if(cart.cartProducts === undefined || cart.cartProducts === null)
    {
      cart.cartProducts=[newCartProduct];
      return cart;
    }
    let numberOfProducts=cart.cartProducts.length;
    if(numberOfProducts === 0)
    {
      cart.cartProducts.push(newCartProduct);
    }
    for(let i=0;i<numberOfProducts;i++)
    {
      if(cart.cartProducts[i].product.id === newCartProduct.product.id)
      {
        cart.cartProducts[i].quantity+=1;
        return cart;
      }
    }
    cart.cartProducts.push(newCartProduct);
    return cart;
  }

  constructor(private httpClient:HttpClient, private authService:AuthService, private userProfileService:UserProfileService)
  {
    this.currentCartSubject=new BehaviorSubject<Cart>(JSON.parse( localStorage.getItem( 'currentCart' ) ));
    this.currentCart=this.currentCartSubject.asObservable();

    this.getDraftCartStatusFromBackend();
  }

  public get getCurrentCart(): Cart
  {
   return this.currentCartSubject.value;
  }

  getMyCart(url: string)
  {
    return this.httpClient.get<Cart>(url);
  }

  addProductToCart(url: string, cart: Cart)
  {
    return this.httpClient.post<Cart>(url,cart);
  }


  getDraftCartStatus():CartStatus
  {
    let statusLength=this.cartStatuses.length;
    for(let i=0; i<statusLength;i++)
    {
      if(this.cartStatuses[i].status === 'Draft')
      {
        return this.cartStatuses[i];
      }
    }
    return null;
  }

  getDraftCartStatusFromBackend()
  {
    const url=SERVER_URL+CART_STATUS_API_URL+'list';
    this.httpClient.get<CartStatus[]>(url).subscribe(
      data=>
      {
        this.cartStatuses=data;
      },
      error1 =>
      {
        console.log('Failed to load Cart Status');
      }
    );

  }

}
