import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSinglePageComponent } from './approval-single-page.component';

describe('ApprovalSinglePageComponent', () => {
  let component: ApprovalSinglePageComponent;
  let fixture: ComponentFixture<ApprovalSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
