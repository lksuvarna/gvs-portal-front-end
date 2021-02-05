import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicessearchComponent } from './servicessearch.component';

describe('ServicessearchComponent', () => {
  let component: ServicessearchComponent;
  let fixture: ComponentFixture<ServicessearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicessearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicessearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
