import { TestBed } from '@angular/core/testing';

import { ViewAllPharmacyService } from './view-all-pharmacy.service';

describe('ViewAllPharmacyService', () => {
  let service: ViewAllPharmacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllPharmacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
