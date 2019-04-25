import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from '../model/cart';
import {BehaviorSubject, Observable} from 'rxjs';
import {CART_STATUS_API_URL, SERVER_URL} from '../../../app.constants';
import {CartStatus} from '../model/cart-status';
import {CartProduct} from '../model/cart-product';
import {UserProfile} from '../../../account/user-profile/model/user-profile';

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
    if(cart.cartProducts === undefined || cart.cartProducts === null || cart.cartProducts.length === 0)
    {
      newCartProduct.quantity=1;
    }
    for(let i=0;i<cart.cartProducts.length;i++)
    {
      if(cart.cartProducts[i].product.id === newCartProduct.product.id)
      {
        newCartProduct.quantity=cart.cartProducts[i].quantity+1;
        newCartProduct.id=cart.cartProducts[i].id;
        break;
      }
    }
    return newCartProduct;
  }

  constructor(private httpClient:HttpClient)
  {
    this.currentCartSubject=new BehaviorSubject<Cart>(JSON.parse( localStorage.getItem( 'currentCart' ) ));
    this.currentCart=this.currentCartSubject.asObservable();

    this.getDraftCartStatusFromBackend();
  }

  initializeCart(initializeCartUrl: string, userProfile: UserProfile)
  {
    return this.httpClient.post<Cart>(initializeCartUrl,userProfile);
  }

  public get getCurrentCart(): Cart
  {
   return this.currentCartSubject.value;
  }

  getMyCart(url: string)
  {
    return this.httpClient.get<Cart>(url);
  }

  addProductToCart(url: string, cartProduct: CartProduct)
  {
    return this.httpClient.post<Cart>(url,cartProduct);
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
