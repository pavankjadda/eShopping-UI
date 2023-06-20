import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AddressTypeComponent} from './address-type.component';
import {AddressTypeRoutingModule} from './address-type-routing.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, AddressTypeRoutingModule, AddressTypeComponent],
})
export class AddressTypeModule {
}
