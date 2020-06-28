import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {LoginComponent} from "./login.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {NgxSpinnerService} from "ngx-spinner";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        { provide: FormBuilder, useValue: FormBuilder },
        { provide: FormGroup, useValue: FormGroup },
        { provide: AuthService, useValue: AuthService },
        { provide: NgxSpinnerService, useValue: NgxSpinnerService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
