import {Component, OnInit} from '@angular/core';
import {ManufacturerService} from '../service/manufacturer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MANUFACTURER_API_URL, SERVER_URL} from '../../../app.constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manufacturer-new',
  templateUrl: './manufacturer-new.component.html',
  styleUrls: ['./manufacturer-new.component.css']
})
export class ManufacturerNewComponent implements OnInit
{
  manufacturerForm=new FormGroup(
    {
      id: new FormControl( {value: '', disabled: true} ),
      name: new FormControl( '' ),
      description: new FormControl( '' ),
      address: new FormControl( '' ),
      contactEmail: new FormControl( '' ),
      fax: new FormControl( '' ),
      products: new FormControl( '' ),
    } );

  constructor(private manufacturerService:ManufacturerService,
              private router: Router) { }

  ngOnInit()
  {
  }

  createManufacturer()
  {
    const url=SERVER_URL+MANUFACTURER_API_URL+'create';

  }



  goBack()
  {
    this.router.navigate(['/manufacturer']);
  }
}
