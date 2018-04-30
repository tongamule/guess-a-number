import { TestBed, inject } from '@angular/core/testing';

import { NumberHelperService } from './number-helper.service';

describe('NumberHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberHelperService]
    });
  });

  it('should be created', inject([NumberHelperService], (service: NumberHelperService) => {
    expect(service).toBeTruthy();
  }));
});
