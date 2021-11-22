import { TestBed } from '@angular/core/testing';

import { ExchangeFinderService } from './exchange-finder.service';

describe('ExchangeFinderService', () => {
  let service: ExchangeFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
