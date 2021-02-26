import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipInDeleteComponent } from './voip-in-delete.component';

describe('VoipInDeleteComponent', () => {
  let component: VoipInDeleteComponent;
  let fixture: ComponentFixture<VoipInDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipInDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipInDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
