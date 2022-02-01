import { TestBed } from '@angular/core/testing';

import { SalaReuniaoServiceService } from './sala-reuniao-service.service';

describe('SalaReuniaoServiceService', () => {
  let service: SalaReuniaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaReuniaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
