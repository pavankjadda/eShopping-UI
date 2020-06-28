import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {StateComponent} from "./state.component";
import {StateRoutingModule} from "./state-routing.module";

@NgModule({
  declarations: [StateComponent],
  imports: [CommonModule, ReactiveFormsModule, StateRoutingModule],
})
export class StateModule {}
