import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperMButtonComponent } from './paper-m-button.component';

describe('PaperMButtonComponent', () => {
  let component: PaperMButtonComponent;
  let fixture: ComponentFixture<PaperMButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaperMButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
