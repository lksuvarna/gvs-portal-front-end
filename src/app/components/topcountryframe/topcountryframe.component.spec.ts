import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcountryframeComponent } from './topcountryframe.component';

describe('TopcountryframeComponent', () => {
  let component: TopcountryframeComponent;
  let fixture: ComponentFixture<TopcountryframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcountryframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcountryframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
