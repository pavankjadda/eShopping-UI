import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{

  ngOnInit()
  {
    if(!AuthService.isUserLoggedIn())
    {

    }
  }

}
