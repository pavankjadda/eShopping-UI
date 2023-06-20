import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http403ErrorComponent} from './http403-error/http403-error.component';
import {HelpersRoutingModule} from './helpers-routing.module';
import {FileExistingValuePipe} from './pipes/file-existing-value.pipe';

@NgModule({
    imports: [CommonModule, HelpersRoutingModule, Http403ErrorComponent, FileExistingValuePipe],
})
export class HelpersModule {
}
