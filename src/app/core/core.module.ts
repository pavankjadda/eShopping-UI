import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login/login.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule(
  {
    imports:[RouterModule,CommonModule],
    declarations:[
      LoginComponent
    ]
  }
)


export class CoreModule {}
