import { TestBed } from '@angular/core/testing';

import { FormationsService } from './formations.service';

describe('FormationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormationsService = TestBed.get(FormationsService);
    expect(service).toBeTruthy();
  });
});
