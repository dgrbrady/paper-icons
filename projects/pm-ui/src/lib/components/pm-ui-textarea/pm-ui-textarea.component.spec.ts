import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmUiTextareaComponent } from './pm-ui-textarea.component';

describe('PmUiTextareaComponent', () => {
  let component: PmUiTextareaComponent;
  let fixture: ComponentFixture<PmUiTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmUiTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
