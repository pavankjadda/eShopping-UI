import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {UserProfile} from './model/user-profile';
import {SERVER_URL, USER_PROFILE_API_URL} from '../../app.constants';
import {UserProfileService} from './service/user-profile.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Address} from '../../api/address/model/address';
import {NgxSpinnerService} from 'ngx-spinner';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
} )
export class UserProfileComponent implements OnInit
{

  userProfile: UserProfile;
  addresses: Array<Address>;

  userProfileForm = new FormGroup(
    {
      id: new FormControl({value: '', disabled: true}),
      firstName: new FormControl(''),
      username: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      user: new FormControl(''),
      addresses: new FormControl('')
    });

  constructor(private authService:AuthService,
              private userProfileService:UserProfileService,
              private spinner:NgxSpinnerService,
              private router:Router)
  {
  }
  ngOnInit()
  {
    this.getUserProfile();
  }

  private getUserProfile()
  {
    this.spinner.show();

    let userProfileUrl=SERVER_URL+USER_PROFILE_API_URL+'my_profile';
    this.userProfileService.getUserProfile(userProfileUrl).subscribe(
      data=>
      {
        this.userProfile=data;
        this.userProfileForm.patchValue(
          {
            id: data.id,
            username: data.user.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            user: data.user,
            addresses: data.addresses
          }
        );
        this.addresses=data.addresses;
        this.spinner.hide();
      },
      error1 =>
      {
        console.log('Failed to get User Profile information. Error: '+error1);
        this.spinner.hide();
      }
    );
  }

  userProfileDataAvailable()
  {
    return this.userProfile !== undefined && this.userProfile !== null;
  }


  goHome()
  {
    this.router.navigate(['/']);
  }

  editUserProfile()
  {
    this.router.navigate(['/account/profile/edit']);
  }
}
