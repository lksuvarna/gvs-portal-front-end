import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpAuNewComponent } from './hp-au-new.component';

describe('HpAuNewComponent', () => {
  let component: HpAuNewComponent;
  let fixture: ComponentFixture<HpAuNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpAuNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpAuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
