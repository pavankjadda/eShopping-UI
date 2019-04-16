import {Routes} from '@angular/router';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {CartComponent} from './cart.component';


export const cartManagementRoute: Routes=[
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [UserAuthGuard]
  }
  ];
