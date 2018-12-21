import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from './layouts/layout.module';
import {AccountModule} from './account/account.module';
import {ApiModule} from './api/api.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {CommonModule} from '@angular/common';




@NgModule( {
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    CoreModule,
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

export class AppModule {
}
