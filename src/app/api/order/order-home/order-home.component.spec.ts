import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {OrderHomeComponent} from './order-home.component';

describe('OrderHomeComponent', () => {
  let component: OrderHomeComponent;
  let fixture: ComponentFixture<OrderHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrderHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
