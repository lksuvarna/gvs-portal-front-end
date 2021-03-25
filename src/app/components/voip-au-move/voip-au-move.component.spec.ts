import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipAuMoveComponent } from './voip-au-move.component';

describe('VoipAuMoveComponent', () => {
  let component: VoipAuMoveComponent;
  let fixture: ComponentFixture<VoipAuMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipAuMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipAuMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
