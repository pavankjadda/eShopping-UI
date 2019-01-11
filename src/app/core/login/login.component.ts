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
    // redirect to home if already logged in
    if(this.authService.currentUserValue)
    {
      this.router.navigate( ['/home'] );
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
    //Logout user if already logged in
    this.logout();
  }

  login()
  {
    this.authService.login( this.f.username.value, this.f.password.value ).subscribe(
 response=>
      {
        if(response['token'] && this.authService.isLoggedIn)
        {
          this.router.navigate(['/home']);
        }
        else
        {
          localStorage.removeItem( 'currentUser' );
          this.router.navigate(['/login']);
        }
      },
        error => console.log(error),
      () => {});
  }

  logout()
  {
    this.authService.logout();
    this.setMessage();
  }

  isUserLoggedIn()
  {

  }
  private setMessage()
  {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
