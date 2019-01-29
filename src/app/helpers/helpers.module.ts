import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http403ErrorComponent} from './http403-error/http403-error.component';
import {HelpersRoutingModule} from './helpers-routing.module';

@NgModule( {
             declarations: [Http403ErrorComponent],
  imports: [
    CommonModule,
    HelpersRoutingModule
  ]
} )
export class HelpersModule
{
}
