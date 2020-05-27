import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiCurtainsComponent } from './pm-ui-curtains.component';

describe('PmUiCurtainsComponent', () => {
  let component: PmUiCurtainsComponent;
  let fixture: ComponentFixture<PmUiCurtainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiCurtainsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiCurtainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
