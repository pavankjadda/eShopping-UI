import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {OrderDeleteComponent} from './order-delete.component';

describe('OrderDeleteComponent', () => {
  let component: OrderDeleteComponent;
  let fixture: ComponentFixture<OrderDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDeleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
