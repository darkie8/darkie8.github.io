import { TestBed, inject } from '@angular/core/testing';

import { HttpGOTService } from './http-got.service';

describe('HttpGOTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGOTService]
    });
  });

  it('should be created', inject([HttpGOTService], (service: HttpGOTService) => {
    expect(service).toBeTruthy();
  }));
});
