import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelJacketComponent } from './label-jacket.component';

describe('LabelJacketComponent', () => {
  let component: LabelJacketComponent;
  let fixture: ComponentFixture<LabelJacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelJacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelJacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
