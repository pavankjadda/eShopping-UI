import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AddressTypeComponent } from "./address-type.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AddressTypeComponent],
})
export class AddressTypeModule {}
