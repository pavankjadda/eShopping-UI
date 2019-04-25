import {Component, OnInit} from '@angular/core';
import {ManufacturerService} from '../service/manufacturer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {
  ADDRESS_TYPE_API_URL,
  CITY_API_URL,
  COUNTRY_API_URL,
  MANUFACTURER_API_URL,
  SERVER_URL,
  STATE_API_URL
} from '../../../app.constants';
import {Router} from '@angular/router';
import {CountryService} from '../../country/services/country.service';
import {AddressTypeService} from '../../address-type/service/address-type.service';
import {AddressType} from '../../address-type/model/address-type';
import {Country} from '../../country/model/country';
import {StateService} from '../../state/services/state.service';
import {State} from '../../state/model/state';
import {CityService} from '../../city/services/city.service';
import {City} from '../../city/model/city';
import {Manufacturer} from '../model/manufacturer';
import {Address} from '../../address/model/address';
import {NgxSpinnerService} from 'ngx-spinner';
import {AddressService} from '../../address/service/address.service';

@Component({
  selector: 'app-manufacturer-new',
  templateUrl: './manufacturer-new.component.html',
  styleUrls: ['./manufacturer-new.component.css']
})
export class ManufacturerNewComponent implements OnInit
{
  addressTypes: Array<AddressType>;
  countries: Array<Country>;
  states: Array<State>;
  cities: Array<City>;

  manufacturerForm=new FormGroup(
    {
      id: new FormControl( {value: '', disabled: true} ),
      name: new FormControl( '' ),
      displayName: new FormControl( '' ),
      description: new FormControl( '' ),
      address: new FormGroup(
        {
                  addressType: new FormControl( '' ),
                  streetName: new FormControl( '' ),
                  apartment: new FormControl( '' ),
                  city: new FormControl( '' ),
                  state: new FormControl( '' ),
                  country: new FormControl( '' ),
                  zipCode: new FormControl( '' ),
                 }),
      phone: new FormControl( '' ),
      contactEmail: new FormControl( '' ),
      fax: new FormControl( '' ),
      products: new FormControl( '' ),
    } );

  constructor(private manufacturerService:ManufacturerService,
              private cityService:CityService,
              private stateService:StateService,
              private countryService:CountryService,
              private addressTypeService:AddressTypeService,
              private addressService:AddressService,
              private spinnerService:NgxSpinnerService,
              private router: Router)
  {

  }

  ngOnInit()
  {
    this.loadAddressTypes();
    this.loadCountries();
  }

  createManufacturer()
  {
    this.spinnerService.show();
    const manufactureUrl=SERVER_URL+MANUFACTURER_API_URL+'create';

    let address=new Address();
    address.addressType=this.manufacturerForm.value.address.addressType;
    address.streetName=this.manufacturerForm.value.address.streetName;
    address.apartment=this.manufacturerForm.value.address.apartment;
    address.city=this.manufacturerForm.value.address.city;
    address.state=this.manufacturerForm.value.address.state;
    address.country=this.manufacturerForm.value.address.country;
    address.zipCode=this.manufacturerForm.value.address.zipCode;

    let manufacturer=new Manufacturer();
    manufacturer.name=this.manufacturerForm.value.name;
    manufacturer.displayName=this.manufacturerForm.value.displayName;
    manufacturer.description=this.manufacturerForm.value.description;
    manufacturer.phone=this.manufacturerForm.value.phone;
    manufacturer.contactEmail=this.manufacturerForm.value.contactEmail;
    manufacturer.fax=this.manufacturerForm.value.fax;
    manufacturer.address=address;


    this.manufacturerService.createManufacturer(manufactureUrl,manufacturer).subscribe(
      data=>
      {
        manufacturer=data;
        console.log('Manufacturer created');
        this.router.navigate(['/manufacturer/list']);
      },
      error1 => {
        console.log('Manufacturer creation failed');
        this.spinnerService.hide();
      }
    );

  }



  private loadAddressTypes()
  {
    const url=SERVER_URL+ADDRESS_TYPE_API_URL+'list';
    this.addressTypeService.getAddressTypes(url).subscribe(
      addressTypes => {
        this.addressTypes=addressTypes;
        this.manufacturerForm.patchValue(
          {
                  addressType: addressTypes
          }
        );
        console.log('Successfully loaded address types');
      },
      error1 =>
      {
        console.log('Failed to load address types');
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
    const country=this.manufacturerForm.value.address.country;
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
    const state=this.manufacturerForm.value.address.state;
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

  goBack()
  {
    this.router.navigate(['/manufacturer']);
  }



}
