import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {CART_API_URL, INVENTORY_API_URL, PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {FormControl, FormGroup} from '@angular/forms';
import {CartService} from '../../cart/service/cart.service';
import {AuthService} from '../../../core/auth/auth.service';
import {CartProduct} from '../../cart/model/cart-product';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {ProductInventory} from '../model/product-inventory';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit
{
  product: Product;
  productInventory:ProductInventory;
  productForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    amount: new FormControl(''),
    category: new FormControl(''),
    currency: new FormControl(''),
    manufacturer: new FormControl(''),
    quantityAvailable: new FormControl('')
  });

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private authService: AuthService,
              private httpClient: HttpClient,
              private spinner:NgxSpinnerService,
              private router: Router)
  {
  }

  ngOnInit()
  {
    this.getProduct();
    this.getProductQuantityFromInventory();
  }

  productDataAvailable(): boolean
  {
    return this.product !== undefined;
  }

  async addProductToCart()
  {
    this.spinner.show();

    let cart = this.cartService.getCurrentCart;
    if (cart === null)
    {
      const initializeCartUrl = SERVER_URL + CART_API_URL + 'initialize';
      let userProfile = this.authService.currentUserSubject.value.userProfile;
      await this.cartService.initializeCart(initializeCartUrl, userProfile);
    }
      cart = this.cartService.getCurrentCart;
      const addProductToCartUrl = SERVER_URL + CART_API_URL + 'product/add';
      let newCartProduct = new CartProduct();
      newCartProduct.product = this.product;
      newCartProduct.quantity = 1;
      newCartProduct.cart = cart;
      //newCartProduct.cart.id=cart.id;
      newCartProduct = CartService.doesProductExistInCart(cart, newCartProduct);

      this.cartService.addProductToCart(addProductToCartUrl, newCartProduct).subscribe(
        data =>
        {
          localStorage.setItem('currentCart', JSON.stringify(data));
          this.cartService.currentCartSubject.next(data);
        },
        error1 =>
        {
          this.spinner.hide();
          console.log('Failed to update cart');
        },
        () =>
        {
          this.router.navigate(['/cart']);
        }
      );
    }


  private getProduct()
  {
    const id = this.route.snapshot.paramMap.get('id');
    const url = SERVER_URL + PRODUCT_API_URL + 'find/' + id;
    this.productService.getProductDetails(url).pipe()
      .subscribe(
        data =>
        {
          this.product = data;
          this.productForm.patchValue(
            {
              id: data.id,
              name: data.name,
              description: data.description,
              price: data.price.currency.symbol + data.price.amount,
              amount: data.price.amount,
              currency: data.price.currency.symbol,
              category: data.category.name,
              manufacturer: data.manufacturer.name,
            });
        },
        error =>
        {
          console.log(error);
        });
  }

  private getProductQuantityFromInventory()
  {
    const id = this.route.snapshot.paramMap.get('id');
    const url = SERVER_URL + INVENTORY_API_URL + 'product/' + id;
    this.productService.getProductInventory(url).pipe()
        .subscribe(
          data =>
          {
            this.productInventory = data;
            this.productForm.patchValue(
              {
                quantityAvailable: data.quantity,
              });
          },
          error =>
          {
            console.log(error);
          });
  }

  isProductInventoryEmpty():boolean
  {
    return this.productInventory!==undefined && this.productInventory.quantity <= 0;
  }
}
