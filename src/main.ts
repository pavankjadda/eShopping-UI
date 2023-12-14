import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import {
	PreloadAllModules,
	provideRouter,
	withComponentInputBinding,
	withInMemoryScrolling,
	withPreloading,
	withRouterConfig,
} from '@angular/router';
import { routes } from './app/routes';
import { errorInterceptor } from './app/core/intercepters/error-interceptor';
import { httpTokenInterceptor } from './app/core/intercepters/http-token-interceptor';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule, StoreModule.forRoot({}, {})),
		provideRouter(
			routes,
			withRouterConfig({
				onSameUrlNavigation: 'reload',
			}),
			withInMemoryScrolling(),
			withPreloading(PreloadAllModules),
			withComponentInputBinding(),
		),
		provideHttpClient(withFetch(), withInterceptors([httpTokenInterceptor, errorInterceptor])),
		CookieService,
		provideAnimations(),
	],
}).catch((err) => console.error(err));
