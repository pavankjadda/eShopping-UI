import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryComponent} from './api/country/country.component';
import {RegionComponent} from './api/region/region.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {StateComponent} from './api/state/state.component';
import {CityComponent} from './api/city/city.component';
import {LoginComponent} from './core/login/login/login.component';

const routes: Routes=[
  {path: 'city', component: CityComponent},
  {path: 'state', component: StateComponent},
  {path: 'country', component: CountryComponent},
  {path: 'region', component: RegionComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule
{
}
