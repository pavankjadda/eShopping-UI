import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ManufacturerViewComponent} from "./manufacturer-view.component";

describe("ManufacturerViewComponent", () => {
  let component: ManufacturerViewComponent;
  let fixture: ComponentFixture<ManufacturerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturerViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
