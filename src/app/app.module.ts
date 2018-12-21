import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryComponent} from './api/country/country.component';
import {RegionComponent} from './api/region/region.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {StateComponent} from './api/state/state.component';
import {CityComponent} from './api/city/city.component';
import {UiModule} from './layouts/ui.module';
import {LoginModule} from './core/login/login.module';
import {LoginComponent} from './core/login/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ActivateComponent } from './account/activate/activate.component';
import { PasswordComponent } from './account/password/password.component';
import { PasswordResetComponent } from './account/password-reset/password-reset.component';
import { SettingsComponent } from './account/settings/settings.component';
import {AccountModule} from './account/account.module';


@NgModule( {
  declarations: [
    AppComponent,
    CountryComponent,
    RegionComponent,
    HomeComponent,
    PageNotFoundComponent,
    StateComponent,
    CityComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    LoginModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule
{
}
