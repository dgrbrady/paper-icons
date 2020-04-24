import { TestBed } from '@angular/core/testing';
import { PaperMIconService } from './paper-m-icon.service';

describe('PaperMIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperMIconService = TestBed.get(PaperMIconService);
    expect(service).toBeTruthy();
  });
});
