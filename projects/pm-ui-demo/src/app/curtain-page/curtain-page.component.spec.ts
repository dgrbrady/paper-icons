import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainPageComponent } from './curtain-page.component';

describe('CurtainPageComponent', () => {
  let component: CurtainPageComponent;
  let fixture: ComponentFixture<CurtainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
