import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesearchVoipDeleteComponent } from './employeesearch-voip-delete.component';

describe('EmployeesearchVoipDeleteComponent', () => {
  let component: EmployeesearchVoipDeleteComponent;
  let fixture: ComponentFixture<EmployeesearchVoipDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesearchVoipDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesearchVoipDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
