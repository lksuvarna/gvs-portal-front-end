import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpUsaNewComponent } from './hp-usa-new.component';

describe('HpUsaNewComponent', () => {
  let component: HpUsaNewComponent;
  let fixture: ComponentFixture<HpUsaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpUsaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpUsaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
