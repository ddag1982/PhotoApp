import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { of, Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { Photo, PhotoFilter } from '../interfaces';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public photoDataDisplayed: Photo[] = [];
  public photoError: Photo = {
    text: 'No photos founded',
    photo:
      'https://static.ideal.es/www/pre2017/multimedia/noticias/201501/30/media/cortadas/HEIL--660x371.jpg',
    id: -1,
  };
  private currentPage = 0;
  private pageSize = 10;
  private photoData: Photo[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .getPhotos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Photo[]) => {
        this.photoData = response;
        this.photoDataDisplayed = this.getPhotosPage(this.currentPage);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public trackByFn(id: number): number {
    return id;
  }

  public loadData(scrollEvent: Event): void {
    if (this.photoDataDisplayed.length === this.photoData.length) {
      (scrollEvent as InfiniteScrollCustomEvent).target.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    // Simulación de que está cargando
    of('')
      .pipe(delay(1500))
      .subscribe(() => {
        this.currentPage++;
        this.photoDataDisplayed.push(...this.getPhotosPage(this.currentPage));
        (scrollEvent as InfiniteScrollCustomEvent).target.complete();
      });
  }

  public valueChanges(formValue: PhotoFilter) {
    this.photoDataDisplayed = this.photoData.filter((photo, index) => {
      if (formValue.id !== null) {
        this.infiniteScroll.disabled = true;
        return formValue.id === photo.id;
      }
      if (formValue.text.trim() !== '') {
        this.infiniteScroll.disabled = true;
        return photo.text.includes(formValue.text.trim());
      }
      this.infiniteScroll.disabled = false;
      return index <= (this.currentPage + 1) * this.pageSize;
    });
  }

  private getPhotosPage(page: number): Photo[] {
    return this.photoData.slice(
      page * this.pageSize,
      this.pageSize * (page + 1)
    );
  }
}
