import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpEmeaUpdateComponent } from './hp-emea-update.component';

describe('HpEmeaUpdateComponent', () => {
  let component: HpEmeaUpdateComponent;
  let fixture: ComponentFixture<HpEmeaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpEmeaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpEmeaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
