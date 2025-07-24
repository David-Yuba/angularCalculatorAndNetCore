import { TestBed } from '@angular/core/testing';

import { InfixToSufixService } from './infix-to-sufix.service';

describe('InfixToSufixService', () => {
  let service: InfixToSufixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfixToSufixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
