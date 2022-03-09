import { TestBed } from '@angular/core/testing';

import { ObrazacSaglasnostiService } from './obrazac-saglasnosti.service';

describe('ObrazacSaglasnostiService', () => {
  let service: ObrazacSaglasnostiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObrazacSaglasnostiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
