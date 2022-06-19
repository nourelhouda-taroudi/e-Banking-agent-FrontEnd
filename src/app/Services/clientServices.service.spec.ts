/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientServicesService } from './clientServices.service';

describe('Service: ClientServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientServicesService]
    });
  });

  it('should ...', inject([ClientServicesService], (service: ClientServicesService) => {
    expect(service).toBeTruthy();
  }));
});
