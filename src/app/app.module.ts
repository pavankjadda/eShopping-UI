import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';

@NgModule( {
  declarations: [
    AppComponent,
    CountryComponent,
    RegionComponent,
    HomeComponent,
    PageNotFoundComponent,
    StateComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule
{
}
