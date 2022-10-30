import { TestBed } from '@angular/core/testing';

import { PlaceownerService } from './placeowner.service';

describe('PlaceownerService', () => {
  let service: PlaceownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
