import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnExtensionAuSummaryComponent } from './en-extension-au-summary.component';

describe('EnExtensionAuSummaryComponent', () => {
  let component: EnExtensionAuSummaryComponent;
  let fixture: ComponentFixture<EnExtensionAuSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnExtensionAuSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnExtensionAuSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
