import { TestBed } from '@angular/core/testing';

import { ListicketService } from './listicket.service';

describe('ListicketService', () => {
  let service: ListicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
