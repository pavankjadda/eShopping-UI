import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { environment } from "../../../../environments/environment";
import {
  CITY_API_URL,
  COUNTRY_API_URL,
  MANUFACTURER_ADDRESS_TYPE_API_URL,
  MANUFACTURER_API_URL,
  STATE_API_URL,
} from "../../../app.constants";
import { AddressTypeService } from "../../address-type/service/address-type.service";
import { AddressService } from "../../address/service/address.service";
import { City } from "../../city/model/city";
import { CityService } from "../../city/services/city.service";
import { Country } from "../../country/model/country";
import { CountryService } from "../../country/services/country.service";
import { State } from "../../state/model/state";
import { StateService } from "../../state/services/state.service";
import { Manufacturer } from "../model/manufacturer";
import { ManufacturerAddress } from "../model/manufacturer-address";
import { ManufacturerAddressType } from "../model/manufacturer-address-type";
import { ManufacturerService } from "../service/manufacturer.service";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-manufacturer-new",
  templateUrl: "./manufacturer-new.component.html",
  standalone: true,
  imports: [NgxSpinnerModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class ManufacturerNewComponent implements OnInit {
  manufacturerAddressTypes: Array<ManufacturerAddressType>;
  countries: Array<Country>;
  states: Array<State>;
  cities: Array<City>;

  manufacturerForm = new UntypedFormGroup({
    id: new UntypedFormControl({ value: "", disabled: true }),
    name: new UntypedFormControl(""),
    displayName: new UntypedFormControl(""),
    description: new UntypedFormControl(""),
    manufacturerAddress: new UntypedFormGroup({
      manufacturerAddressType: new UntypedFormControl(""),
      streetName: new UntypedFormControl(""),
      apartment: new UntypedFormControl(""),
      city: new UntypedFormControl(""),
      state: new UntypedFormControl(""),
      country: new UntypedFormControl(""),
      zipCode: new UntypedFormControl(""),
    }),
    phone: new UntypedFormControl(""),
    contactEmail: new UntypedFormControl(""),
    fax: new UntypedFormControl(""),
    products: new UntypedFormControl(""),
  });

  constructor(
    private manufacturerService: ManufacturerService,
    private cityService: CityService,
    private stateService: StateService,
    private countryService: CountryService,
    private addressTypeService: AddressTypeService,
    private addressService: AddressService,
    private spinnerService: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAddressTypes();
    this.loadCountries();
  }

  createManufacturer() {
    this.spinnerService.show();
    const manufactureUrl =
      environment.BASE_URL + MANUFACTURER_API_URL + "/create";

    let manufacturerAddress = new ManufacturerAddress();
    manufacturerAddress.manufacturerAddressType =
      this.manufacturerForm.value.manufacturerAddress.manufacturerAddressType;
    manufacturerAddress.streetName =
      this.manufacturerForm.value.manufacturerAddress.streetName;
    manufacturerAddress.apartment =
      this.manufacturerForm.value.manufacturerAddress.apartment;
    manufacturerAddress.city =
      this.manufacturerForm.value.manufacturerAddress.city;
    manufacturerAddress.state =
      this.manufacturerForm.value.manufacturerAddress.state;
    manufacturerAddress.country =
      this.manufacturerForm.value.manufacturerAddress.country;
    manufacturerAddress.zipCode =
      this.manufacturerForm.value.manufacturerAddress.zipCode;

    let manufacturer = new Manufacturer();
    manufacturer.name = this.manufacturerForm.value.name;
    manufacturer.displayName = this.manufacturerForm.value.displayName;
    manufacturer.description = this.manufacturerForm.value.description;
    manufacturer.phone = this.manufacturerForm.value.phone;
    manufacturer.contactEmail = this.manufacturerForm.value.contactEmail;
    manufacturer.fax = this.manufacturerForm.value.fax;
    manufacturer.manufacturerAddress = manufacturerAddress;

    this.manufacturerService
      .createManufacturer(manufactureUrl, manufacturer)
      .subscribe(
        (data) => {
          manufacturer = data;
          console.log("Manufacturer created");
          this.router.navigate(["/manufacturer/list"]);
        },
        (error1) => {
          console.log("Manufacturer creation failed");
          this.spinnerService.hide();
        }
      );
  }

  loadStates() {
    const country = this.manufacturerForm.value.manufacturerAddress.country;
    const url =
      environment.BASE_URL + STATE_API_URL + "/find/country/" + country.id;

    this.stateService.getStatesByCountryId(url).subscribe(
      (data) => {
        this.states = data;
      },
      (error1) => {
        console.log("Failed to load states");
      }
    );
  }

  loadCities() {
    const state = this.manufacturerForm.value.manufacturerAddress.state;
    const url = environment.BASE_URL + CITY_API_URL + "/find/state/" + state.id;

    this.cityService.getCitiesByStateId(url).subscribe(
      (data) => {
        this.cities = data;
      },
      (error1) => {
        console.log("Failed to load cities");
      }
    );
  }

  goBack() {
    this.router.navigate(["/manufacturer"]);
  }

  private loadAddressTypes() {
    const url =
      environment.BASE_URL + MANUFACTURER_ADDRESS_TYPE_API_URL + "/list";
    this.addressTypeService.getManufacturerAddressTypes(url).subscribe(
      (manufacturerAddressTypes) => {
        this.manufacturerAddressTypes = manufacturerAddressTypes;
        this.manufacturerForm.patchValue({
          manufacturerAddressType: manufacturerAddressTypes,
        });
        console.log("Successfully loaded manufacturerAddress types");
      },
      (error1) => {
        console.log("Failed to load manufacturerAddress types");
      }
    );
  }

  private loadCountries() {
    const url = environment.BASE_URL + COUNTRY_API_URL + "/list";
    this.countryService.getCountries(url).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error1) => {}
    );
  }
}
