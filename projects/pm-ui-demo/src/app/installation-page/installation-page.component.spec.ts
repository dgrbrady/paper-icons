import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationPageComponent } from './installation-page.component';

describe('InstallationPageComponent', () => {
  let component: InstallationPageComponent;
  let fixture: ComponentFixture<InstallationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
