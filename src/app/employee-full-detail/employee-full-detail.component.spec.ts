import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFullDetailComponent } from './employee-full-detail.component';

describe('EmployeeFullDetailComponent', () => {
  let component: EmployeeFullDetailComponent;
  let fixture: ComponentFixture<EmployeeFullDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFullDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
