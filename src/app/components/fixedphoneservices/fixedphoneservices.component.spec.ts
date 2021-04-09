import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedphoneservicesComponent } from './fixedphoneservices.component';

describe('FixedphoneservicesComponent', () => {
  let component: FixedphoneservicesComponent;
  let fixture: ComponentFixture<FixedphoneservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedphoneservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedphoneservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
