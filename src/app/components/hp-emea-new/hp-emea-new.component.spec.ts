import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpEmeaNewComponent } from './hp-emea-new.component';

describe('HpEmeaNewComponent', () => {
  let component: HpEmeaNewComponent;
  let fixture: ComponentFixture<HpEmeaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpEmeaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpEmeaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
