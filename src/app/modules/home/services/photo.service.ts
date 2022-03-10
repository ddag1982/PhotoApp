import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoRequest } from '../interfaces';
import { Observable } from 'rxjs';
import { PhotoServiceModule } from './photo-service.module';

@Injectable({
  providedIn: PhotoServiceModule,
})
export class PhotoService {
  baseUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<PhotoRequest[]> {
    const getPhotosApiUrl = `${this.baseUrl}?limit=15`;
    return this.http.get<PhotoRequest[]>(getPhotosApiUrl);
  }

  getRandomPhoto(): Observable<PhotoRequest> {
    const getPhotoApiUrl = 'https://picsum.photos/id/237/200/300.jpg';
    return this.http.get<PhotoRequest>(this.baseUrl);
  }
}
