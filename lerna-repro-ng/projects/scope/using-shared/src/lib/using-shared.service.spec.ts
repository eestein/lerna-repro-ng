import { TestBed } from '@angular/core/testing';

import { UsingSharedService } from './using-shared.service';

describe('UsingSharedService', () => {
  let service: UsingSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsingSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
