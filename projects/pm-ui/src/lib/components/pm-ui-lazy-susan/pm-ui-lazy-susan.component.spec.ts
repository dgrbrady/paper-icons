import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmUiLazySusanComponent } from './pm-ui-lazy-susan.component';

describe('PmUiLazySusanComponent', () => {
  let component: PmUiLazySusanComponent;
  let fixture: ComponentFixture<PmUiLazySusanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmUiLazySusanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiLazySusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
