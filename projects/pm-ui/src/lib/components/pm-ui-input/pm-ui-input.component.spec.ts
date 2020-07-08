import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmUiInputComponent } from './pm-ui-input.component';

describe('PmUiInputComponent', () => {
  let component: PmUiInputComponent;
  let fixture: ComponentFixture<PmUiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmUiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
