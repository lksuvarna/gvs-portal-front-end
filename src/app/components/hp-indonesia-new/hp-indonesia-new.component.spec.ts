import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpIndonesiaNewComponent } from './hp-indonesia-new.component';

describe('HpIndonesiaNewComponent', () => {
  let component: HpIndonesiaNewComponent;
  let fixture: ComponentFixture<HpIndonesiaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpIndonesiaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpIndonesiaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
