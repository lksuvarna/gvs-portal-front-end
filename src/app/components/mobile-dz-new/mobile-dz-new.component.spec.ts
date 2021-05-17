import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDzNewComponent } from './mobile-dz-new.component';

describe('MobileDzNewComponent', () => {
  let component: MobileDzNewComponent;
  let fixture: ComponentFixture<MobileDzNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDzNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDzNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
