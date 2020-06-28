import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {OrderNewComponent} from "./order-new.component";

describe("OrderNewComponent", () => {
  let component: OrderNewComponent;
  let fixture: ComponentFixture<OrderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderNewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
