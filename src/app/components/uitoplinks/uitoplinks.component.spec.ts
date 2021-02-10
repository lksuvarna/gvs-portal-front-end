import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitoplinksComponent } from './uitoplinks.component';

describe('UitoplinksComponent', () => {
  let component: UitoplinksComponent;
  let fixture: ComponentFixture<UitoplinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitoplinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UitoplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
