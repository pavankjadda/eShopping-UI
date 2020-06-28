import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ManufacturerEditComponent} from "./manufacturer-edit.component";

describe("ManufacturerEditComponent", () => {
  let component: ManufacturerEditComponent;
  let fixture: ComponentFixture<ManufacturerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturerEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
