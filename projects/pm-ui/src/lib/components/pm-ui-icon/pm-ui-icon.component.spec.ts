import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiIconComponent } from './pm-ui-icon.component';

describe('PmUiIconComponent', () => {
  let component: PmUiIconComponent;
  let fixture: ComponentFixture<PmUiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
