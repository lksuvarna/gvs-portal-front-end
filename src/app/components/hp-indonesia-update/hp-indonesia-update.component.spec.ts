import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpIndonesiaUpdateComponent } from './hp-indonesia-update.component';

describe('HpIndonesiaUpdateComponent', () => {
  let component: HpIndonesiaUpdateComponent;
  let fixture: ComponentFixture<HpIndonesiaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpIndonesiaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpIndonesiaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
