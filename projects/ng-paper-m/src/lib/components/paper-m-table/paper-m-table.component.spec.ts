import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperMTableComponent } from './paper-m-table.component';

describe('PaperMTableComponent', () => {
  let component: PaperMTableComponent;
  let fixture: ComponentFixture<PaperMTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaperMTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
