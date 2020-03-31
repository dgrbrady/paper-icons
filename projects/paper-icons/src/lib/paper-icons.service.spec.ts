import { TestBed } from '@angular/core/testing';

import { PaperIconsService } from './paper-icons.service';

describe('PaperIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperIconsService = TestBed.get(PaperIconsService);
    expect(service).toBeTruthy();
  });
});
