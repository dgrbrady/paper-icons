import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiButtonComponent } from './pm-ui-button.component';

describe('PmUiButtonComponent', () => {
  let component: PmUiButtonComponent;
  let fixture: ComponentFixture<PmUiButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
