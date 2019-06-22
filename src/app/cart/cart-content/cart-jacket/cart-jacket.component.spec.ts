import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartJacketComponent } from './cart-jacket.component';

describe('CartJacketComponent', () => {
  let component: CartJacketComponent;
  let fixture: ComponentFixture<CartJacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartJacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartJacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
