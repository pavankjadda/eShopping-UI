import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiRoutingModule} from './api-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ApiRoutingModule
    ],
    declarations: [],
    providers: []
})
export class ApiModule {
}
