import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { PhotoRequest } from '../interfaces';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  photos: PhotoRequest[] = [];
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  trackByFn(index: number): number {
    return index;
  }

  loadData(scrollEvent: InfiniteScrollCustomEvent): void {
    if (this.photos.length === 45) {
      scrollEvent.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    let morePhotos: PhotoRequest[] = [];
    this.photoService.getPhotos().subscribe((res) => {
      morePhotos = res;
      this.photos.push(...morePhotos);
      scrollEvent.target.complete();
    });
  }

  private getPhotos(): void {
    this.photoService.getPhotos().subscribe((res) => {
      this.photos = res;
    });
  }
}
