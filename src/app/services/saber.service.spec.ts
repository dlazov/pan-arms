import { TestBed, inject } from '@angular/core/testing';

import { SaberService } from './saber.service';

describe('SaberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaberService]
    });
  });

  it('should be created', inject([SaberService], (service: SaberService) => {
    expect(service).toBeTruthy();
  }));
});
