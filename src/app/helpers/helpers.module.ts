import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Http403ErrorComponent} from "./http403-error/http403-error.component";
import {HelpersRoutingModule} from "./helpers-routing.module";
import {FileExistingValuePipe} from "./pipes/file-existing-value.pipe";

@NgModule({
  declarations: [Http403ErrorComponent, FileExistingValuePipe],
  imports: [CommonModule, HelpersRoutingModule],
})
export class HelpersModule {}
