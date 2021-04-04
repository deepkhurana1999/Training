import { TestBed } from '@angular/core/testing';

import { Logv1Service } from './logv1.service';

describe('Logv1Service', () => {
  let service: Logv1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logv1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
