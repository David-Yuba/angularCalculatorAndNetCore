import { TestBed } from '@angular/core/testing';

import { ExpressionValueService } from './expression-value.service';

describe('ExpressionValueService', () => {
  let service: ExpressionValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressionValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
