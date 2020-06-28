import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AddressTypeComponent} from "./address-type.component";
import {AddressTypeRoutingModule} from "./address-type-routing.module";

@NgModule({
  declarations: [AddressTypeComponent],
  imports: [CommonModule, ReactiveFormsModule, AddressTypeRoutingModule],
})
export class AddressTypeModule {}
