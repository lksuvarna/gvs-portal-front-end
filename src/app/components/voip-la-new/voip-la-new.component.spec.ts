import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipLaNewComponent } from './voip-la-new.component';

describe('VoipLaNewComponent', () => {
  let component: VoipLaNewComponent;
  let fixture: ComponentFixture<VoipLaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipLaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipLaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
