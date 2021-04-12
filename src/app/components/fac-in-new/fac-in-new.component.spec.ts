import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacInNewComponent } from './fac-in-new.component';

describe('FacInNewComponent', () => {
  let component: FacInNewComponent;
  let fixture: ComponentFixture<FacInNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacInNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacInNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
