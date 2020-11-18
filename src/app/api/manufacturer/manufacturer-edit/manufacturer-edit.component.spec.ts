import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ManufacturerEditComponent} from './manufacturer-edit.component';

describe('ManufacturerEditComponent', () => {
  let component: ManufacturerEditComponent;
  let fixture: ComponentFixture<ManufacturerEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturerEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
