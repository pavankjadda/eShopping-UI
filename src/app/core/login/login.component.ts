import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {User} from '../user/model/user';

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
        if(response['token'])
        {
          let user=response;
          /*
          this.authService.isLoggedIn=true;
          localStorage.setItem( 'currentUser', JSON.stringify( user ) );
          this.authService.currentUserSubject=new BehaviorSubject<User>( JSON.parse( localStorage.getItem( 'currentUser' ) ) );
          this.authService.currentUser=this.authService.currentUserSubject.asObservable();
          */
          this.router.navigate(['/home']);
        }
        else
        {
          localStorage.removeItem( 'currentUser' );
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
