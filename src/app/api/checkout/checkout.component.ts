import {Component, OnInit} from '@angular/core';
import {
  ADDRESS_API_URL,
  ADDRESS_TYPE_API_URL,
  CART_API_URL,
  CITY_API_URL,
  COUNTRY_API_URL,
  SERVER_URL,
  STATE_API_URL,
  TAX_RATE_API_URL,
  USER_PROFILE_API_URL
} from '../../app.constants';
import {CartService} from '../cart/service/cart.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {Cart} from '../cart/model/cart';
import {CartProduct} from '../cart/model/cart-product';
import {ProductInventory} from '../product/model/product-inventory';
import {UserProfileService} from '../../account/user-profile/service/user-profile.service';
import {Address} from '../address/model/address';
import {FormControl, FormGroup} from '@angular/forms';
import {CityService} from '../city/services/city.service';
import {StateService} from '../state/services/state.service';
import {CountryService} from '../country/services/country.service';
import {AddressTypeService} from '../address-type/service/address-type.service';
import {AddressService} from '../address/service/address.service';
import {AddressType} from '../address-type/model/address-type';
import {Country} from '../country/model/country';
import {State} from '../state/model/state';
import {City} from '../city/model/city';

@Component( {
selector: 'app-checkout',
templateUrl: './checkout.component.html',
styleUrls: ['./checkout.component.css']
} )

export class CheckoutComponent implements OnInit
{
  cart: Cart;
  addresses: Array<Address>;
  addressTypes: Array<AddressType>;
  countries: Array<Country>;
  states: Array<State>;
  cities: Array<City>;
  cartProducts: Array<CartProduct>;
  productInventory:Array<ProductInventory>;
  totalCost:number;
  displayAddressDialog = false;
  shippingAddressRadioButtonSelected = false;
  billingAddressRadioButtonSelected = false;


  addressForm=new FormGroup(
    {
      addressType: new FormControl( '' ),
      streetName: new FormControl( '' ),
      apartment: new FormControl( '' ),
      city: new FormControl( '' ),
      state: new FormControl( '' ),
      country: new FormControl( '' ),
      zipCode: new FormControl( '' ),
    } );

  constructor(private cartService:CartService,
              private ngxSpinnerService:NgxSpinnerService,
              private authService:AuthService,
              private userProfileService:UserProfileService,
              private cityService:CityService,
              private stateService:StateService,
              private countryService:CountryService,
              private addressTypeService:AddressTypeService,
              private addressService:AddressService,
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
        this.calculateTotalCost(this.cartProducts);
        //this.checkAndHoldInventory();
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
        console.log('Failed to get User Profile information. Error: '+error1);
      }
    );
  }


  private getTaxRate()
  {
    let taxRateUrl=SERVER_URL+TAX_RATE_API_URL;

  }


  createNewAddressDialog()
  {
    this.displayAddressDialog=true;
    this.loadAddressTypes();
    this.loadCountries();
  }

  hideNewAddressDialog()
  {
    this.displayAddressDialog=false;
  }

  createNewAddress()
  {
    let addressUrl=SERVER_URL+ADDRESS_API_URL+'create';
    let address=new Address();

    address.streetName=this.addressForm.value.streetName;
    address.apartment=this.addressForm.value.apartment;
    address.country=this.addressForm.value.country;
    address.state=this.addressForm.value.state;
    address.city=this.addressForm.value.city;
    address.zipCode=this.addressForm.value.zipCode;
    address.addressType=this.addressForm.value.addressType;

    this.addressService.createAddress(addressUrl,address).subscribe(
      data=>
      {
        this.getAddresses();
        this.hideNewAddressDialog();
      },
      error1 =>
      {
        console.log('Error occurred: '+error1);
      }
    );
  }


  updateAddress(address: Address)
  {
    this.displayAddressDialog=true;
    this.loadAddressTypes();
    this.loadCountries();

    this.addressForm.patchValue({
      streetName:address.streetName,
      country:address.country,
      state:address.state,
      city:address.city,
      zipCode:address.zipCode,
      addressType:address.addressType,
    });

    this.loadStates();
    this.loadCities();
  }

  deleteAddress(address: Address)
  {
    if(confirm('Are you sure you want to delete the Address?'))
    {
      let addressUrl=SERVER_URL+ADDRESS_API_URL+'delete/'+address.id;

      this.addressService.deleteAddress(addressUrl).subscribe(
        data=>
        {
          this.getAddresses();
          this.hideNewAddressDialog();
        },
        error1 =>
        {
          console.log('Error occurred: '+error1);
        }
      );
    }
  }

  placeOrder()
  {

  }

  private loadAddressTypes()
  {
    const url=SERVER_URL+ADDRESS_TYPE_API_URL+'list';
    this.addressTypeService.getAddressTypes(url).subscribe(
      addressTypes =>
      {
        this.addressTypes=addressTypes;
        this.addressForm.patchValue(
          {
            addressTypes: addressTypes
          }
        );
        console.log('Successfully loaded Address types');
      },
      error1 =>
      {
        console.log('Failed to load mAddress types');
      }
    );
  }

  private loadCountries()
  {
    const url=SERVER_URL+COUNTRY_API_URL+'list';
    this.countryService.getCountries(url).subscribe(
      countries => {
        this.countries=countries;
      },
      error1 =>
      {

      }
    );
  }

  loadStates()
  {
    const country=this.addressForm.value.country;
    const url=SERVER_URL+STATE_API_URL+'find/country/'+country.id;

    this.stateService.getStatesByCountryId(url).subscribe(
      data=>
      {
        this.states=data;
      },
      error1 => {
        console.log('Failed to load states');
      }
    );

  }

  loadCities()
  {
    const state=this.addressForm.value.state;
    const url=SERVER_URL+CITY_API_URL+'find/state/'+state.id;

    this.cityService.getCitiesByStateId(url).subscribe(
      data=>
      {
        this.cities=data;
      },
      error1 => {
        console.log('Failed to load cities');
      }
    );
  }


  cartDataAvailable()
  {
    return this.cart!==undefined && this.cart !== null && this.cartProducts.length>=0;
  }

  addressesAvailable()
  {
    return this.addresses!==undefined && this.addresses !== null && this.addresses.length>=0;
  }

  compareAddressTypeFn(c1: AddressType, c2: AddressType): boolean
  {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCountryFn(c1: Country, c2: Country): boolean
  {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareStateFn(c1: State, c2: State): boolean
  {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCityFn(c1: City, c2: City): boolean
  {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  backToCart()
  {
    this.router.navigate(['/cart']);
  }


  hideShippingAddressEditAndDelete()
  {
    this.billingAddressRadioButtonSelected=true;
  }
}
