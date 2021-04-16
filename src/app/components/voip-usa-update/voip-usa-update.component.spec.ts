import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipUsaUpdateComponent } from './voip-usa-update.component';

describe('VoipUsaUpdateComponent', () => {
  let component: VoipUsaUpdateComponent;
  let fixture: ComponentFixture<VoipUsaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipUsaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipUsaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
