import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpInNewComponent } from './hp-in-new.component';

describe('HpInNewComponent', () => {
  let component: HpInNewComponent;
  let fixture: ComponentFixture<HpInNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpInNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpInNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
