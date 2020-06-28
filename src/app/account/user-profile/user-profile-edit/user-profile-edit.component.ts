import {Component, OnInit, TemplateRef} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../../../../environments/environment";
import {AddressType} from "../../../api/address-type/model/address-type";
import {AddressTypeService} from "../../../api/address-type/service/address-type.service";
import {Address} from "../../../api/address/model/address";
import {AddressService} from "../../../api/address/service/address.service";
import {City} from "../../../api/city/model/city";
import {CityService} from "../../../api/city/services/city.service";
import {Country} from "../../../api/country/model/country";
import {CountryService} from "../../../api/country/services/country.service";
import {State} from "../../../api/state/model/state";
import {StateService} from "../../../api/state/services/state.service";
import {
  ADDRESS_API_URL,
  ADDRESS_TYPE_API_URL,
  CITY_API_URL,
  COUNTRY_API_URL,
  STATE_API_URL,
  USER_PROFILE_API_URL,
} from "../../../app.constants";
import {AuthService} from "../../../core/auth/auth.service";
import {UserProfile} from "../model/user-profile";
import {UserProfileService} from "../service/user-profile.service";

@Component({
  selector: "app-user-profile-edit",
  templateUrl: "./user-profile-edit.component.html",
  styleUrls: ["./user-profile-edit.component.scss"],
})
export class UserProfileEditComponent implements OnInit {
  userProfile: UserProfile;
  addressTypes: Array<AddressType>;
  addresses: Array<Address>;
  countries: Array<Country>;
  states: Array<State>;
  cities: Array<City>;

  modalRef: BsModalRef;

  userProfileForm = new FormGroup({
    id: new FormControl({ value: "", disabled: true }),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    address: new FormGroup({
      addressType: new FormControl(""),
      id: new FormControl(""),
      streetName: new FormControl(""),
      apartment: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      country: new FormControl(""),
      zipCode: new FormControl(""),
    }),
  });

  constructor(
    private authService: AuthService,
    private userProfileService: UserProfileService,
    private spinnerService: NgxSpinnerService,
    private cityService: CityService,
    private stateService: StateService,
    private countryService: CountryService,
    private addressTypeService: AddressTypeService,
    private addressService: AddressService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getUserProfile();
    this.loadAddressTypes();
    this.loadCountries();
  }

  openModal(template: TemplateRef<any>, address: Address) {
    this.modalRef = this.modalService.show(template);
    if (address != null) {
      this.userProfileForm.patchValue({
        address: address,
      });
      this.loadStates();
      this.loadCities();
    } else {
    }
  }

  private getUserProfile() {
    let userProfileId = this.authService.currentUserSubject.value.userProfile
      .id;
    let userProfileUrl =
      environment.BASE_URL + USER_PROFILE_API_URL + "/" + userProfileId;

    this.userProfileService.getUserProfile(userProfileUrl).subscribe(
      (data) => {
        this.userProfile = data;
        this.userProfileForm.patchValue({
          id: data.id,
          username: data.user.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          user: data.user,
        });
        this.addresses = data.addresses;
      },
      (error1) => {
        console.log("Failed to get User Profile information");
      }
    );
  }

  updateUserProfile() {
    this.spinnerService.show();

    const userProfileUrl =
      environment.BASE_URL + USER_PROFILE_API_URL + "/update";
    let userProfileId = this.authService.currentUserSubject.value.userProfile
      .id;
    let userProfile = new UserProfile();
    userProfile.id = userProfileId;
    userProfile.firstName = this.userProfileForm.value.firstName;
    userProfile.lastName = this.userProfileForm.value.lastName;
    userProfile.email = this.userProfileForm.value.email;
    userProfile.phone = this.userProfileForm.value.phone;
    //userProfile.addresses=[this.userProfileForm.value.address];

    this.userProfileService
      .updateUserProfile(userProfileUrl, userProfile)
      .subscribe(
        (data) => {
          userProfile = data;
          console.log("UserProfile updated");
          this.router.navigate(["/account/profile"]);
        },
        (error1) => {
          console.log("UserProfile update failed");
          this.spinnerService.hide();
        }
      );
  }

  updateUserAddress() {
    const addressApiUrl = environment.BASE_URL + ADDRESS_API_URL + "/update";
    this.addressService
      .updateAddress(addressApiUrl, this.userProfileForm.value.address)
      .subscribe(
        (data) => {
          this.getUserProfile();
          this.modalRef.hide();
        },
        (error1) => {
          console.log("Failed to updated address. Error: " + error1);
        }
      );
  }

  deleteAddress(address: Address) {
    const addressApiUrl =
      environment.BASE_URL + ADDRESS_API_URL + "/delete/" + address.id;
    this.addressService.deleteAddress(addressApiUrl).subscribe(
      (data) => {
        this.getUserProfile();
      },
      (error1) => {}
    );
  }

  private loadAddressTypes() {
    const url = environment.BASE_URL + ADDRESS_TYPE_API_URL + "/list";
    this.addressTypeService.getAddressTypes(url).subscribe(
      (addressTypes) => {
        this.addressTypes = addressTypes;
        this.userProfileForm.patchValue({
          addressType: addressTypes,
        });
        console.log("Successfully loaded address types");
      },
      (error1) => {
        console.log("Failed to load address types");
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

  loadStates() {
    const country = this.userProfileForm.value.address.country;
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
    const state = this.userProfileForm.value.address.state;
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

  compareAddressTypeFn(c1: AddressType, c2: AddressType): boolean {
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
    this.router.navigate(["/account/profile"]);
  }
}
