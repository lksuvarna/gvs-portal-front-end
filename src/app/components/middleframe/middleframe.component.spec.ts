import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleframeComponent } from './middleframe.component';

describe('MiddleframeComponent', () => {
  let component: MiddleframeComponent;
  let fixture: ComponentFixture<MiddleframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
