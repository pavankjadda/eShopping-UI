import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit
{
  registerForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router)
  {
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
        password: ['',Validators.required],
      });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register()
  {

  }

}
