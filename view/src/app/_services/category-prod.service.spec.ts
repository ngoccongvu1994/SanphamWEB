import { TestBed } from '@angular/core/testing';

import { CategoryProdService } from './category-prod.service';

describe('CategoryProdService', () => {
  let service: CategoryProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
