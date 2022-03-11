import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  photoDataDisplayed: Photo[] = [];
  private currentPage = 0;
  private pageSize = 10;
  private photoData: Photo[] = [];
  constructor() {}

  ngOnInit(): void {
    this.photoData = this.generatePhotoArray();
    this.photoDataDisplayed = this.getPhotosPage(this.currentPage);
  }

  trackByFn(index: number): number {
    return index;
  }

  loadData(scrollEvent: InfiniteScrollCustomEvent): void {

    if (this.photoDataDisplayed.length === 4000) {
      scrollEvent.target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    setTimeout(() => {
      this.currentPage++;
      this.photoDataDisplayed.push(...this.getPhotosPage(this.currentPage));
      scrollEvent.target.complete();
    }, 1500);
  }

  private generatePhotoArray(): Photo[] {
    const array: Photo[] = new Array(4000).fill('').map((element, i) => ({
      id: i + 1,
      photo: `https://picsum.photos/id/${i + 1}/500/500`,
      text: `Title of photo ${i + 1}`,
    }));
    return array;
  }

  private getPhotosPage(page: number): Photo[] {
    return this.photoData.slice(
      page * this.pageSize,
      this.pageSize * (page + 1)
    );
  }
}
