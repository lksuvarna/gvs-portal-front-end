import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipLaUpdateComponent } from './voip-la-update.component';

describe('VoipLaUpdateComponent', () => {
  let component: VoipLaUpdateComponent;
  let fixture: ComponentFixture<VoipLaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipLaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipLaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
