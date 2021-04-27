import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacInResetComponent } from './fac-in-reset.component';

describe('FacInResetComponent', () => {
  let component: FacInResetComponent;
  let fixture: ComponentFixture<FacInResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacInResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacInResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
