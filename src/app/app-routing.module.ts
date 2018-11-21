import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'region',        component: RegionComponent },
  { path: 'countries.html',   redirectTo: 'country'},
  { path: '',   component:HomeComponent},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
