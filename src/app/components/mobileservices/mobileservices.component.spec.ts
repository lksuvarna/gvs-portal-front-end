import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileservicesComponent } from './mobileservices.component';

describe('MobileservicesComponent', () => {
  let component: MobileservicesComponent;
  let fixture: ComponentFixture<MobileservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
