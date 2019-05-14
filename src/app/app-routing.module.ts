import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './layouts/pagenotfound/pagenotfound.component';
import {HomeComponent} from './layouts/home/home.component';
import {UserAuthGuard} from './guards/user-auth.guard';

const routes: Routes=[
  {
    path: '',
    component: HomeComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserAuthGuard]
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
} )
export class AppRoutingModule
{
}
