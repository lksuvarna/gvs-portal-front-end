import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalResultPageComponent } from './approval-result-page.component';

describe('ApprovalResultPageComponent', () => {
  let component: ApprovalResultPageComponent;
  let fixture: ComponentFixture<ApprovalResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
