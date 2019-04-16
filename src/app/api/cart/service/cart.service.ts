import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from '../model/cart';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  public currentCartSubject: BehaviorSubject<Cart>;
  public currentCart: Observable<Cart>;

  constructor(private httpClient:HttpClient)
  {
    this.currentCartSubject=new BehaviorSubject<Cart>(new Cart());
    this.currentCart=this.currentCartSubject.asObservable();
  }

  getMyCart(url: string):Cart
  {
    this.httpClient.get<Cart>(url).subscribe(
      data=>
      {
        localStorage.setItem( 'currentCart', JSON.stringify( data ) );
        this.currentCartSubject.next( data );
        return data;
      }
    );
    return null;
  }

  addProductToCart(url: string, cart: Cart)
  {
    return this.httpClient.post<Cart>(url,cart);
  }


  public get getCurrentCart(): Cart
  {
   return this.currentCartSubject.value;
  }
}
