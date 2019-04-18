import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {UserProfile} from './model/user-profile';
import {SERVER_URL, USER_PROFILE_API_URL} from '../../app.constants';
import {UserProfileService} from './service/user-profile.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
} )
export class UserProfileComponent implements OnInit
{

  userProfile: UserProfile;

  userProfileForm = new FormGroup(
    {
      id: new FormControl({value: '', disabled: true}),
      firstName: new FormControl(''),
      username: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      user: new FormControl(''),
      address: new FormGroup(
        {
          //addressType: new FormControl( ''),
          addressType: new FormGroup(
            {
              type: new FormControl('')
            }
          ),
          id: new FormControl(''),
          streetName: new FormControl(''),
          apartment: new FormControl(''),
          city: new FormGroup(
            {
              name: new FormControl('')
            }
          ),
          state: new FormGroup(
            {
              name: new FormControl('')
            }
          ),
          country: new FormGroup(
            {
              name: new FormControl('')
            }
          ),
          zipCode: new FormControl(''),
        }),
    });

  constructor(private authService:AuthService, private userProfileService:UserProfileService,private router:Router)
  {
  }
  ngOnInit()
  {
    this.getUserProfile();
  }

  private getUserProfile()
  {
    let userProfileId=this.authService.currentUserSubject.value.userProfile.id;
    let userProfileUrl=SERVER_URL+USER_PROFILE_API_URL+userProfileId;

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
            address: data.addresses[0]
 /*           streetName: data.addresses[0].streetName,
            apartment: data.addresses[0].apartment,
            addressType: data.addresses[0].addressType.type,
            city: data.addresses[0].city.name,
            state: data.addresses[0].state.name,
            country: data.addresses[0].country.name,
            zipCode: data.addresses[0].zipCode*/
          }
        );
      },
      error1 =>
      {
        console.log('Failed to get User Profile information');
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
    this.router.navigate(['/profile/edit']);
  }
}
