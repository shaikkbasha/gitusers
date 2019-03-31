import { TestBed } from '@angular/core/testing';

import { DropdownListService } from './dropdown-list.service';

describe('DropdownListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownListService = TestBed.get(DropdownListService);
    expect(service).toBeTruthy();
  });
});
