import { TestBed } from '@angular/core/testing';

import { UniqueIDService } from './unique-id.service';

describe('UniqueIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueIDService = TestBed.get(UniqueIDService);
    expect(service).toBeTruthy();
  });
});
