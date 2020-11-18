import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AddressTypeComponent} from './address-type.component';

describe('AddressTypeComponent', () => {
  let component: AddressTypeComponent;
  let fixture: ComponentFixture<AddressTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddressTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
