import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiPaginatorComponent } from './pm-ui-paginator.component';

describe('PmUiPaginatorComponent', () => {
  let component: PmUiPaginatorComponent;
  let fixture: ComponentFixture<PmUiPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiPaginatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
