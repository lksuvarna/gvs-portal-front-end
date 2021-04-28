import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpInUpdateComponent } from './hp-in-update.component';

describe('HpInUpdateComponent', () => {
  let component: HpInUpdateComponent;
  let fixture: ComponentFixture<HpInUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpInUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpInUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
