import { TestBed } from '@angular/core/testing';

import { EShopFormService } from './eshop-form.service';

describe('EShopFormService', () => {
  let service: EShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
