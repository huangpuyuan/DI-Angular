import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherOrderComponent } from './another-order.component';

describe('AnotherOrderComponent', () => {
  let component: AnotherOrderComponent;
  let fixture: ComponentFixture<AnotherOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
