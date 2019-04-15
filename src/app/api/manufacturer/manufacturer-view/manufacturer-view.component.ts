import {Component, OnInit} from '@angular/core';
import {ManufacturerService} from '../service/manufacturer.service';
import {ActivatedRoute} from '@angular/router';
import {Manufacturer} from '../model/manufacturer';
import {FormControl, FormGroup} from '@angular/forms';
import {MANUFACTURER_API_URL, SERVER_URL} from '../../../app.constants';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-manufacturer-view',
  templateUrl: './manufacturer-view.component.html',
  styleUrls: ['./manufacturer-view.component.css']
})
export class ManufacturerViewComponent implements OnInit
{
  manufacturer: Manufacturer;

  manufacturerForm=new FormGroup(
    {
                id: new FormControl( {value: '', disabled: true} ),
                name: new FormControl( '' ),
                displayName: new FormControl( '' ),
                description: new FormControl( '' ),
                address: new FormControl(''),
                contactEmail: new FormControl( '' ),
                phone: new FormControl( '' ),
                fax: new FormControl( '' ),
                products: new FormControl( '' ),
             } );

  constructor(private manufacturerService:ManufacturerService,
              private spinner:NgxSpinnerService,
              private route:ActivatedRoute) { }

  ngOnInit()
  {
    this.getManufacturer();
  }

  private getManufacturer()
  {
    const id=this.route.snapshot.paramMap.get( 'id' );
    const url=SERVER_URL+MANUFACTURER_API_URL+'find/'+id;

    this.spinner.show();
    this.manufacturerService.getManufacturer( url ).pipe()
        .subscribe(
          data =>
          {
            this.manufacturer=data;
            this.manufacturerForm.patchValue(
              {
                id: data.id,
                name: data.name,
                displayName: data.displayName,
                description: data.description,
                address: data.address.streetName+' '+data.address.apartment+', '+data.address.city.name+', '+data.address.state.name+', '+data.address.country.name+', '+data.address.zipCode,
                contactEmail: data.contactEmail,
                fax: data.fax,
                phone: data.phone,
                products: data.products
              });
            this.spinner.hide();
          },
          error =>
          {
            console.log( error );
            this.spinner.hide();
          });
  }

  manufacturerDataAvailable(): boolean
  {
    return this.manufacturer!==undefined;
  }
}
