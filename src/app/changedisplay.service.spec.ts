import { TestBed, inject } from '@angular/core/testing';

import { ChangedisplayService } from './changedisplay.service';

describe('ChangedisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangedisplayService]
    });
  });

  it('should be created', inject([ChangedisplayService], (service: ChangedisplayService) => {
    expect(service).toBeTruthy();
  }));
});
