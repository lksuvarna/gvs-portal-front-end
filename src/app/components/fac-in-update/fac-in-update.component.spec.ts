import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacInUpdateComponent } from './fac-in-update.component';

describe('FacInUpdateComponent', () => {
  let component: FacInUpdateComponent;
  let fixture: ComponentFixture<FacInUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacInUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacInUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
