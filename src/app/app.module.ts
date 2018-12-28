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
import {OrderModule} from './order/order.module';
import {OrderRoutingModule} from './order/order-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule( {
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,
    ApiModule,
    AccountModule,
    OrderModule,
    AppRoutingModule
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
