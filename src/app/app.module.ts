import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutModule} from "./layouts/layout.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminModule} from "./admin/admin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./layouts/home/home.component";
import {PageNotFoundComponent} from "./layouts/pagenotfound/pagenotfound.component";
import {httpInterceptorProviders} from "./core/intercepters/httpInterceptorProviders";
import {HelpersModule} from "./helpers/helpers.module";
import {SharedModule} from "./shared/shared.module";
import {ApiModule} from "./api/api.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    LayoutModule,
    CoreModule,
    ApiModule,
    HelpersModule,
    SharedModule,
    AppRoutingModule,
    NgxSpinnerModule,
  ],

  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  providers: [httpInterceptorProviders, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
