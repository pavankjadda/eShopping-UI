import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {RouterModule} from "@angular/router";
import {ManufacturerComponent} from "./manufacturer.component";
import {ManufacturerListComponent} from "./manufacturer-list/manufacturer-list.component";
import {ManufacturerEditComponent} from "./manufacturer-edit/manufacturer-edit.component";
import {ManufacturerHomeComponent} from "./manufacturer-home/manufacturer-home.component";
import {ManufacturerNewComponent} from "./manufacturer-new/manufacturer-new.component";
import {ManufacturerViewComponent} from "./manufacturer-view/manufacturer-view.component";
import {ManufacturerDeleteComponent} from "./manufacturer-delete/manufacturer-delete.component";
import {ManufacturerRoutingModule} from "./manufacturer-routing.module";

@NgModule({
  declarations: [
    ManufacturerComponent,
    ManufacturerListComponent,
    ManufacturerEditComponent,
    ManufacturerHomeComponent,
    ManufacturerNewComponent,
    ManufacturerViewComponent,
    ManufacturerDeleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule,
    ManufacturerRoutingModule,
  ],
  exports: [RouterModule],
})
export class ManufacturerModule {}
