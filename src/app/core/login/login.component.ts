import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  message: string;
  loginForm: FormGroup;
  loading=false;
  submitted=false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  )
  {
    this.setMessage();
    // redirect to home if already logged in
    if(this.authService.currentUserValue)
    {
      this.router.navigate( ['/'] );
    }
  }

  // convenience getter for easy access to form fields
  get f()
  {
    return this.loginForm.controls;
  }

  ngOnInit()
  {
    this.loginForm=this.formBuilder.group( {
      username: ['', Validators.required],
      password: ['', Validators.required]
    } );

    // get return url from route parameters or default to '/'
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/';
  }

  login()
  {
    this.message = 'Trying to Login';

    this.authService.login( this.f.username.value, this.f.password.value ).subscribe( () => {
      this.setMessage();
      if(this.authService.isLoggedIn)
      {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'admin';

        //Redirect User
        this.router.navigate([redirect]);
      }
    });
  }

  logout()
  {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage()
  {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
