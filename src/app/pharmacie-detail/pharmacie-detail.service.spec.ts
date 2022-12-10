import { TestBed } from '@angular/core/testing';

import { PharmacieDetailService } from './pharmacie-detail.service';

describe('PharmacieDetailService', () => {
  let service: PharmacieDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacieDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
