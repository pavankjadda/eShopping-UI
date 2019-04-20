import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, MainComponent],
  exports:[MainComponent]
})
export class LayoutModule { }
