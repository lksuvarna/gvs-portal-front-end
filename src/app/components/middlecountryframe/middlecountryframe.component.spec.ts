import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlecountryframeComponent } from './middlecountryframe.component';

describe('MiddlecountryframeComponent', () => {
  let component: MiddlecountryframeComponent;
  let fixture: ComponentFixture<MiddlecountryframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddlecountryframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlecountryframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
