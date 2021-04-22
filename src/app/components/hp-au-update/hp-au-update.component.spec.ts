import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpAuUpdateComponent } from './hp-au-update.component';

describe('HpAuUpdateComponent', () => {
  let component: HpAuUpdateComponent;
  let fixture: ComponentFixture<HpAuUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpAuUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpAuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
