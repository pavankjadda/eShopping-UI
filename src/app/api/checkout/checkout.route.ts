import {Routes} from '@angular/router';
import {UserAuthGuard} from '../../guards/user-auth.guard';
import {CheckoutComponent} from './checkout.component';

export const checkManagementRoute: Routes=[
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [UserAuthGuard]
  }
];
