import { TestBed, inject } from '@angular/core/testing';

import { ReqservicesService } from './reqservices.service';

describe('ReqservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqservicesService]
    });
  });

  it('should be created', inject([ReqservicesService], (service: ReqservicesService) => {
    expect(service).toBeTruthy();
  }));
});
