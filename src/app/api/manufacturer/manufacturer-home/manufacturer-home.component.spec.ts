import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ManufacturerHomeComponent} from "./manufacturer-home.component";

describe("ManufacturerHomeComponent", () => {
  let component: ManufacturerHomeComponent;
  let fixture: ComponentFixture<ManufacturerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturerHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
