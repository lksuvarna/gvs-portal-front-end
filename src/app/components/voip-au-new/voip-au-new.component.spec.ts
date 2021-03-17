import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipAuNewComponent } from './voip-au-new.component';

describe('VoipAuNewComponent', () => {
  let component: VoipAuNewComponent;
  let fixture: ComponentFixture<VoipAuNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipAuNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipAuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
