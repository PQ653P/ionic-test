import { TestBed } from '@angular/core/testing';

import { MyScopedService } from './my-scoped-service.service';

describe('MyScopedService', () => {
  let service: MyScopedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyScopedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
