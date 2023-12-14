import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
import { ManufacturerAddressType } from "../model/manufacturer-address-type";
import { ManufacturerService } from "../service/manufacturer.service";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-manufacturer-edit",
  templateUrl: "./manufacturer-edit.component.html",
  standalone: true,
  imports: [NgxSpinnerModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class ManufacturerEditComponent implements OnInit {
  manufacturer: Manufacturer;
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
      id: new UntypedFormControl(""),
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
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getManufacturer();
    this.loadAddressTypes();
    this.loadCountries();
  }

  updateManufacturer() {
    this.spinnerService.show();

    const manufacturerUrl =
      environment.BASE_URL + MANUFACTURER_API_URL + "/update";
    const id = this.route.snapshot.paramMap.get("id");

    let manufacturer = new Manufacturer();
    manufacturer.id = Number(id);
    manufacturer.name = this.manufacturerForm.value.name;
    manufacturer.displayName = this.manufacturerForm.value.displayName;
    manufacturer.description = this.manufacturerForm.value.description;
    manufacturer.phone = this.manufacturerForm.value.phone;
    manufacturer.contactEmail = this.manufacturerForm.value.contactEmail;
    manufacturer.fax = this.manufacturerForm.value.fax;
    manufacturer.manufacturerAddress =
      this.manufacturerForm.value.manufacturerAddress;

    this.manufacturerService
      .updateManufacturer(manufacturerUrl, manufacturer)
      .subscribe(
        (data) => {
          manufacturer = data;
          console.log("Manufacturer updated");
          this.router.navigate(["/manufacturer/list"]);
        },
        (error1) => {
          console.log("Manufacturer update failed");
          this.spinnerService.hide();
        },
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
      },
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
      },
    );
  }

  compareAddressTypeFn(
    c1: ManufacturerAddressType,
    c2: ManufacturerAddressType,
  ): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCountryFn(c1: Country, c2: Country): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareStateFn(c1: State, c2: State): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCityFn(c1: City, c2: City): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  goBack() {
    this.router.navigate(["/manufacturer"]);
  }

  private getManufacturer() {
    const id = this.route.snapshot.paramMap.get("id");
    const url = environment.BASE_URL + MANUFACTURER_API_URL + "/find/" + id;

    this.manufacturerService
      .getManufacturer(url)
      .pipe()
      .subscribe(
        (data) => {
          this.manufacturer = data;
          this.manufacturerForm.patchValue({
            id: data.id,
            name: data.name,
            displayName: data.displayName,
            description: data.description,
            phone: data.phone,
            contactEmail: data.contactEmail,
            fax: data.fax,
            manufacturerAddress: data.manufacturerAddress,
            products: data.products,
          });
          this.loadStates();
          this.loadCities();
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log("getManufacturer() success");
        },
      );
  }

  private loadAddressTypes() {
    const url =
      environment.BASE_URL + MANUFACTURER_ADDRESS_TYPE_API_URL + "/list";
    this.addressTypeService.getManufacturerAddressTypes(url).subscribe(
      (manufacturerAddressTypes) => {
        this.manufacturerAddressTypes = manufacturerAddressTypes;
        this.manufacturerForm.patchValue({
          addressType: manufacturerAddressTypes,
        });
        console.log("Successfully loaded address types");
      },
      (error1) => {
        console.log("Failed to load address types");
      },
    );
  }

  private loadCountries() {
    const url = environment.BASE_URL + COUNTRY_API_URL + "/list";
    this.countryService.getCountries(url).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error1) => {},
    );
  }
}
