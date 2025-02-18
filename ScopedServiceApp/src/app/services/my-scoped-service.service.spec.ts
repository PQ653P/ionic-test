import { TestBed } from '@angular/core/testing';

import { MyScopedServiceService } from './my-scoped-service.service';

describe('MyScopedServiceService', () => {
  let service: MyScopedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyScopedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
