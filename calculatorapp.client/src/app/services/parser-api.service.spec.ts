import { TestBed } from '@angular/core/testing';

import { ParserApiService } from './parser-api.service';

describe('ParserApiService', () => {
  let service: ParserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
