import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiSelectComponent } from './pm-ui-select.component';

describe('PmUiSelectComponent', () => {
  let component: PmUiSelectComponent;
  let fixture: ComponentFixture<PmUiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
