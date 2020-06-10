import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiTableComponent } from './pm-ui-table.component';

describe('PmUiTableComponent', () => {
  let component: PmUiTableComponent;
  let fixture: ComponentFixture<PmUiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
