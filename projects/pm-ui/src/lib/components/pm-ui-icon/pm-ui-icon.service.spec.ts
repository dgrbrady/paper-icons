import { TestBed } from '@angular/core/testing';
import { PmUiIconService } from './pm-ui-icon.service';

describe('PmUiIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PmUiIconService = TestBed.get(PmUiIconService);
    expect(service).toBeTruthy();
  });
});
