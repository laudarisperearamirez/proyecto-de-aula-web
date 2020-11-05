import { TestBed } from '@angular/core/testing';

import { AcompananteService } from './acompanante.service';

describe('AcompananteService', () => {
  let service: AcompananteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcompananteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
