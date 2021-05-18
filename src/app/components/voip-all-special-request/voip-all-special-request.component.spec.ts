import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipAllSpecialRequestComponent } from './voip-all-special-request.component';

describe('VoipAllSpecialRequestComponent', () => {
  let component: VoipAllSpecialRequestComponent;
  let fixture: ComponentFixture<VoipAllSpecialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoipAllSpecialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoipAllSpecialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
