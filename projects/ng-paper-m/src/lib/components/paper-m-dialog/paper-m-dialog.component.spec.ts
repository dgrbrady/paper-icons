import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperMDialogComponent } from './paper-m-dialog.component';

describe('PaperMDialogComponent', () => {
  let component: PaperMDialogComponent;
  let fixture: ComponentFixture<PaperMDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaperMDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
