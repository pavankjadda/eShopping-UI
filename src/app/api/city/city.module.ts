import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CityComponent} from './city.component';
import {CityRoutingModule} from './city-routing.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, CityRoutingModule, CityComponent],
})
export class CityModule {
}
