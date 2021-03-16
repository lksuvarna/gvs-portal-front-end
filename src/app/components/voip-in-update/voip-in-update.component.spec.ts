import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipInUpdateComponent } from './voip-in-update.component';

describe('VoipInUpdateComponent', () => {
  let component: VoipInUpdateComponent;
  let fixture: ComponentFixture<VoipInUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipInUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipInUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
