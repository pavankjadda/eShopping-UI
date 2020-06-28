import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ManufacturerNewComponent} from "./manufacturer-new.component";

describe("ManufacturerNewComponent", () => {
  let component: ManufacturerNewComponent;
  let fixture: ComponentFixture<ManufacturerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturerNewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
