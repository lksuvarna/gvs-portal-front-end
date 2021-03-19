import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipEmeaNewComponent } from './voip-emea-new.component';

describe('VoipEmeaNewComponent', () => {
  let component: VoipEmeaNewComponent;
  let fixture: ComponentFixture<VoipEmeaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipEmeaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipEmeaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
