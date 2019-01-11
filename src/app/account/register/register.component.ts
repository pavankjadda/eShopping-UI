import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit
{
  registerForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router, private authService:AuthService)
  {
    this.authService.logout();
    this.authService.isLoggedIn=false;
  }

  // convenience getter for easy access to form fields
  get f()
  {
    return this.registerForm.controls;
  }

  ngOnInit()
  {
    this.registerForm=this.formBuilder.group(
      {
        username: ['',Validators.required],
        email: ['',Validators.required],
        password: ['',Validators.required],
        confirmPassword: ['',Validators.required],
      });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register()
  {

  }

}
