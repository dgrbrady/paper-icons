import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperMCurtainsComponent } from './paper-m-curtains.component';

describe('PaperMCurtainsComponent', () => {
  let component: PaperMCurtainsComponent;
  let fixture: ComponentFixture<PaperMCurtainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaperMCurtainsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMCurtainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
