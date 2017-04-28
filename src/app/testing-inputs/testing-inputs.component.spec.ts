import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingInputsComponent } from './testing-inputs.component';

describe('TestingInputsComponent', () => {
  let component: TestingInputsComponent;
  let fixture: ComponentFixture<TestingInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
