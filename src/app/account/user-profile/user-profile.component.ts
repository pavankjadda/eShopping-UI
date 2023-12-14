import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { environment } from "../../../environments/environment";
import { Address } from "../../api/address/model/address";
import { USER_PROFILE_API_URL } from "../../app.constants";
import { AuthService } from "../../core/auth/auth.service";
import { UserProfile } from "./model/user-profile";
import { UserProfileService } from "./service/user-profile.service";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  standalone: true,
  imports: [NgxSpinnerModule, NgIf, FormsModule, ReactiveFormsModule, NgFor],
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile;
  addresses: Array<Address>;

  userProfileForm = new UntypedFormGroup({
    id: new UntypedFormControl({ value: "", disabled: true }),
    firstName: new UntypedFormControl(""),
    username: new UntypedFormControl(""),
    lastName: new UntypedFormControl(""),
    email: new UntypedFormControl(""),
    phone: new UntypedFormControl(""),
    user: new UntypedFormControl(""),
    addresses: new UntypedFormControl(""),
  });

  constructor(
    private authService: AuthService,
    private userProfileService: UserProfileService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getUserProfile();
  }

  userProfileDataAvailable() {
    return this.userProfile !== undefined && this.userProfile !== null;
  }

  goHome() {
    this.router.navigate(["/"]);
  }

  editUserProfile() {
    this.router.navigate(["/account/profile/edit"]);
  }

  private getUserProfile() {
    this.spinner.show();

    let userProfileUrl =
      environment.BASE_URL + USER_PROFILE_API_URL + "/my_profile";
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
          addresses: data.addresses,
        });
        this.addresses = data.addresses;
        this.spinner.hide();
      },
      (error1) => {
        console.log("Failed to get User Profile information. Error: " + error1);
        this.spinner.hide();
      },
    );
  }
}
