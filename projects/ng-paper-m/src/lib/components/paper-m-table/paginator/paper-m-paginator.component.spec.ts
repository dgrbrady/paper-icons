import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperMPaginatorComponent } from './paper-m-paginator.component';

describe('PaperMPaginatorComponent', () => {
  let component: PaperMPaginatorComponent;
  let fixture: ComponentFixture<PaperMPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaperMPaginatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
