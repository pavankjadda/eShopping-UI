import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { StoreModule } from "@ngrx/store";
import { NgxSpinnerModule } from "ngx-spinner";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { CookieService } from "ngx-cookie-service";
import { httpInterceptorProviders } from "./app/core/intercepters/httpInterceptorProviders";
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";
import { routes } from "./app/routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      StoreModule.forRoot({}, {})
    ),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
      }),
      withInMemoryScrolling(),
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
    httpInterceptorProviders,
    CookieService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
