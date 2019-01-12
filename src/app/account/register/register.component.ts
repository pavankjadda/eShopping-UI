import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';
import {customValidator} from './username-validator.directive';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit
{
  registerForm: FormGroup;
  returnUrl: string;
  submitted: boolean;

  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router, private authService:AuthService)
  {
    this.authService.logout();
    this.authService.isLoggedIn=false;
  }

  // convenience getter for easy access to form fields
  get formControls()
  {
    return this.registerForm.controls;
  }

  ngOnInit()
  {
    this.registerForm=this.formBuilder.group(
      {
        username: ['',[Validators.required,Validators.maxLength(15),customValidator()]],
        email: ['',Validators.required],
        password: ['',Validators.required],
        confirmPassword: ['',Validators.required],
      });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register()
  {
    this.submitted=true;
    let username=this.formControls.username.value;
    let email=this.formControls.email.value;
    let password=this.formControls.password.value;
    let confirmPassword=this.formControls.confirmPassword.value;

  }

}
