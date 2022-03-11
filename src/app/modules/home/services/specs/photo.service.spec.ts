import { TestBed } from '@angular/core/testing';

import { PhotoService } from '../photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoService],
    });
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return photos', (done) => {
    service.getPhotos().subscribe((res) => {
      expect(res.length).toEqual(4000);
      done();
    });
  });
});
