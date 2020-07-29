import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySusanPageComponent } from './lazy-susan-page.component';

describe('LazySusanPageComponent', () => {
  let component: LazySusanPageComponent;
  let fixture: ComponentFixture<LazySusanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySusanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySusanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
