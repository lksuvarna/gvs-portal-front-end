import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipInNewComponent } from './voip-in-new.component';

describe('VoipInNewComponent', () => {
  let component: VoipInNewComponent;
  let fixture: ComponentFixture<VoipInNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipInNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipInNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
