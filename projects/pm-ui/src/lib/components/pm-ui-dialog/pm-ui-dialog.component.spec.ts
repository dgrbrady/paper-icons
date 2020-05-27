import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiDialogComponent } from './pm-ui-dialog.component';

describe('PmUiDialogComponent', () => {
  let component: PmUiDialogComponent;
  let fixture: ComponentFixture<PmUiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
