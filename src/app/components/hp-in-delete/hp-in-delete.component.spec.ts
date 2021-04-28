import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpInDeleteComponent } from './hp-in-delete.component';

describe('HpInDeleteComponent', () => {
  let component: HpInDeleteComponent;
  let fixture: ComponentFixture<HpInDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpInDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpInDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
