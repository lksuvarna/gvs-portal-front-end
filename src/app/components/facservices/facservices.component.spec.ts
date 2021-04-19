import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacservicesComponent } from './facservices.component';

describe('FacservicesComponent', () => {
  let component: FacservicesComponent;
  let fixture: ComponentFixture<FacservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
