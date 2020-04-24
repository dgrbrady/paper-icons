import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperMIconComponent } from './paper-m-icon.component';

describe('PaperMIconComponent', () => {
  let component: PaperMIconComponent;
  let fixture: ComponentFixture<PaperMIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaperMIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
