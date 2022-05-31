/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Form_serviceService } from './form_service.service';

describe('Service: Form_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Form_serviceService]
    });
  });

  it('should ...', inject([Form_serviceService], (service: Form_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
