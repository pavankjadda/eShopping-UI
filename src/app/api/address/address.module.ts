import {NgModule} from '@angular/core';
import {AddressComponent} from './address.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AddressRoutingModule} from './address-routing.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, AddressRoutingModule, AddressComponent],
})
export class AddressModule {
}
