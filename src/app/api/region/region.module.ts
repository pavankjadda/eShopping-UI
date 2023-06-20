import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RegionComponent} from './region.component';
import {RegionRoutingModule} from './region-routing.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RegionRoutingModule, RegionComponent],
})
export class RegionModule {
}
