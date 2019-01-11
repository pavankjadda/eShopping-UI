import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CoreRoutingModule} from './core-routing.module';
import {UserComponent} from './user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ]
})


export class CoreModule {}
