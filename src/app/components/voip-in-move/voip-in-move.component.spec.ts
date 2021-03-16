import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipInMoveComponent } from './voip-in-move.component';

describe('VoipInMoveComponent', () => {
  let component: VoipInMoveComponent;
  let fixture: ComponentFixture<VoipInMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipInMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipInMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
