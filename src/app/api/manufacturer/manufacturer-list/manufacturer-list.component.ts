import {Component, OnInit} from "@angular/core";
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../../../../environments/environment";
import {MANUFACTURER_API_URL} from "../../../app.constants";
import {Manufacturer} from "../model/manufacturer";
import {ManufacturerService} from "../service/manufacturer.service";

@Component({
  selector: "app-manufacturer-list",
  templateUrl: "./manufacturer-list.component.html",
  styleUrls: ["./manufacturer-list.component.scss"],
})
export class ManufacturerListComponent implements OnInit {
  manufacturers: Array<Manufacturer>;

  constructor(
    private manufacturerService: ManufacturerService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getManufacturers();
  }

  private getManufacturers() {
    let url = environment.BASE_URL + MANUFACTURER_API_URL + "/list";
    this.spinner.show();

    this.manufacturerService.getManufacturers(url).subscribe(
      (data) => {
        this.manufacturers = data;
      },
      (error1) => {
        console.log("Failed to load manufacturers. Error message: " + error1);
        this.spinner.hide();
      }
    );
    this.spinner.hide();
  }

  manufacturerDataAvailable(): boolean {
    return this.manufacturers !== undefined;
  }
}
