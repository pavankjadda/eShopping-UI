import {Component, OnInit} from '@angular/core';
import {ManufacturerService} from '../service/manufacturer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ADDRESS_TYPE_API_URL, COUNTRY_API_URL, MANUFACTURER_API_URL, SERVER_URL} from '../../../app.constants';
import {Router} from '@angular/router';
import {CountryService} from '../../country/services/country.service';
import {AddressTypeService} from '../../address-type/service/address-type.service';
import {AddressType} from '../../address-type/model/address-type';
import {Country} from '../../country/model/country';

@Component({
  selector: 'app-manufacturer-new',
  templateUrl: './manufacturer-new.component.html',
  styleUrls: ['./manufacturer-new.component.css']
})
export class ManufacturerNewComponent implements OnInit
{
  addressTypes: Array<AddressType>;
  countries: Array<Country>;

  manufacturerForm=new FormGroup(
    {
      id: new FormControl( {value: '', disabled: true} ),
      name: new FormControl( '' ),
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
      contactEmail: new FormControl( '' ),
      fax: new FormControl( '' ),
      products: new FormControl( '' ),
    } );

  constructor(private manufacturerService:ManufacturerService,
              private countryService:CountryService,
              private addressTypeService:AddressTypeService,
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
    const url=SERVER_URL+MANUFACTURER_API_URL+'create';

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


  goBack()
  {
    this.router.navigate(['/manufacturer']);
  }

}
