import { TestBed } from '@angular/core/testing';

import { PaperUiService } from './paper-ui.service';

describe('PaperUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperUiService = TestBed.get(PaperUiService);
    expect(service).toBeTruthy();
  });
});
