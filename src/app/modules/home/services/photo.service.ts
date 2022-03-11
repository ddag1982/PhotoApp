import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../interfaces';
import { PhotoServiceModule } from './photo-service.module';

@Injectable({
  providedIn: PhotoServiceModule
})
export class PhotoService {
  getPhotos(): Observable<Photo[]> {
    const array: Photo[] = new Array(4000).fill('').map((element, i) => ({
      id: i + 1,
      photo: `https://picsum.photos/id/${i + 1}/500/500`,
      text: `Título ${this.generateRandomString(9)}`,
    }));
    return of(array);
  }

  private generateRandomString(num: number): string {
    return Math.random().toString(36).substring(0, num);
  }
}
