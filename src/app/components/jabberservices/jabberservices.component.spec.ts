import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JabberservicesComponent } from './jabberservices.component';

describe('JabberservicesComponent', () => {
  let component: JabberservicesComponent;
  let fixture: ComponentFixture<JabberservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JabberservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JabberservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
