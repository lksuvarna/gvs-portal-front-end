import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacInDeactivateComponent } from './fac-in-deactivate.component';

describe('FacInDeactivateComponent', () => {
  let component: FacInDeactivateComponent;
  let fixture: ComponentFixture<FacInDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacInDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacInDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
