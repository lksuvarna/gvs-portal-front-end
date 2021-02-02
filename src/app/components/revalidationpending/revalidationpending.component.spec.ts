import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevalidationpendingComponent } from './revalidationpending.component';

describe('RevalidationpendingComponent', () => {
  let component: RevalidationpendingComponent;
  let fixture: ComponentFixture<RevalidationpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevalidationpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevalidationpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
