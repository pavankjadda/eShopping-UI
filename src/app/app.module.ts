import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryComponent} from './country/country.component';
import {RegionComponent} from './region/region.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {StateComponent} from './state/state.component';
import {CityComponent} from './city/city.component';
import {UiModule} from './ui/ui.module';
import {LoginModule} from './login/login.module';
import {LoginComponent} from './login/login/login.component';


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
    AppRoutingModule,
    UiModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule
{
}
