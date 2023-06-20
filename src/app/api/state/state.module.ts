import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StateComponent} from './state.component';
import {StateRoutingModule} from './state-routing.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, StateRoutingModule, StateComponent],
})
export class StateModule {
}
