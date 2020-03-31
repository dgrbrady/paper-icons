import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperIconsComponent } from './paper-icons.component';

describe('PaperIconsComponent', () => {
  let component: PaperIconsComponent;
  let fixture: ComponentFixture<PaperIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
