import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {UiModule} from './layouts/ui.module';
import {LoginModule} from './core/login/login.module';
import {AccountModule} from './account/account.module';
import {ApiModule} from './api/api.module';


@NgModule( {
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    LoginModule,
    ApiModule,
    AccountModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule
{
}
