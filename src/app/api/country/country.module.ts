import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CountryComponent} from './country.component';
import {CountryRoutingModule} from './country-routing.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, CountryRoutingModule, CountryComponent],
})
export class CountryModule {
}
