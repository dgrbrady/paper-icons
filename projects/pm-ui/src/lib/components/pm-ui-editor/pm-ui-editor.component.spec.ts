import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PmUiEditorComponent } from './pm-ui-editor.component';

describe('PmUiEditorComponent', () => {
  let component: PmUiEditorComponent;
  let fixture: ComponentFixture<PmUiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PmUiEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
