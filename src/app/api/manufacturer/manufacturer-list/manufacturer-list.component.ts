import {Component, OnInit} from '@angular/core';
import {ManufacturerService} from '../service/manufacturer.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {MANUFACTURER_API_URL, SERVER_URL} from '../../../app.constants';
import {Manufacturer} from '../model/manufacturer';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit
{
  manufacturers: Array<Manufacturer>;

  constructor(private manufacturerService:ManufacturerService, private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.getManufacturers();
  }

  private getManufacturers()
  {
    let url=SERVER_URL+MANUFACTURER_API_URL+'list';
    this.spinner.show();

    this.manufacturerService.getManufacturers(url).subscribe(
      manufacturers =>
      {
        this.manufacturers=manufacturers;
        this.spinner.hide();
      },

      error1 =>
      {
        console.log('Failed to load manufacturers');
        this.spinner.hide();
      },
    () =>
    {
      this.spinner.hide();
    } );
  }

  manufacturerDataAvailable(): boolean
  {
    return this.manufacturers!==undefined;
  }
}
