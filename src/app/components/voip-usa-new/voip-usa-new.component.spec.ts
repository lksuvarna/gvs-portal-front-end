import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipUsaNewComponent } from './voip-usa-new.component';

describe('VoipUsaNewComponent', () => {
  let component: VoipUsaNewComponent;
  let fixture: ComponentFixture<VoipUsaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipUsaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipUsaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
