import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletReferenceVariableComponent } from './templet-reference-variable.component';

describe('TempletReferenceVariableComponent', () => {
  let component: TempletReferenceVariableComponent;
  let fixture: ComponentFixture<TempletReferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletReferenceVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
